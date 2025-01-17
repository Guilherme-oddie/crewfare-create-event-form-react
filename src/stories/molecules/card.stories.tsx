
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card from '../../components/molecules/Card/Card';
import InputText from '../../components/atoms/InputText/InputText';
import { Select } from '../../components/atoms/Select/Select';

export default {
    title: 'Molecules/Card',
    component: Card,
} as Meta;

const Template: StoryFn = (args) => <Card children={undefined} {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: (
        <>
            <InputText placeholder='Type here' value='' onChange={() => { }} />
            <Select value={"example"} onChange={() => { }} options={[{ value: "example1", label: "example1label" }, { value: "example2", label: "example2label" }]} />
        </>
    ),
    padding: '16px',
};

export const WithCustomPadding = Template.bind({});
WithCustomPadding.args = {
    children: (
        <>
            <InputText placeholder='Type here' value='' onChange={() => { }} />
            <Select value={"example"} onChange={() => { }} options={[{ value: "example1", label: "example1label" }, { value: "example2", label: "example2label" }]} />
        </>
    ),
    padding: '32px',
};
