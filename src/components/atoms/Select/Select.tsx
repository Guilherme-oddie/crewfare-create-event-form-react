import React from 'react';
import './select.css';

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange, fullWidth = false }) => {
  return (
    <div className={`custom-select ${fullWidth ? 'full-width' : ''}`}>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="arrow-down"></span>
    </div>
  );
};
