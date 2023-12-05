import { InputComponent, LabelComponent } from "./styles";

import { InputProps } from "./types";

function Input({
  placeholder,
  disabled = false,
  name,
  labelName,
  value,
  onChange,
  type
}: InputProps) {
  const inputId = `${name}-${Math.random()}`;

  return (
    <div>
      <LabelComponent htmlFor={inputId}>{labelName}</LabelComponent>
      <InputComponent
        value={value}
        onChange={onChange}
        name={name}
        id={inputId}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
      />
    </div>
  );
}

export default Input;
