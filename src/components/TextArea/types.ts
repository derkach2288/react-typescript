import { ReactEventHandler } from "react";


export interface TextAreaProps {
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  labelName: string;
  value?: string;
  onChange?: ReactEventHandler<HTMLTextAreaElement> | undefined;
  error?: string | undefined;
}
