import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Select } from '../../components/atoms/Select/Select';

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
}

export default {
  title: 'Atom/Select',
  component: Select,
  argTypes: {
    fullWidth: { control: 'boolean', description: 'Make the select full width' },
  },
} as Meta<SelectProps>;

const Template: StoryFn<SelectProps> = (args) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <Select
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        args.onChange(newValue);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 'public', label: 'Public Event' },
    { value: 'private', label: 'Private Event' },
  ],
  value: 'public',
  onChange: (value: string) => console.log('Selected:', value),
  fullWidth: false,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Default.args,
  fullWidth: true,
};
