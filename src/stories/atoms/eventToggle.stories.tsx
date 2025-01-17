import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { EventToggle, EventToggleProps } from '../../components/atoms/EventToggle/EventToggle';


const meta: Meta<EventToggleProps> = {
  title: 'Atom/EventToggle',
  component: EventToggle,
};
export default meta;

type Story = StoryObj<EventToggleProps>;

export const Interactive: Story = {
  render: () => {
    const [state, setState] = useState<'enable' | 'disable'>('enable');
    return (
      <EventToggle
        active={state}
        onToggle={(newState) => setState(newState)}
      />
    );
  },
};

export const EnableSelected: Story = {
  args: {
    active: 'enable',
  },
};

export const DisableSelected: Story = {
  args: {
    active: 'disable',
  },
};
