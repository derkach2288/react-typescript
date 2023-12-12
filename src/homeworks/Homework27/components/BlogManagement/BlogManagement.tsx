import {
  useState,
  createContext,
  ChangeEvent,
  SetStateAction,
  Dispatch,
} from "react";
import { Card } from "homeworks/Homework27/components";

import TextArea from "components/TextArea";
import Button from "components/Button";

import { BlogManagementWrapper, TextAreaForm } from "./styles";

export const BlogManagementContext = createContext<string[]>([]);

function BlogManagement() {
  const [message, setMessage] = useState<string>("");
  const [messageBuffer, setMessageBuffer] = useState<string[]>([]);

  const onChangeInput = (
    event: ChangeEvent<HTMLTextAreaElement>
    // setValue: Dispatch<SetStateAction<string>>
  ) => {
    // setValue(event.target.value);
    setMessage(event.target.value);
  };

  const handleCreateMessage = () => {
    if (message) {
      setMessageBuffer((prevValue) => [...prevValue, message]);
      setMessage("");
    }
  };
  return (
    <BlogManagementContext.Provider value={messageBuffer}>
      <BlogManagementWrapper>
        <TextAreaForm>
          <TextArea
            value={message}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              // onChangeInput(event, setMessage);
              onChangeInput(event);
            }}
            name="message"
            labelName="Message"
            placeholder="Введите сообщение"
          ></TextArea>
          <Button name="Запостить" onClick={handleCreateMessage} />
          {/* {messageBuffer.map((msg) => 
          <p>{msg}</p>
        )} */}
        </TextAreaForm>
        {messageBuffer.length>0 && <Card />}
      </BlogManagementWrapper>
    </BlogManagementContext.Provider>
  );
}

export default BlogManagement;
