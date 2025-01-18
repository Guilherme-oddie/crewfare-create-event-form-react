// StepsSidebar.tsx
import React from 'react';
import './stepsSidebar.css';
import alertIcon from '../../../stories/assets/alert.svg';
import { FieldErrors } from "react-hook-form";
import get from 'lodash/get';
import { BasicInformationType } from "../../organisms/BasicInformationForm/BasicInformationForm";
import { DetailsFormType } from "../../organisms/DetailsForm/DetailsForm";
import { DatesFormType } from "../../organisms/DatesForm/DatesForm";

type FormData = BasicInformationType & DetailsFormType & DatesFormType;

type StepStatus = 'active' | 'completed' | 'inactive';

interface IStep {
  label: string;
  status: StepStatus;
  stepNumber: number;
}

export interface StepsSidebarProps {
  title?: string;
  steps: IStep[];
  errors: FieldErrors<FormData>;
}

const step1Fields: string[] = [
  'eventToggle',
  'eventType',
  'eventName',
  'upload',
  'overlayText',
  'overlayTextOnBanner',
];

const step2Fields: string[] = [
  'eventAddress',
  'venueName',
  'featureHotelsTitle',
  'link',
  'minimumNights',
];

const step3Fields: string[] = [
  'bookableDates.startDate',
  'bookableDates.endDate',
  'checkInOutDates.startDate',
  'checkInOutDates.endDate',
  'dateRanges',
  'taxesAndFees',
];

function doesStepHaveErrors(stepNumber: number, errors: FieldErrors<FormData>): boolean {
  let fieldsToCheck: string[] = [];

  switch (stepNumber) {
    case 1:
      fieldsToCheck = step1Fields;
      break;
    case 2:
      fieldsToCheck = step2Fields;
      break;
    case 3:
      fieldsToCheck = step3Fields;
      break;
    default:
      return false;
  }

  return fieldsToCheck.some((fieldPath) => !!get(errors, fieldPath));
}

export const StepsSidebar: React.FC<StepsSidebarProps> = ({
  title = 'Create Event',
  steps,
  errors,
}) => {
  return (
    <div className="steps-sidebar-container">
      <div className="steps-sidebar-title">{title}</div>
      <ul className="steps-sidebar-list">
        {steps.map((step) => {
          const isCompleted = step.status === 'completed';
          const isActive = step.status === 'active';
          const hasError = doesStepHaveErrors(step.stepNumber, errors);

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
              {hasError && (
                <img
                  src={alertIcon}
                  alt="alert-icon"
                  style={{ marginLeft: '10px' }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
