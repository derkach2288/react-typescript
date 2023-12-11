import { useContext } from "react";
import { ParagraphStylesBody } from "./styles";

import { BlogManagementContext } from "homeworks/Homework27/components/BlogManagement/BlogManagement";

function Message() {
  const messageBuffer = useContext(BlogManagementContext);
  return (
    <ParagraphStylesBody>
      {messageBuffer.map((msg) => (
        <p>{msg}</p>
      ))}
    </ParagraphStylesBody>
  );
}

export default Message;
