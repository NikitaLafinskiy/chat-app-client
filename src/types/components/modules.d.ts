import { FormikProps } from "formik";
import { AuthValues } from "types/components/templates";
import { IConversation } from "types/models/IConversation";

export interface AuthFormProps {
  formik: FormikProps<AuthValues>;
  isSignUp: boolean;
}

export interface ConversationsProps {
  conversations: IConversation[];
}

export interface MessageFormValues {
  message: string;
}

export interface HeaderProps {
  text: string;
}
