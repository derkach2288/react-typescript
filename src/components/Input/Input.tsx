import {InputComponent, LabelComponent} from "./styles"

import {InputProps} from "./types"

function Input({placeholder, disabled = false, name, labelName}: InputProps) {
  const inputId = `${name}-${Math.random()}`
  return (
    <div>
      <LabelComponent htmlFor={inputId}>{labelName}</LabelComponent>
      <InputComponent name={name} id={inputId} type="text" placeholder={placeholder} disabled={disabled}/>
    </div>
  );
}

export default Input;
