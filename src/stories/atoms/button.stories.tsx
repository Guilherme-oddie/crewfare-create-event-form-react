import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../../components/atoms/Button/Button';
import { fn } from '@storybook/test';

const meta: Meta<ButtonProps> = {
  title: 'Atom/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    color: 'primary',
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    color: 'primary',
    size: 'small',
    label: 'Button',
  },
};
