import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tooltip, { TooltipProps } from '../../components/atoms/Tooltip/Tooltip';

export default {
    title: 'Atom/Tooltip',
    component: Tooltip,
} as Meta;

const Template: StoryFn<TooltipProps> = (args) => (
    <div style={{ margin: '100px', textAlign: 'center' }}>
        <Tooltip {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    content: 'Lorem ipsum dolor sit amet consectetur. Urna ac duis a gravida.',
};
