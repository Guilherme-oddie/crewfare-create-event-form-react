import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import TaxFeeRange, { TaxFeeRangeType } from "../../components/molecules/TaxFeeRange/TaxFeeRange";

export default {
  title: "Molecules/TaxFeeRange",
  component: TaxFeeRange,
} as Meta;

const Template: StoryFn = (args) => {
  const methods = useForm<TaxFeeRangeType>({
    defaultValues: {
      taxesAndFees: [
        { name: "Service Fee", amount: 10, type: "fixed" },
        { name: "VAT", amount: 15, type: "percentage" },
      ],
    },
  });

  return (
    <FormProvider {...methods}>
      <div style={{ padding: "20px", background: "#1d1d1f" }}>
        <TaxFeeRange {...args} />
      </div>
    </FormProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
