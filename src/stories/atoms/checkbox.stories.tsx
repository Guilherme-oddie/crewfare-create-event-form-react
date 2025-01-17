import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Checkbox from '../../components/atoms/Checkbox/Checkbox';

export default {
  title: 'Atom/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
  },
} as Meta;

interface CheckboxArgs {
  label: string;
  checked?: boolean;
}

const Template: StoryFn<CheckboxArgs> = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked || false);

  return (
    <Checkbox
      label={args.label}
      checked={isChecked}
      onChange={(checked: boolean | ((prevState: boolean) => boolean)) => setIsChecked(checked)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Overlay Title on Banner',
  checked: false,
};
