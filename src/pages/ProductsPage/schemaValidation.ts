import * as yup from 'yup';

export const formDataValidationSchema = {
  // BasicInformationType
  eventToggle: yup
    .string()
    .oneOf(['enable', 'disable'], 'Please select either "enable" or "disable".')
    .required('Please select the event toggle.'),

  eventType: yup
    .string()
    .required('Please enter the type of the event.'),

  eventName: yup
    .string()
    .required('Please enter the name of the event.'),

  upload: yup
    .object({
      type: yup.string().required('Please enter the file type.'),
      size: yup.string().required('Please enter the file size.'),
      name: yup.string().required('Please enter the file name.'),
    })
    .nullable(),

  overlayTextOnBanner: yup
    .boolean()
    .required('Please specify if it will be an overlay text.'),

  overlayText: yup
    .string()
    .when('overlayTextOnBanner', (overlayTextOnBanner, schema) => {
      if (overlayTextOnBanner[0]) {
        console.log("Entrou")
        return schema.required('Please, enter the text for the banner.');
      }
      return schema.notRequired()
    }),

  // DetailsFormType
  link: yup
    .string()
    .url('Please enter a valid URL.')
    .required('Please enter the link.'),

  eventAddress: yup
    .string()
    .required('Please enter the address of the event.'),

  venueName: yup
    .string()
    .required('Please enter the venue name.'),

  featureHotelsTitle: yup
    .string()
    .required('Please enter the featured hotels title.'),

  minimumNights: yup
    .number()
    .typeError('Please enter a valid number for minimum nights.')
    .min(1, 'Please enter at least 1 night.')
    .required('Please specify the minimum nights.'),

  // DatesFormType (includes EventDateRangeType & TaxFeeRangeType)
  dateRanges: yup
    .array()
    .of(
      yup.object({
        startDate: yup
          .string()
          .required('Please enter the start date for the date range.'),
        endDate: yup
          .string()
          .required('Please enter the end date for the date range.'),
      })
    )
    .min(1, 'Please add at least one date range.')
    .required('Please add at least one date range.'),

  taxesAndFees: yup
    .array()
    .of(
      yup.object({
        name: yup
          .string()
          .required('Please enter the tax or fee name.'),
        amount: yup
          .number()
          .typeError('Please enter a valid number for minimum nights.')
          .min(1, 'Please enter at least 1 night.')
          .required('Please specify the minimum nights.'),
        type: yup
          .string()
          .required('Please enter the tax or fee type.'),
      })
    )
    .required('Please enter at least one tax or fee.').nullable(),

  bookableDates: yup
    .object({
      startDate: yup
        .string()
        .required('Please enter the bookable start date.'),
      endDate: yup
        .string()
        .required('Please enter the bookable end date.'),
    })
    .required('Please specify the bookable dates.'),

  checkInOutDates: yup
    .object({
      startDate: yup
        .string()
        .required('Please enter the check-in date.'),
      endDate: yup
        .string()
        .required('Please enter the check-out date.'),
    })
    .required('Please specify the check-in/out dates.'),
};

export function formValidatorSchema() {
  return yup.object().shape({
    ...formDataValidationSchema,
  });
}
