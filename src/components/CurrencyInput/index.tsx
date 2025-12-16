import React, { useState, useRef, useEffect } from 'react';
import type { Currency } from '../../types';
import { CaretIcon, SearchIcon } from '../svg';
import './CurrencyInput.css';

interface CurrencyInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  currencies: Currency[];
  selectedCurrency: Currency | null;
  onCurrencyChange: (currency: Currency) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  label,
  value,
  onChange,
  currencies,
  selectedCurrency,
  onCurrencyChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleCurrencySelect = (currency: Currency) => {
    onCurrencyChange(currency);
    setIsOpen(false);
    setSearchQuery('');
  };

  const filteredCurrencies = currencies.filter(currency =>
    currency.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    currency.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="currency-input">
      <div className="currency-input__wrapper">
        <label className="currency-input__label">{label}</label>
        <div className="currency-input__content">
          <input
            type="number"
            className="currency-input__field"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="0.00"
            min="0"
            step="0.01"
          />

          <div className="currency-input__selector" ref={dropdownRef}>
          <button
            type="button"
            className="currency-input__trigger"
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            {selectedCurrency && (
              <>
                <span className="currency-input__flag">{selectedCurrency.flag}</span>
                <span className="currency-input__code">{selectedCurrency.code}</span>
              </>
            )}
            <CaretIcon className='currency-input__icon' />
          </button>

          {isOpen && (
            <div className="currency-input__menu" role="listbox">
              <div className="currency-input__search">
                <SearchIcon className="currency-input__search-icon" />
                <input
                  ref={searchInputRef}
                  type="text"
                  className="currency-input__search-field"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <ul className="currency-input__list">
                {filteredCurrencies.length > 0 ? (
                  filteredCurrencies.map((currency) => (
                    <li
                      key={currency.code}
                      className={`currency-input__item ${selectedCurrency?.code === currency.code ? 'currency-input__item--selected' : ''}`}
                      onClick={() => handleCurrencySelect(currency)}
                      role="option"
                      aria-selected={selectedCurrency?.code === currency.code}
                    >
                      <span className="currency-input__flag">{currency.flag}</span>
                      <div className="currency-input__item-info">
                        {currency.code} - {currency.name}
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="currency-input__no-results">No currencies found</li>
                )}
              </ul>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyInput;
