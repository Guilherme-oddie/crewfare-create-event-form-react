import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Card from "../../../components/molecules/Card/Card";
import Typography from "../../atoms/Typography/Typography";
import Grid from "../../molecules/Grid/Grid";
import InputText from "../../atoms/InputText/InputText";
import InputNumber from "../../atoms/InputNumber/InputNumber";

export interface DetailsFormType {
  link: string;
  eventAddress: string;
  venueName: string;
  featureHotelsTitle: string;
  minimumNights: number;
}

const DetailsForm: React.FC = () => {
  const { control, formState: { errors }, } = useFormContext<DetailsFormType>();

  return (
    <Card padding="20px">
      <Grid gap={20} total={12}>
        <Grid item size={12} style={{ flexDirection: "column", display: "flex" }}>
          <Typography>Link</Typography>
          <Controller
            name="link"
            control={control}
            render={({ field }) => (
              <InputText
                placeholder="Enter Link"
                value={field.value || ""}
                onChange={(value) => field.onChange(value)}
                hasError={!!errors.link}
                errorMessage={errors.link?.message}
              />
            )}
          />
        </Grid>

        <Grid item size={6} style={{ flexDirection: "column", display: "flex" }}>
          <Typography>Event Address</Typography>
          <Controller
            name="eventAddress"
            control={control}
            render={({ field }) => (
              <InputText
                placeholder="Enter Event Address"
                value={field.value || ""}
                onChange={(value) => field.onChange(value)}
                hasError={!!errors.eventAddress}
                errorMessage={errors.eventAddress?.message}
              />
            )}
          />
        </Grid>

        <Grid item size={6} style={{ flexDirection: "column", display: "flex" }}>
          <Typography>Venue Name</Typography>
          <Controller
            name="venueName"
            control={control}
            render={({ field }) => (
              <InputText
                placeholder="Enter Venue Name"
                value={field.value || ""}
                onChange={(value) => field.onChange(value)}
                hasError={!!errors.venueName}
                errorMessage={errors.venueName?.message}
              />
            )}
          />
        </Grid>

        <Grid item size={6} style={{ flexDirection: "column", display: "flex" }}>
          <Typography>Feature Hotels Title</Typography>
          <Controller
            name="featureHotelsTitle"
            control={control}
            render={({ field }) => (
              <InputText
                placeholder="Enter Feature Hotels Title"
                value={field.value || ""}
                onChange={(value) => field.onChange(value)}
                hasError={!!errors.featureHotelsTitle}
                errorMessage={errors.featureHotelsTitle?.message}
              />
            )}
          />
        </Grid>

        <Grid item size={6} style={{ flexDirection: "column", display: "flex" }}>
          <Typography>Minimum Nights</Typography>
          <Controller
            name="minimumNights"
            control={control}
            render={({ field }) => (
              <InputNumber
                placeholder="Enter Minimum Nights"
                value={field.value}
                onChange={(value) => field.onChange(value)}
                hasError={!!errors.minimumNights}
                errorMessage={errors.minimumNights?.message}
              />
            )}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default DetailsForm;
