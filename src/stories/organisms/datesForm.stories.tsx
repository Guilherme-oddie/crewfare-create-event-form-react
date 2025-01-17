import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import DatesForm, { DatesFormType } from "../../components/organisms/DatesForm/DatesForm";


const meta: Meta<DatesFormType> = {
    title: "Organisms/DatesForm",
    component: DatesForm,
    parameters: {
        docs: {
            description: {
                component: "Formulário que gerencia Bookable Dates, Event Dates, Check-In/Check-Out e TaxFeeRange."
            },
        },
    },
};

export default meta;

type Story = StoryObj<DatesFormType>;
export const Default: Story = {
    render: () => {
        const methods = useForm<DatesFormType>({
            defaultValues: {
                bookableDates: {
                    startDate: "",
                    endDate: "",
                },
                dateRanges: [{
                    startDate: "",
                    endDate: "",
                }],
                checkInOutDates: {
                    startDate: "",
                    endDate: "",
                },
                taxesAndFees: [{
                    name: "",
                    amount: 1,
                    type: "",
                }],
            },
        });

        return (
            <FormProvider {...methods}>
                <DatesForm />
            </FormProvider>
        );
    },
};
