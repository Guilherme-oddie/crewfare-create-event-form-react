import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import EventDateRange from "../../components/molecules/EventDateRange/EventDateRange";

export default {
  title: "Molecules/EventDateRange",
  component: EventDateRange,
} as Meta;

const Template: StoryFn = () => {
  const methods = useForm({
    defaultValues: {
      dateRanges: [{ startDate: "", endDate: "" }],
    },
  });

  return (
    <FormProvider {...methods}>
      <div style={{ padding: "20px", background: "#1d1d1f" }}>
        <EventDateRange />
      </div>
    </FormProvider>
  );
};

export const Default = Template.bind({});
