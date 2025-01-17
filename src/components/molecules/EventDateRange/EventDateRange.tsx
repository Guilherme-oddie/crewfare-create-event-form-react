import React from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import Grid from "../../molecules/Grid/Grid";
import InputDatePicker from "../../atoms/InputDatePicker/InputDatePicker";
import addButton from '../../../stories/assets/add-green.svg';
import removeIcon from '../../../stories/assets/remove-red.svg';

export interface EventDateRangeType {
  dateRanges: {
    startDate: string;
    endDate: string;
  }[];
}

const EventDateRange: React.FC = () => {
  const { control, formState: { errors } } = useFormContext<EventDateRangeType>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "dateRanges",
  });

  return (
    <Grid gap={20} total={12}>
      {fields.map((field, index) => (
        <React.Fragment key={field.id} >
          <Grid item size={11}>

            <Controller
              name={`dateRanges.${index}`}
              control={control}
              render={({ field }) => {
                const startDateError = errors?.dateRanges?.[index]?.startDate?.message;
                const endDateError = errors?.dateRanges?.[index]?.endDate?.message;
                const hasError = !!startDateError || !!endDateError;
                const errorMessage = [startDateError, endDateError].filter(Boolean).join(" | ");

                return (
                  <InputDatePicker
                    placeholder="Select Dates"
                    value={{
                      startDate: (field.value?.startDate as unknown as Date) || null,
                      endDate: (field.value?.endDate as unknown as Date) || null,
                    }}
                    onDateChange={(startDate, endDate) => {
                      field.onChange({ startDate, endDate });
                    }}
                    hasError={hasError}
                    errorMessage={errorMessage}
                  />
                );
              }}
            />

          </Grid>
          <Grid item size={1}>
            {index > 0 && (

              <a
                type="button"
                onClick={() => remove(index)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#FF4F4F",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "20px",
                }}
              >
                <img
                  src={removeIcon}
                  alt="remove-button"
                  style={{ marginRight: "8px" }}
                />
              </a>
            )}
          </Grid>
        </React.Fragment>
      ))}

      <Grid item size={12} style={{ flexDirection: "row", alignItems: "center" }}>
        <a
          type="button"
          className="add-more-button"
          onClick={() => append({ startDate: "", endDate: "" })}
          style={{
            display: "flex",
            alignItems: "center",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#4FF6B1",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "20px",
          }}
        >
          <img
            src={addButton}
            alt="add-button"
            style={{ marginRight: "8px" }}
          />
          Add Event Date Range
        </a>
      </Grid>
    </Grid>
  );
};

export default EventDateRange;
