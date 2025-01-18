import React from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import Typography from "../../atoms/Typography/Typography";
import Grid from "../../molecules/Grid/Grid";
import InputText from "../../atoms/InputText/InputText";
import InputNumber from "../../atoms/InputNumber/InputNumber";
import { Select } from "../../atoms/Select/Select";
import removeIcon from '../../../stories/assets/remove-red.svg';
import addButton from '../../../stories/assets/add-green.svg';
import './taxFeeRange.css'

export interface TaxFeeRangeType {
  taxesAndFees: {
    name: string;
    amount: number;
    type: string;
  }[] | null;
}

const TaxFeeRange: React.FC = () => {
  const { control, formState: { errors } } = useFormContext<TaxFeeRangeType>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "taxesAndFees",
  });

  return (<div style={{ background: "#1d1d1f" }}>
    <Grid gap={20} total={12}>
      {fields.map((field, index) => (
        <React.Fragment key={field.id} >
          <Grid item size={3} style={{ flexDirection: "column", display: "flex" }}>
            <Typography>Name</Typography>
            <Controller
              name={`taxesAndFees.${index}.name`}
              control={control}
              render={({ field }) => (
                <InputText
                  placeholder="Type here"
                  value={field.value || ""}
                  onChange={(value) => field.onChange(value)}
                  hasError={errors.taxesAndFees ? !!errors.taxesAndFees[index]?.name : false}
                  errorMessage={errors.taxesAndFees ? errors.taxesAndFees[index]?.name?.message : ""}
                />
              )}
            />
          </Grid>

          <Grid item size={4} style={{ flexDirection: "column", display: "flex" }}>
            <Typography>Amount</Typography>
            <Controller
              name={`taxesAndFees.${index}.amount`}
              control={control}
              render={({ field }) => (
                <InputNumber
                  placeholder="0"
                  value={field.value || 0}
                  onChange={(value) => field.onChange(value)}
                  hasError={errors.taxesAndFees ? !!errors.taxesAndFees[index]?.amount : false}
                  errorMessage={errors.taxesAndFees ? errors.taxesAndFees[index]?.amount?.message : ""}
                />
              )}
            />
          </Grid>

          <Grid item size={4} style={{ flexDirection: "column", display: "flex" }}>
            <Typography>Type</Typography>
            <Controller
              name={`taxesAndFees.${index}.type`}
              control={control}
              render={({ field }) => (
                <Select
                  options={[
                    { value: "fixed", label: "Fixed" },
                    { value: "percentage", label: "Percentage" },
                  ]}
                  value={field.value || "fixed"}
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
          </Grid>

          <Grid
            item
            size={1}
          >
            <a
              type="button"
              onClick={() => remove(index)}
              className="remove-button-a"
            >
              <img
                src={removeIcon}
                alt="remove-button"
                className="remove-icon"
              />
            </a>
          </Grid>
        </React.Fragment>
      ))}

      <Grid item size={12} style={{ flexDirection: "column", display: "flex" }}>
        <a
          type="button"
          onClick={() => append({ name: "", amount: 1, type: "fixed" })}
          className='add-more-button'
        >
          <img
            src={addButton}
            alt="add-icon"
            className="add-icon"
            
          />
          Add New Tax/Fee
        </a>
      </Grid>
    </Grid>
  </div>);
};

export default TaxFeeRange;
