import React from 'react';
import './panel.css';
import { Button } from '../../atoms/Button/Button';
import { FieldErrors } from 'react-hook-form';
import alertIcon from '../../../stories/assets/alert.svg';
import get from 'lodash/get';
import { BasicInformationType } from "../../organisms/BasicInformationForm/BasicInformationForm";
import { DetailsFormType } from "../../organisms/DetailsForm/DetailsForm";
import { DatesFormType } from "../../organisms/DatesForm/DatesForm";

interface PanelProps {
  title: string;
  onSave: () => void;
  onNext: () => void;
  onPrev: () => void;
  children: React.ReactNode;
  buttonTitle: string;
  fullwidth?: boolean;
  currentStep?: number;
  errors?: FieldErrors<FormData>;
  steps?: IStep[];
}

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

function doesStepHaveErrors(stepNumber: number | undefined, errors: FieldErrors<FormData> | undefined): boolean | undefined {
  if (!errors || !stepNumber) {
    return false;
  }

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

const Panel: React.FC<PanelProps> = ({ 
  title, 
  fullwidth, 
  onSave, 
  onNext, 
  onPrev, 
  children, 
  buttonTitle, 
  currentStep, 
  errors 
}) => {
  const hasError = doesStepHaveErrors(currentStep, errors);

  return (
    <div className="panel open" style={{ background: '#1d1d1f', width: fullwidth ? "100%" : "" }}>
      <div className="panel-header">
        <div className="panel-title">
          {title}
          {hasError && (
            <img
              src={alertIcon}
              alt="alert-icon"
              style={{ marginLeft: 10 }}
            />
          )}
        </div>
      </div>
      <div className="panel-children">
        {children}
      </div>
      <div className="panel-controls">
        <button
          onClick={onPrev}
          type="button"
          className={currentStep === 1 ? "opacity-button" : "nav-button"}
        />
        <button
          onClick={onNext}
          type="button"
          className={currentStep === 3 ? "opacity-button" : "nav-button"}
        />
      </div>
      <div className="panel-content">
        <Button label={buttonTitle} onChange={onSave} size='small' type='submit' />
      </div>
    </div>
  );
};

export default Panel;
