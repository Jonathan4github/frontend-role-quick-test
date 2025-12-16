import type { Currency, PaymentMethod } from '../types';

export const CURRENCIES: Currency[] = [
  {
    code: 'BTC',
    name: 'Bitcoin',
    symbol: '₿',
    flag: '₿',
    type: 'crypto'
  },
  {
    code: 'NGN',
    name: 'Nigerian Naira',
    symbol: '₦',
    flag: '🇳🇬',
    type: 'fiat'
  },
  {
    code: 'USD',
    name: 'US Dollar',
    symbol: '$',
    flag: '🇺🇸',
    type: 'fiat'
  },
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'metamask',
    name: 'MetaMask',
    type: 'wallet',
    icon: 'metamask'
  },
  {
    id: 'others',
    name: 'Other Crypto Wallets (Binance, Conibase, Bybit etc)',
    type: 'wallet',
    icon: 'wallet'
  },
];

export const TABS = [
  { id: 'crypto-to-cash' as const, label: 'Crypto to cash' },
  { id: 'cash-to-crypto' as const, label: 'Cash to crypto' },
  { id: 'crypto-to-fiat-loan' as const, label: 'Crypto to fiat loan' }
];
