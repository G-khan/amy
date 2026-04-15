export type StoredOrderStatus = 'payment_started' | 'paid' | 'failed' | 'pending_transfer';
export type StoredOrderMethod = 'card' | 'bankTransfer';

export interface StoredOrderLine {
  kind: 'standard' | 'custom';
  productId?: number;
  referenceArtworkId?: number;
  quantity: number;
  title: string;
  unitPrice: number;
  details?: string;
}

export interface StoredOrder {
  orderId: string;
  merchantOid: string;
  paymentMethod: StoredOrderMethod;
  status: StoredOrderStatus;
  totalAmount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  customerTcKimlik: string;
  lines: StoredOrderLine[];
  note?: string;
}

const orders = new Map<string, StoredOrder>();

export const saveOrder = (order: StoredOrder) => {
  orders.set(order.orderId, order);
};

export const getOrder = (orderId: string) => orders.get(orderId);

export const updateOrderStatus = (orderId: string, status: StoredOrderStatus) => {
  const order = orders.get(orderId);

  if (!order) {
    return;
  }

  orders.set(orderId, {
    ...order,
    status,
  });
};
