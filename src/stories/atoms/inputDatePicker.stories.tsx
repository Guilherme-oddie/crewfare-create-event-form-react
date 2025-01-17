import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import InputDatePicker, { InputDatePickerProps } from "../../components/atoms/InputDatePicker/InputDatePicker";


export default {
  title: "Atom/InputDatePicker",
  component: InputDatePicker,
} as Meta;

const Template: StoryFn<InputDatePickerProps> = (args) => <InputDatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  onDateChange: (startDate, endDate) =>
    console.log("Start Date:", startDate, "End Date:", endDate),
};
