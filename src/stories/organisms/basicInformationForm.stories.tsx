import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import BasicInformationForm from '../../components/organisms/BasicInformationForm/BasicInformationForm';

export default {
  title: 'Organisms/BasicInformationForm',
  component: BasicInformationForm,
} as Meta;

const Template: StoryFn = (args) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <BasicInformationForm {...args} />
    </FormProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
