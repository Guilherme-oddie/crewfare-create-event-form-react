import Panel from '../../components/molecules/Panel/Panel';
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

interface PanelArgs {
    title: string;
    onSave: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export default {
    title: 'Molecules/Panel',
    component: Panel,
    argTypes: {
        title: { control: 'text' },
        onSave: { action: 'save clicked' },
        onNext: { action: 'next clicked' },
        onPrev: { action: 'prev clicked' },
    },
} as Meta;

const Template: StoryFn<PanelArgs> = (args) => (
    <Panel
        {...args}
        buttonTitle='Save'
        onSave={args.onSave}
    >
        <p>This is some example content inside the panel.</p>
    </Panel>
);

export const Default = Template.bind({});
Default.args = {
    title: 'Panel Title',
};
