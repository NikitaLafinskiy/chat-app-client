import { FormikProps } from 'formik';
import { AuthValues } from 'types/components/templates';

export interface AuthFormProps {
  formik: FormikProps<AuthValues>;
  isSignUp: boolean;
}
