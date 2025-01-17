import React from "react";
import "./inputNumber.css";

export interface InputNumberProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  disabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  value,
  onChange,
  min,
  max,
  step = 1,
  placeholder = "Type here",
  disabled = false,
  hasError = false,
  errorMessage = "",
}) => {
  const handleIncrement = () => {
    const newValue = value + step;
    if (max === undefined || newValue <= max) {
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    const newValue = value - step;
    if (min === undefined || newValue >= min) {
      onChange(newValue);
    }
  };

  const ArrowUp = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="#4FF6B1"
      stroke="#4FF6B1"
      strokeWidth="25"
    >
      <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z" />
    </svg>
  );

  const ArrowDown = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="#4FF6B1"
      stroke="#4FF6B1"
      strokeWidth="25"
    >
      <path d="M3.213,140.648L248.545,386.007c4.16,4.16,10.88,4.16,15.04,0l245.333-245.359c4.053-4.267,3.947-10.987-0.213-15.04 c-4.16-3.947-10.667-3.947-14.827,0L256.013,361.68L18.24,125.64c-4.267-4.053-10.987-3.947-15.04,0.213 C-0.053,129.32-0.053,135.827,3.213,140.648z" />
    </svg>
  );
  const containerClass = `input-number${hasError ? " error" : ""}`;

  return (
    <div className="input-number-container">
      <div className={containerClass}>
        <input
          type="number"
          className="input-number-field"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
        />
        <div className="input-number-buttons">
          <div className="input-number-button up" onClick={handleIncrement}>
            <ArrowUp />
          </div>
          <div className="input-number-button down" onClick={handleDecrement}>
            <ArrowDown />
          </div>
        </div>
      </div>
      {hasError && errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputNumber;
