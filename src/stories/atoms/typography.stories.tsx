import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Typography, { TypographyProps } from '../../components/atoms/Typography/Typography';

export default {
  title: 'Atom/Typography',
  component: Typography,
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'header', 'title'],
    },
    className: { control: 'text' },
  },
} as Meta<TypographyProps>;

const Template: StoryFn<TypographyProps> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Event Type',
  variant: 'default',
};

export const Header = Template.bind({});
Header.args = {
  children: 'Event Type',
  variant: 'header',
};

export const Title = Template.bind({});
Title.args = {
  children: 'Event Type',
  variant: 'title',
};
