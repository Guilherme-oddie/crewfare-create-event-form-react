import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import DetailsForm, { DetailsFormType } from "../../components/organisms/DetailsForm/DetailsForm";

export default {
  title: "Organisms/DetailsForm",
  component: DetailsForm,
} as Meta;

const Template: StoryFn = (args) => {
  const methods = useForm<DetailsFormType>({
    defaultValues: {
      link: "https://example.com",
      eventAddress: "123 Main Street",
      venueName: "Grand Venue",
      featureHotelsTitle: "Top Hotels Nearby",
      minimumNights: 2,
    },
  });

  return (
    <FormProvider {...methods}>
      <DetailsForm {...args} />
    </FormProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
