import { IUser, IConversation } from "types/models/IUser.d";

type BasicElement<T> = {
  style?: React.CSSProperties;
  className?: string;
} & React.ComponentProps<T>;

export interface InputProps extends BasicElement<"input"> {
  name: string;
  type?: string;
}

export interface FormProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export interface ButtonProps extends BasicElement<"button"> {
  children: React.ReactNode;
}

export interface HeaderProps extends BasicElement<"h1"> {
  children: React.ReactNode;
}

export interface SearchResultsProps {
  results: IUser[];
  error: string | null;
}

interface SingleSearchResultSuccess {
  result: IUser;
  error: null;
}

interface SingleSearchResultFail {
  result: null;
  error: string;
}

export type SingleSearchResultProps =
  | SingleSearchResultSuccess
  | SingleSearchResultFail;

export interface SingleConversationProps {
  children: string;
  isPrivate: boolean;
  conversation: IConversation;
}

export interface FileInputProps extends BasicElement<"input"> {
  setFile: React.Dispatch<
    React.SetStateAction<
      | {
          initialFile: File;
          convertedFile: string;
        }
      | undefined
    >
  >;
}

export interface MessageProps {
  body: string;
  from: number;
  file?: string;
}

export interface AnchorProps extends BasicElement<"a"> {
  to: string;
}

export interface ProtectedRouteProps {
  children: React.ReactNode;
}
