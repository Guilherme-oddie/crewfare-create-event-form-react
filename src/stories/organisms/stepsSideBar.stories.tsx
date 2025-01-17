import type { Meta, StoryObj } from '@storybook/react';
import { StepsSidebar, StepsSidebarProps } from '../../components/organisms/StepsSideBar/StepsSideBar';

const meta: Meta<StepsSidebarProps> = {
  title: 'Organisms/StepsSidebar',
  component: StepsSidebar,
};
export default meta;

export const Step1Active: StoryObj<StepsSidebarProps> = {
  args: {
    title: 'Create Event',
    steps: [
      { label: 'Basic Information', status: 'active', stepNumber: 1 },
      { label: 'Details', status: 'inactive', stepNumber: 2 },
      { label: 'Dates', status: 'inactive', stepNumber: 3 },
    ],
  },
};


export const Step2Active: StoryObj<StepsSidebarProps> = {
  args: {
    title: 'Create Event',
    steps: [
      { label: 'Basic Information', status: 'completed', stepNumber: 1 },
      { label: 'Details', status: 'active', stepNumber: 2 },
      { label: 'Dates', status: 'inactive', stepNumber: 3 },
    ],
  },
};


export const Step3Active: StoryObj<StepsSidebarProps> = {
  args: {
    title: 'Create Event',
    steps: [
      { label: 'Basic Information', status: 'completed', stepNumber: 1 },
      { label: 'Details', status: 'completed', stepNumber: 2 },
      { label: 'Dates', status: 'active', stepNumber: 3 },
    ],
  },
};


export const AllDone: StoryObj<StepsSidebarProps> = {
  args: {
    title: 'Create Event',
    steps: [
      { label: 'Basic Information', status: 'completed', stepNumber: 1 },
      { label: 'Details', status: 'completed', stepNumber: 2 },
      { label: 'Dates', status: 'completed', stepNumber: 3 },
    ],
  },
};
