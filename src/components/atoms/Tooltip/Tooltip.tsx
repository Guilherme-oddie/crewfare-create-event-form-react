import React from 'react';
import carbon_information from '../../../stories/assets/carbon_information.svg';
import './tooltip.css';

export interface TooltipProps {
  content: string;
}

const Tooltip: React.FC<TooltipProps> = ({ content }) => {
  return (
    <div className="tooltip-container">
      <div className="tooltip-icon">
        <img src={carbon_information} alt="info-icon" />
      </div>
      <div className="tooltip-content">
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
