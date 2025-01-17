import React from 'react';
import './eventToggle.css';

export type EventToggleProps = {
  /** Defines which option is selected: "enable" or "disable" */
  active: 'enable' | 'disable';
  /** Function called when clicking on one of the options */
  onToggle?: (newState: 'enable' | 'disable') => void;
};

export const EventToggle: React.FC<EventToggleProps> = ({ active, onToggle }) => {
  const handleEnableClick = () => onToggle?.('enable');
  const handleDisableClick = () => onToggle?.('disable');

  const transformValue = active === 'enable' ? 'translateX(0%)' : 'translateX(100%)';

  const enableColor = active === 'enable' ? '#FFFFFF' : '#6C63FF';
  const disableColor = active === 'disable' ? '#FFFFFF' : '#6C63FF';

  return (
    <div className="event-toggle-container">
      <div className="event-toggle-switch" style={{ transform: transformValue }} />
      <div
        className="event-toggle-btn-label event-toggle-btn-label--enable"
        onClick={handleEnableClick}
        style={{ color: enableColor }}
      >
        Enable Event
      </div>
      <div
        className="event-toggle-btn-label event-toggle-btn-label--disable"
        onClick={handleDisableClick}
        style={{ color: disableColor }}
      >
        Disable Event
      </div>
    </div>
  );
};
