import { useState, ChangeEvent, SetStateAction, Dispatch } from "react";

import TextArea from "components/TextArea";
import Button from "components/Button";

import { Homework27Wrapper, TextAreaForm } from "./styles";

function BlogManagement() {
  const [message, setMessage] = useState<string>("");
  const [messageBuffer, setMessageBuffer] = useState<string[]>([]);


  const onChangeInput = (event: ChangeEvent<HTMLTextAreaElement>, setValue: Dispatch<SetStateAction<string>>) => {
    setValue(event.target.value);
  };


  const handleCreateMessage = () => {
    setMessageBuffer([...messageBuffer, message]);
    setMessage("");
  }
  return (
    <Homework27Wrapper>
      <TextAreaForm>
        <TextArea
        value={message}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {onChangeInput(event, setMessage)}}          name="message"
          labelName="Message"
          placeholder="Введите сообщение"
        ></TextArea>
        <Button name="Запостить" onClick={handleCreateMessage} />
        {messageBuffer.map((msg) => 
          <p>{msg}</p>
        )}
      </TextAreaForm>
    </Homework27Wrapper>
  );
}

export default BlogManagement;
