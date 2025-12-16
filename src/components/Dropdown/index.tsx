import React, { useState, useRef, useEffect } from 'react';
import { CaretIcon, WalletIcon, MetaMaskIcon} from '../svg';
import './Dropdown.css';

interface DropdownOption {
  value: string;
  label: string;
  description?: string;
  icon?: 'metamask' | 'rainbow' | 'walletconnect' | 'wallet';
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const renderIcon = (iconType?: string) => {
    if (!iconType) return null;

    switch (iconType) {
      case 'metamask':
        return <MetaMaskIcon className="dropdown__item-icon" />;
      case 'rainbow':
        // Add Rainbow icon when available
        return <WalletIcon className="dropdown__item-icon" />;
      case 'walletconnect':
        // Add WalletConnect icon when available
        return <WalletIcon className="dropdown__item-icon" />;
      case 'wallet':
      default:
        return <WalletIcon className="dropdown__item-icon" />;
    }
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <label className="dropdown__label">{label}</label>
      <button
        type="button"
        className="dropdown__trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedOption ? '' : 'dropdown__placeholder'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <CaretIcon className="dropdown__icon" />
      </button>

      {isOpen && (
        <ul className="dropdown__menu" role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              className={`dropdown__item ${value === option.value ? 'dropdown__item--selected' : ''}`}
              onClick={() => handleSelect(option.value)}
              role="option"
              aria-selected={value === option.value}
            >
              {renderIcon(option.icon)}
              <div>
                <div className="dropdown__item-label">{option.label}</div>
                {option.description && (
                  <div className="dropdown__item-description">{option.description}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
