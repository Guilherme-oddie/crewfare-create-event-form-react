import React from 'react';
import carbon_information from '../../../stories/assets/carbon_information.svg';
import './tooltip.css';

export interface TooltipProps {
  content: string;
  label?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ content, label }) => {
  return (
    <div className="tooltip-container">
      <div className="tooltip-icon">
        <img src={carbon_information} alt="info-icon" />
      </div>
      {label && <span style={{ marginLeft: '4px' }}>{label}</span>}

      <div className="tooltip-content">
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
