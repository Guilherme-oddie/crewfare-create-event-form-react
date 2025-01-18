import React, { useEffect, useState } from "react";
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
  min = 1,
  max,
  step = 1,
  placeholder = "Type here",
  disabled = false,
  hasError = false,
  errorMessage = "",
}) => {
  const [inputValue, setInputValue] = useState<string>(value.toString());

  useEffect(() => {
    if (value < min) {
      onChange(min);
    } else {
      setInputValue(value.toString());
    }
  }, [value, min, onChange]);

  const handleIncrement = () => {
    const newValue = value + step;
    if (max === undefined || newValue <= max) onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = value - step;
    if (newValue >= min) onChange(newValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === "") {
      setInputValue("");
      return;
    }

    const num = Number(val);
    if (!isNaN(num)) {
      if (num >= min && (max === undefined || num <= max)) {
        setInputValue(val);
        onChange(num);
      } else if (num < min) {
        setInputValue(min.toString());
        onChange(min);
      } else if (max !== undefined && num > max) {
        setInputValue(max.toString());
        onChange(max);
      }
    }
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setInputValue(min.toString());
      onChange(min);
    }
  };

  const Arrow = ({ direction }: { direction: "up" | "down" }) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="#4FF6B1"
      stroke="#4FF6B1"
      strokeWidth="25"
      transform={direction === "down" ? "rotate(180)" : undefined}
    >
      <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 
               c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 
               C512.734,381.753,512.734,375.247,508.788,371.087z" />
    </svg>
  );

  return (
    <div className="input-number-container">
      <div className={`input-number${hasError ? " error" : ""}`}>
        <input
          type="number"
          className="input-number-field"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
        />
        <div className="input-number-buttons">
          <button
            type="button"
            className="input-number-button"
            onClick={handleIncrement}
            disabled={disabled || (max !== undefined && value >= max)}
            style={{ paddingTop: 10 }}
          >
            <Arrow direction="up" />
          </button>
          <button
            type="button"
            className="input-number-button"
            onClick={handleDecrement}
            disabled={disabled || value <= min}
            style={{ paddingBottom: 10 }}
          >
            <Arrow direction="down" />
          </button>
        </div>
      </div>
      {hasError && errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default InputNumber;
