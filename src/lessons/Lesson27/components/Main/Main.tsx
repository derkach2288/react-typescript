import { MainWrapper } from "./styles";

import { useState, createContext } from "react";
import { Section } from "lessons/Lesson27/components";

interface UserData {
  userName: string;
  age: number;
  email: string;
}

export const MainContext = createContext({
  userName: "",
  age: 0,
  email: "",
});

function Main() {
  const [userData, setUserData] = useState<UserData>({
    userName: "Igor Igorevich",
    age: 40,
    email: "example@example.com",
  });

  return (
    <MainContext.Provider value={userData}>
      <MainWrapper>
        <h1>Main Component</h1>
        {/* <Section userData={userData} /> */}
        <Section />
      </MainWrapper>
    </MainContext.Provider>
  );
}

export default Main;
