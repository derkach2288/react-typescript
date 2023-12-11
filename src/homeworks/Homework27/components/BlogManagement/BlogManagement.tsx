import TextArea from "components/TextArea";

import {Homework27Wrapper, TestAreaForm} from "./styles"

function BlogManagement () {
  return (
  <Homework27Wrapper>
    <TextArea name="message" labelName="Message" placeholder="Введите сообщение"></TextArea>
  </Homework27Wrapper>
  );
}

export default BlogManagement;