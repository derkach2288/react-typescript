import { InputComponent, LabelComponent, ErrorContainer } from "./styles";

import { InputProps } from "./types";

function Input({
  placeholder,
  disabled = false,
  name,
  labelName,
  value,
  onChange,
  type = "text",
  error = undefined,
}: InputProps) {
  const inputId = `${name}-${Math.random()}`;

  return (
    <div>
      <LabelComponent htmlFor={inputId}>{labelName}</LabelComponent>
      <InputComponent
        $error={error}
        value={value}
        onChange={onChange}
        name={name}
        id={inputId}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
      />
      <ErrorContainer>{error}</ErrorContainer>
    </div>
  );
}

export default Input;
