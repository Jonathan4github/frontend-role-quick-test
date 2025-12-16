import React, { useState, useEffect } from 'react';
import { Button, CurrencyInput,Dropdown, TabNavigation } from '../index';
import type { ConversionFormData, TabType } from '../../types';
import { CURRENCIES, PAYMENT_METHODS, TABS } from '../../constants/mockData';
import './CryptoCheckoutModal.css';

interface CryptoCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CryptoCheckoutModal: React.FC<CryptoCheckoutModalProps> = ({
  isOpen,
  onClose
}) => {
  const [formData, setFormData] = useState<ConversionFormData>({
    youPay: '0.00',
    youReceive: '0.00',
    payFromCurrency: CURRENCIES.find(c => c.code === 'BTC') || null,
    payToCurrency: CURRENCIES.find(c => c.code === 'NGN') || null,
    payFrom: null,
    payTo: null,
    activeTab: 'crypto-to-cash'
  });

  const [isLoading, setIsLoading] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleTabChange = (tabId: TabType) => {
    setFormData(prev => ({ ...prev, activeTab: tabId }));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Form submitted:', formData);
      alert('Conversion submitted successfully!');
    }, 2000);
  };

  const paymentMethodOptions = PAYMENT_METHODS.map(pm => ({
    value: pm.id,
    label: pm.name,
    icon: pm.icon,
  }));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <TabNavigation
          tabs={TABS}
          activeTab={formData.activeTab}
          onTabChange={handleTabChange}
        />

        <div className="modal-form">
          <CurrencyInput
            label="You pay"
            value={formData.youPay}
            onChange={(value) => setFormData(prev => ({ ...prev, youPay: value }))}
            currencies={CURRENCIES}
            selectedCurrency={formData.payFromCurrency}
            onCurrencyChange={(currency) =>
              setFormData(prev => ({ ...prev, payFromCurrency: currency }))
            }
          />

          <CurrencyInput
            label="You receive"
            value={formData.youReceive}
            onChange={(value) => setFormData(prev => ({ ...prev, youReceive: value }))}
            currencies={CURRENCIES}
            selectedCurrency={formData.payToCurrency}
            onCurrencyChange={(currency) =>
              setFormData(prev => ({ ...prev, payToCurrency: currency }))
            }
          />

          <Dropdown
            label="Pay from"
            options={paymentMethodOptions}
            value={formData.payFrom?.id || null}
            onChange={(value) => {
              const method = PAYMENT_METHODS.find(pm => pm.id === value);
              setFormData(prev => ({ ...prev, payFrom: method || null }));
            }}
            placeholder="Select an option"
          />

          <Dropdown
            label="Pay to"
            options={paymentMethodOptions}
            value={formData.payTo?.id || null}
            onChange={(value) => {
              const method = PAYMENT_METHODS.find(pm => pm.id === value);
              setFormData(prev => ({ ...prev, payTo: method || null }));
            }}
            placeholder="Select an option"
          />

          <Button onClick={handleSubmit} loading={isLoading}>
            Convert now
          </Button>
        </div>
      </div>
    </div>
  );
};