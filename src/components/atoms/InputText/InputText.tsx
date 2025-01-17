import React from 'react';
import './inputText.css';

export interface InputTextProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
}

const InputText: React.FC<InputTextProps> = ({
  placeholder,
  value,
  onChange,
  disabled,
  hasError,
  errorMessage,
}) => {
  const inputClass = `input-text${hasError ? ' error' : ''}`;

  return (
    <div className="input-text-container">
      <input
        type="text"
        className={inputClass}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
      {hasError && errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputText;
