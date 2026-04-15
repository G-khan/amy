import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { portfolioItems, type PortfolioItem } from '../data/portfolioData';
import type { CartItem, CartLine, CustomCartItem, StandardCartItem } from '../types/checkout';

type CheckoutMode = 'cart' | 'quick';

type CartContextType = {
  cartItems: CartLine[];
  checkoutItems: CartLine[];
  cartItemCount: number;
  cartTotal: number;
  checkoutTotal: number;
  isInCart: (itemId: number) => boolean;
  addToCart: (item: PortfolioItem) => void;
  addCustomItemToCart: (item: CustomCartItem) => void;
  removeFromCart: (itemKey: string) => void;
  updateQuantity: (itemKey: string, quantity: number) => void;
  clearCart: () => void;
  startQuickBuy: (item: PortfolioItem) => void;
  startCustomQuickBuy: (item: CustomCartItem) => void;
  startCartCheckout: () => void;
  resetCheckout: () => void;
  completeCheckout: () => void;
  checkoutMode: CheckoutMode;
};

const CART_STORAGE_KEY = 'amy-cart-items';
type StoredCartLine =
  | {
      kind: 'standard';
      productId: number;
      quantity: number;
    }
  | ({
      kind: 'custom';
      quantity: number;
    } & CustomCartItem);
type LegacyStoredCartLine = {
  productId: number;
  quantity: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const getLineTotal = (line: CartLine) => line.item.price * line.quantity;
const createStandardCartItem = (item: PortfolioItem): StandardCartItem => ({
  kind: 'standard',
  key: `standard-${item.id}`,
  productId: item.id,
  title: item.title,
  image: item.image,
  price: item.details.price ?? 0,
  priceDisplay: item.details.priceDisplay ?? '',
  size: item.details.size,
  technique: item.details.technique,
  materials: item.details.materials,
});

const hydrateStoredCart = (storedLines: Array<StoredCartLine | LegacyStoredCartLine>) =>
  storedLines.reduce<CartLine[]>((lines, storedLine) => {
    if ('kind' in storedLine && storedLine.kind === 'custom') {
      if (storedLine.quantity <= 0 || storedLine.price <= 0) {
        return lines;
      }

      lines.push({
        item: {
          ...storedLine,
          kind: 'custom',
        },
        quantity: storedLine.quantity,
      });

      return lines;
    }

    const productId = 'kind' in storedLine ? storedLine.productId : storedLine.productId;
    const item = portfolioItems.find((portfolioItem) => portfolioItem.id === productId);

    if (!item || !item.details.price || item.details.status !== 'Available' || storedLine.quantity <= 0) {
      return lines;
    }

    lines.push({
      item: createStandardCartItem(item),
      quantity: storedLine.quantity,
    });

    return lines;
  }, []);

const serializeCart = (cartLines: CartLine[]): StoredCartLine[] =>
  cartLines.map((line) =>
    line.item.kind === 'standard'
      ? {
          kind: 'standard',
          productId: line.item.productId,
          quantity: line.quantity,
        }
      : {
          kind: 'custom',
          quantity: line.quantity,
          ...line.item,
        },
  );

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartLine[]>([]);
  const [quickBuyItem, setQuickBuyItem] = useState<CartItem | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const rawCart = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!rawCart) {
      return;
    }

    try {
      const parsed = JSON.parse(rawCart) as Array<StoredCartLine | LegacyStoredCartLine>;
      if (Array.isArray(parsed)) {
        setCartItems(hydrateStoredCart(parsed));
      }
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(serializeCart(cartItems)));
  }, [cartItems]);

  const upsertCartItem = useCallback((cartItem: CartItem) => {
    setCartItems((prev) => {
      const existingLine = prev.find((line) => line.item.key === cartItem.key);
      if (existingLine) {
        return prev.map((line) =>
          line.item.key === cartItem.key ? { ...line, quantity: line.quantity + 1 } : line,
        );
      }

      return [...prev, { item: cartItem, quantity: 1 }];
    });
  }, []);

  const addToCart = useCallback((item: PortfolioItem) => {
    if (item.details.status !== 'Available' || !item.details.price) {
      return;
    }

    upsertCartItem(createStandardCartItem(item));
  }, [upsertCartItem]);

  const addCustomItemToCart = useCallback((item: CustomCartItem) => {
    upsertCartItem(item);
  }, [upsertCartItem]);

  const removeFromCart = useCallback((itemKey: string) => {
    setCartItems((prev) => prev.filter((line) => line.item.key !== itemKey));
  }, []);

  const updateQuantity = useCallback((itemKey: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((line) => line.item.key !== itemKey));
      return;
    }

    setCartItems((prev) =>
      prev.map((line) => (line.item.key === itemKey ? { ...line, quantity } : line)),
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const startQuickBuy = useCallback((item: PortfolioItem) => {
    if (item.details.status !== 'Available' || !item.details.price) {
      return;
    }

    setQuickBuyItem(createStandardCartItem(item));
    window.location.hash = 'checkout';
  }, []);

  const startCustomQuickBuy = useCallback((item: CustomCartItem) => {
    setQuickBuyItem(item);
    window.location.hash = 'checkout';
  }, []);

  const startCartCheckout = useCallback(() => {
    if (cartItems.length === 0) {
      return;
    }

    setQuickBuyItem(null);
    window.location.hash = 'checkout';
  }, [cartItems.length]);

  const resetCheckout = useCallback(() => {
    setQuickBuyItem(null);
  }, []);

  const completeCheckout = useCallback(() => {
    if (quickBuyItem) {
      setQuickBuyItem(null);
      return;
    }

    setCartItems([]);
  }, [quickBuyItem]);

  const checkoutItems = useMemo<CartLine[]>(
    () => (quickBuyItem ? [{ item: quickBuyItem, quantity: 1 }] : cartItems),
    [cartItems, quickBuyItem],
  );

  const value = useMemo<CartContextType>(
    () => ({
      cartItems,
      checkoutItems,
      cartItemCount: cartItems.reduce((sum, line) => sum + line.quantity, 0),
      cartTotal: cartItems.reduce((sum, line) => sum + getLineTotal(line), 0),
      checkoutTotal: checkoutItems.reduce((sum, line) => sum + getLineTotal(line), 0),
      isInCart: (itemId: number) =>
        cartItems.some((line) => line.item.kind === 'standard' && line.item.productId === itemId),
      addToCart,
      addCustomItemToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      startQuickBuy,
      startCustomQuickBuy,
      startCartCheckout,
      resetCheckout,
      completeCheckout,
      checkoutMode: quickBuyItem ? 'quick' : 'cart',
    }),
    [
      addToCart,
      addCustomItemToCart,
      cartItems,
      checkoutItems,
      clearCart,
      completeCheckout,
      quickBuyItem,
      removeFromCart,
      resetCheckout,
      startCartCheckout,
      startCustomQuickBuy,
      startQuickBuy,
      updateQuantity,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
};
