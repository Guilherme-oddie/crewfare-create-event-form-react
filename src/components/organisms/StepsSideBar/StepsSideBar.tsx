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
  onStepClick?: (stepNumber: number) => void;
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
  onStepClick,
}) => {
  return (
    <div className="steps-sidebar-container">
      <div className="steps-sidebar-title">{title}</div>
      <ul className="steps-sidebar-list">
        {steps.map((step) => {
          const isActive = step.status === 'active';
          const hasError = doesStepHaveErrors(step.stepNumber, errors);

          let circleContent;
          if (step.status === 'completed' && !hasError) {
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
                step.status === 'completed' && !hasError ? 'steps-sidebar-item--completed' : '',
              ].join(' ')}
              onClick={() => onStepClick && onStepClick(step.stepNumber)}
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
