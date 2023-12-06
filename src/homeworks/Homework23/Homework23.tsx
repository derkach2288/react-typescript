import { useState, ChangeEvent, SetStateAction, Dispatch } from "react";

import Input from "components/Input";
import Button from "components/Button";

import {
  Homework23Wrapper,
  LoginCard,
  EmployeeCard,
  EmployeeContainer,
  ParagraphStylesTitle,
  ParagraphStylesBody,
} from "./styles";

interface UserInfo {
  name: string;
  lastName: string;
  ageValue: string;
  jobPosition: string;
}

function Homework23() {
  const [firstNameValue, setFirstNameValue] = useState<string>("");
  const [lastNameValue, setLastNameValue] = useState<string>("");
  const [ageValue, setAgeValue] = useState<string>("");
  const [positionValue, setPositionValue] = useState<string>("");
  const [showCard, setShowCard] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    lastName: "",
    ageValue: "",
    jobPosition: "",
  })



  // const onChangeFirstNameInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setFirstNameValue(event.target.value);
  // };

  // const onChangeLastNameInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setLastNameValue(event.target.value);
  // };

  // const onChangeAgeInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setAgeValue(event.target.value);
  // };

  // const onChangePositionInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPositionValue(event.target.value);
  // };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<string>>) => {
    setValue(event.target.value);
  };


  const handleCreateEmployee = () => {
    if (!!firstNameValue && !!lastNameValue && !!ageValue && !!positionValue) {
      setUserInfo({
        name: firstNameValue,
        lastName: lastNameValue,
        ageValue: ageValue,
        jobPosition: positionValue,
      });
      setShowCard(true);
    } else {
      setShowCard(false);
      setTimeout(() => alert("Введите данные во все поля"), 0);
    }
  };

  return (
    <Homework23Wrapper>
      <LoginCard>
        <Input
          value={firstNameValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {onChangeInput(event, setFirstNameValue)}}
          placeholder="Введите имя"
          name="first-name"
          labelName="Имя"
        />
        <Input
          value={lastNameValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {onChangeInput(event, setLastNameValue)}}
          placeholder="Введите фамилию"
          name="last-name"
          labelName="Фамилия"
        />
        <Input
          value={ageValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {onChangeInput(event, setAgeValue)}}
          type="number"
          placeholder="Введите возраст"
          name="age"
          labelName="Возраст"
        />
        <Input
          value={positionValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {onChangeInput(event, setPositionValue)}}
          placeholder="Введите должность"
          name="position"
          labelName="Должность"
        />
        <Button
          name="Создать"
          onClick={() => {
            handleCreateEmployee();
          }}
        />
      </LoginCard>

      {showCard && <EmployeeCard>
        <EmployeeContainer>
          <ParagraphStylesTitle>Имя</ParagraphStylesTitle>
          <ParagraphStylesBody>{userInfo.name}</ParagraphStylesBody>
        </EmployeeContainer>
        <EmployeeContainer>
          <ParagraphStylesTitle>Фамилия</ParagraphStylesTitle>
          <ParagraphStylesBody>{userInfo.lastName}</ParagraphStylesBody>
        </EmployeeContainer>
        <EmployeeContainer>
          <ParagraphStylesTitle>Возраст</ParagraphStylesTitle>
          <ParagraphStylesBody>{userInfo.ageValue}</ParagraphStylesBody>
        </EmployeeContainer>
        <EmployeeContainer>
          <ParagraphStylesTitle>Должность</ParagraphStylesTitle>
          <ParagraphStylesBody>{userInfo.jobPosition}</ParagraphStylesBody>
        </EmployeeContainer>
      </EmployeeCard>}
      
    </Homework23Wrapper>
  );
}

export default Homework23;
