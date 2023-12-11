import { ChangeEventHandler } from "react";



export interface TextAreaProps {
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  labelName?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  error?: string | undefined;
}
