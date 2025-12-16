export type TabType = 'crypto-to-cash' | 'cash-to-crypto' | 'crypto-to-fiat-loan';

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag?: string;
  type: 'crypto' | 'fiat';
}

export interface PaymentMethod {
  id: string;
  name: string;
  description?: string;
  type: 'wallet' | 'bank' | 'card';
  icon?: 'metamask' | 'rainbow' | 'walletconnect' | 'wallet';
}

export interface ConversionFormData {
  youPay: string;
  youReceive: string;
  payFromCurrency: Currency | null;
  payToCurrency: Currency | null;
  payFrom: PaymentMethod | null;
  payTo: PaymentMethod | null;
  activeTab: TabType;
}
