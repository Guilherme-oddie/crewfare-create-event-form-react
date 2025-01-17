import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputNumber, { InputNumberProps } from '../../components/atoms/InputNumber/InputNumber';

export default {
  title: 'Atom/InputNumber',
  component: InputNumber,
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
  },
} as Meta<InputNumberProps>;

const Template: StoryFn<InputNumberProps> = (args) => {
  const [value, setValue] = useState(args.value || 0);

  return (
    <InputNumber
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 1,
  min: 0,
  max: 10,
  step: 1,
  disabled: false,
};
