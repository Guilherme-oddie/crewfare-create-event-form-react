import React from 'react';
import './stepsSidebar.css';

type StepStatus = 'active' | 'completed' | 'inactive';

interface IStep {
  label: string;
  status: StepStatus;
  stepNumber: number;
}

export interface StepsSidebarProps {
  title?: string;
  steps: IStep[];
}

export const StepsSidebar: React.FC<StepsSidebarProps> = ({ title = 'Create Event', steps }) => {
  return (
    <div className="steps-sidebar-container">
      <div className="steps-sidebar-title">{title}</div>
      <ul className="steps-sidebar-list">
        {steps.map((step) => {
          const isCompleted = step.status === 'completed';
          const isActive = step.status === 'active';
          let circleContent;
          if (isCompleted) {
            circleContent = '✓';
          } else {
            circleContent = step.stepNumber.toString();
          }

          return (
            <li
              key={step.stepNumber}
              className={[
                'steps-sidebar-item',
                isActive ? 'steps-sidebar-item--active' : '',
                isCompleted ? 'steps-sidebar-item--completed' : '',
              ].join(' ')}
            >
              <div className="steps-sidebar-circle">{circleContent}</div>
              <span className="steps-sidebar-label">{step.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
