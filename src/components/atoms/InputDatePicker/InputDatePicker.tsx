import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./inputDatePicker.css";
import calendar from "../../../stories/assets/calendar.svg";

export interface InputDatePickerProps {
  onDateChange: (startDate: Date | null, endDate: Date | null) => void;
  placeholder?: string;
  value: { startDate: Date | null; endDate: Date | null };
  hasError?: boolean;
  errorMessage?: string;
}

const InputDatePicker: React.FC<InputDatePickerProps> = ({
  onDateChange,
  placeholder,
  value,
  hasError = false,
  errorMessage = "",
}) => {
  const [startDate, setStartDate] = useState<Date | null>(value.startDate);
  const [endDate, setEndDate] = useState<Date | null>(value.endDate);

  useEffect(() => {
    setStartDate(value.startDate);
    setEndDate(value.endDate);
  }, [value]);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onDateChange(start, end);
  };

  const containerClass = `input-date-picker-container ${hasError ? "error" : ""
    }`;

  return (
    <div className={containerClass}>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        monthsShown={2}
        dateFormat="MM/dd/yyyy"
        shouldCloseOnSelect={false}
        wrapperClassName="datePicker"
        placeholderText={placeholder || "MM/DD/YYYY - MM/DD/YYYY"}
        popperPlacement="bottom-start"
        customInput={
          <div className="input-date-picker-wrapper">
            <span className="input-date-picker-field">
              {startDate && endDate
                ? `${startDate.toLocaleDateString("en-US")} - ${endDate.toLocaleDateString("en-US")}`
                : "MM/DD/YYYY - MM/DD/YYYY"}
            </span>
            <img src={calendar} alt="Calendar" className="calendar-icon" />
          </div>
        }
      />

      {hasError && errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputDatePicker;
