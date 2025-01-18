import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Card from "../../../components/molecules/Card/Card";
import Typography from "../../atoms/Typography/Typography";
import { EventToggle } from "../../atoms/EventToggle/EventToggle";
import Grid from "../../molecules/Grid/Grid";
import { Select } from "../../atoms/Select/Select";
import InputText from "../../atoms/InputText/InputText";
import Upload from "../../atoms/Upload/Upload";
import Checkbox from "../../atoms/Checkbox/Checkbox";

interface UploadProps {
  type: string;
  size: string;
  name: string;
}

export interface BasicInformationType {
  eventToggle: "enable" | "disable";
  eventType: string;
  eventName: string;
  upload: UploadProps | null;
  overlayText?: string;
  overlayTextOnBanner: boolean;
}


const BasicInformationForm: React.FC = () => {
  const { control, watch, setValue, formState: { errors } } = useFormContext<BasicInformationType>();
  const overlayTextOnBanner = watch("overlayTextOnBanner");

  return (<>
    <Card padding="20px">
      <Grid gap={20} total={12}>
        <Grid item size={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Controller
            name="eventToggle"
            control={control}
            render={({ field }) => (
              <EventToggle
                active={field.value}
                onToggle={(value) => field.onChange(value)}
              />
            )}
          />
        </Grid>

        <Grid item size={6} style={{ flexDirection: "column", display: "flex" }}>
          <Typography>Event Type</Typography>
          <Controller
            name="eventType"
            control={control}
            render={({ field }) => (
              <Select
                fullWidth
                {...field}
                options={[
                  { value: "public", label: "Public Event" },
                  { value: "private", label: "Private Event" },
                ]}
              />
            )}
          />
        </Grid>

        <Grid item size={6} style={{ flexDirection: "column", display: "flex" }}>
          <Typography>Event Name</Typography>
          <Controller
            name="eventName"
            control={control}
            render={({ field }) => (
              <InputText
                placeholder="Type here"
                value={field.value || ""}
                onChange={(value) => field.onChange(value)}
                hasError={!!errors.eventName}
                errorMessage={errors.eventName?.message}
              />
            )}
          />
        </Grid>

        <Grid item size={12} style={{ flexDirection: "column", display: "flex" }}>
          <Typography>Banner</Typography>
          <Controller
            name="upload"
            control={control}
            render={({ field }) => (
              <Upload
                overlayText={watch("overlayText")}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item size={6}>
          <Controller
            name="overlayTextOnBanner"
            control={control}
            render={({ field }) => (
              <Checkbox
                label="Overlay Title on Banner"
                checked={field.value}
                onChange={(checked) => {
                  field.onChange(checked)
                  setValue('overlayText', "")
                }}
              />
            )}
          />
        </Grid>

        {overlayTextOnBanner && (
          <Grid item size={12} style={{ flexDirection: "column", display: "flex" }}>
            <Typography>Overlay Title</Typography>
            <Controller
              name="overlayText"
              control={control}
              render={({ field }) => (
                <InputText
                  placeholder="Type here"
                  value={field.value || ""}
                  onChange={(value) => field.onChange(value)}
                  hasError={!!errors.overlayText}
                  errorMessage={errors.overlayText?.message}
                />
              )}
            />
          </Grid>
        )}
      </Grid>
    </Card>
  </>
  );
};

export default BasicInformationForm;
