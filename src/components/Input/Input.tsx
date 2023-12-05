import {InputComponent, LabelComponent} from "./styles"

import {InputProps} from "./types"

function Input({placeholder, disabled = false}: InputProps) {
  return (
    <div>
      <LabelComponent htmlFor={placeholder}>{placeholder}</LabelComponent>
      <InputComponent id={placeholder} type="text" placeholder={placeholder} disabled={disabled}/>
    </div>
  );
}

export default Input;
