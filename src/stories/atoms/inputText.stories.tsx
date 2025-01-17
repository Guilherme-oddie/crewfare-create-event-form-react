import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputText, { InputTextProps } from '../../components/atoms/InputText/InputText';

export default {
  title: 'Atom/InputText',
  component: InputText,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
} as Meta<InputTextProps>;

const Template: StoryFn<InputTextProps> = (args) => (
  <InputText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type here',
  value: '',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled input',
  value: '',
  disabled: true,
};
