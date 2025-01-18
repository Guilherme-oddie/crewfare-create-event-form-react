import React, { useState } from "react";
import { HeaderComponent } from "../../organisms/HeaderComponent/HeaderComponent";
import Panel from "../../molecules/Panel/Panel";
import BasicInformationForm, { BasicInformationType } from "../../organisms/BasicInformationForm/BasicInformationForm";
import { FormProvider, useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import Grid from "../../molecules/Grid/Grid";
import { StepsSidebar } from "../../organisms/StepsSideBar/StepsSideBar";
import { DevTool } from "@hookform/devtools";
import DetailsForm, { DetailsFormType } from "../../organisms/DetailsForm/DetailsForm";
import DatesForm, { DatesFormType } from "../../organisms/DatesForm/DatesForm";
import { formValidatorSchema } from "../../../pages/ProductsPage/schemaValidation";
import { yupResolver } from "@hookform/resolvers/yup";


type StepStatus = "active" | "completed" | "inactive";

interface IStep {
  label: string;
  status: StepStatus;
  stepNumber: number;
}

type FormData = BasicInformationType & DetailsFormType & DatesFormType;

const EventForm: React.FC = () => {
  const methods = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      eventToggle: "disable",
      eventType: "private",
      eventName: "",
      upload: null,
      overlayText: undefined,
      overlayTextOnBanner: false,
      link: "",
      eventAddress: "",
      venueName: "",
      featureHotelsTitle: "",
      minimumNights: 1,
      bookableDates: {
        startDate: "",
        endDate: "",
      },
      checkInOutDates: {
        startDate: "",
        endDate: "",
      },
      dateRanges: [
        {
          startDate: "",
          endDate: "",
        },
      ],
      taxesAndFees: [
        {
          name: "",
          amount: 1,
          type: "fixed",
        },
      ],
    },
    resolver: (data, context, options) => {
      const validatorSchema = formValidatorSchema();
      return yupResolver(validatorSchema)(data, context, options);
    },
  });

  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  const [steps, setSteps] = useState<IStep[]>([
    { label: "Basic Information", status: "active", stepNumber: 1 },
    { label: "Details", status: "inactive", stepNumber: 2 },
    { label: "Dates", status: "inactive", stepNumber: 3 },
  ]);

  const currentStep = steps.findIndex((step) => step.status === "active") + 1;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    alert("Thank you for submitting your information!");
    console.log("Form Data:", data);
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setSteps((prevSteps) =>
        prevSteps.map((step) =>
          step.stepNumber === currentStep
            ? { ...step, status: "completed" }
            : step.stepNumber === currentStep + 1
              ? { ...step, status: "active" }
              : step
        )
      );
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setSteps((prevSteps) =>
        prevSteps.map((step) =>
          step.stepNumber === currentStep
            ? { ...step, status: "inactive" }
            : step.stepNumber === currentStep - 1
              ? { ...step, status: "active" }
              : step
        )
      );
    }
  };

  const handleStepClick = (stepNumber: number) => {
    setSteps((prevSteps) =>
      prevSteps.map((step) => ({
        ...step,
        status:
          step.stepNumber === stepNumber
            ? "active"
            : step.stepNumber < stepNumber
              ? "completed"
              : "inactive",
      }))
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <BasicInformationForm />;
      case 2:
        return <DetailsForm />;
      case 3:
        return <DatesForm />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <HeaderComponent />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid gap={0} total={12}>
          <Grid item size={1} style={{ backgroundColor: "#1d1d1f" }}>
            <div />
          </Grid>
          <Grid item size={2} style={{ display: "flex" }}>
            <StepsSidebar
              title="Create Event"
              steps={steps}
              errors={errors}
              onStepClick={handleStepClick} // Passando o manipulador de clique
            />
          </Grid>
          <Grid item size={9} style={{ display: "flex", alignItems: "start", justifyContent: "start" }}>
            <Panel
              title={steps[currentStep - 1]?.label || ""}
              onSave={handleSubmit(onSubmit)}
              onNext={handleNext}
              onPrev={handlePrev}
              buttonTitle={"Save"}
              fullwidth={true}
              currentStep={currentStep}
              errors={errors}
            >
              {renderStepContent()}
            </Panel>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default EventForm;
