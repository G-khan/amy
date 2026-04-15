export type StoredCheckoutStatus = 'success' | 'fail' | 'bankTransfer';

export interface StoredCheckoutSnapshot {
  customerName: string;
  itemCount: number;
  itemTitles: string[];
  orderId?: string;
  status: StoredCheckoutStatus;
  totalAmount: number;
}

const STORAGE_KEY = 'amy-last-checkout';

export const saveCheckoutSnapshot = (snapshot: StoredCheckoutSnapshot) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
};

export const readCheckoutSnapshot = (): StoredCheckoutSnapshot | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const rawValue = window.sessionStorage.getItem(STORAGE_KEY);
  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue) as StoredCheckoutSnapshot;
  } catch {
    return null;
  }
};
