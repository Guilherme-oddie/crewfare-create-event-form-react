import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import EventForm from '../../components/templates/EventForm/EventForm';

export default {
    title: 'Templates/EventForm',
    component: EventForm,
} as Meta;

const Template: StoryFn = (args) => <EventForm {...args} />;

export const Default = Template.bind({});
Default.args = {
    
};

