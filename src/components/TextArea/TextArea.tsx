import { TextAreaComponent, LabelComponent, ErrorContainer } from "./styles";

import {TextAreaProps} from "./types"


const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  disabled = false,
  name,
  labelName,
  value,
  onChange,
  error = undefined,
}) => {
  const textAreaId = `${name}-${Math.random()}`;

  return (
    <div>
      <LabelComponent htmlFor={textAreaId}>{labelName}</LabelComponent>
      <TextAreaComponent
        $error={error}
        value={value}
        onChange={onChange}
        name={name}
        id={textAreaId}
        placeholder={placeholder}
        disabled={disabled}
      />
      <ErrorContainer>{error}</ErrorContainer>
    </div>
  );
};

export default TextArea;
