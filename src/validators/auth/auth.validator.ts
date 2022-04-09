import * as yup from 'yup';

export const authValidator = yup.object().shape({
  username: yup
    .string()
    .required('Username field is required')
    .min(1, 'The field has to contain at least one character')
    .max(30, 'The field can not exceed 30 characters'),
  password: yup
    .string()
    .required('Password field is required')
    .min(5, 'The field has to contain at least 5 characters')
    .max(40, 'The field can not exceed 40 characters'),
});
