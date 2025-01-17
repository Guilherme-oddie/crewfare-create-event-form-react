import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Card from "../../molecules/Card/Card";
import Grid from "../../molecules/Grid/Grid";
import Typography from "../../atoms/Typography/Typography";
import Tooltip from "../../atoms/Tooltip/Tooltip";
import InputDatePicker from "../../atoms/InputDatePicker/InputDatePicker";
import TaxFeeRange, { TaxFeeRangeType } from "../../molecules/TaxFeeRange/TaxFeeRange";
import EventDateRange, { EventDateRangeType } from "../../molecules/EventDateRange/EventDateRange";

export type DatesFormType = EventDateRangeType & TaxFeeRangeType & {
	bookableDates: {
		startDate: string;
		endDate: string;
	};
	checkInOutDates: {
		startDate: string;
		endDate: string;
	};
}

const DatesForm: React.FC = () => {
	const { control, formState: { errors } } = useFormContext<DatesFormType>();

	return (
		<Card padding="20px">
			<Grid gap={20} total={12}>
				<Grid item size={12} className="dates-title-with-tooltip">
					<div style={{ display: "flex", alignItems: "start" }}>
						<Typography>Bookable Start &amp; End Dates</Typography>
						<Tooltip content="Lorem ipsum dolor sit amet consectetur. Urna ac duis a gravida." />
					</div>
				</Grid>

				<Grid item size={11}>
					<Controller
						name="bookableDates"
						control={control}
						render={({ field }) => {
							const startDateError = errors?.bookableDates?.startDate?.message;
							const endDateError = errors?.bookableDates?.endDate?.message;
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
				<Grid item size={12}>
					<Typography>Event Start and End Dates</Typography>
				</Grid>

				<Grid item size={12}>
					<EventDateRange />
				</Grid>

				<Grid item size={12}>
					<Typography>Default Check-In &amp; Check-Out Dates</Typography>
				</Grid>

				<Grid item size={11}>
					<Controller
						name="checkInOutDates"
						control={control}
						render={({ field }) => {
							const startDateError = errors?.checkInOutDates?.startDate?.message;
							const endDateError = errors?.checkInOutDates?.endDate?.message;
							const hasError = !!startDateError || !!endDateError;
							const errorMessage = [startDateError, endDateError].filter(Boolean).join(" | ");

							return (
								<InputDatePicker
									placeholder="Select Check-In & Check-Out Dates"
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

				<Grid item size={12}>
					<Typography>Taxes &amp; Fees</Typography>
				</Grid>

				<Grid item size={12}>
					<TaxFeeRange />
				</Grid>
			</Grid>
		</Card>
	);
};

export default DatesForm;
