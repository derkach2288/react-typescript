import { useState, ChangeEvent } from "react";

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

function Homework23() {
  const [firstNameValue, setFirstNameValue] = useState<string>("");
  const [lastNameValue, setLastNameValue] = useState<string>("");
  const [ageValue, setAgeValue] = useState<string>("");
  const [positionValue, setPositionValue] = useState<string>("");
  const [showCard, setShowCard] = useState<boolean>(false);

  const onChangeFirstNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstNameValue(event.target.value);
  };

  const onChangeLastNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setLastNameValue(event.target.value);
  };

  const onChangeAgeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setAgeValue(event.target.value);
  };

  const onChangePositionInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPositionValue(event.target.value);
  };

  const handleCreateEmployee = () => {
    if (firstNameValue && lastNameValue && ageValue && positionValue) {
      setShowCard(true);
    } else {
      alert("Введите данные сотрудника");
    }
  };

  return (
    <Homework23Wrapper>
      <LoginCard>
        <Input
          value={firstNameValue}
          onChange={onChangeFirstNameInput}
          placeholder="Введите имя"
          name="first-name"
          labelName="Имя"
        />
        <Input
          value={lastNameValue}
          onChange={onChangeLastNameInput}
          placeholder="Введите фамилию"
          name="last-name"
          labelName="Фамилия"
        />
        <Input
          value={ageValue}
          onChange={onChangeAgeInput}
          type="number"
          placeholder="Введите возраст"
          name="age"
          labelName="Возраст"
        />
        <Input
          value={positionValue}
          onChange={onChangePositionInput}
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
          <ParagraphStylesBody>{firstNameValue}</ParagraphStylesBody>
        </EmployeeContainer>
        <EmployeeContainer>
          <ParagraphStylesTitle>Фамилия</ParagraphStylesTitle>
          <ParagraphStylesBody>{lastNameValue}</ParagraphStylesBody>
        </EmployeeContainer>
        <EmployeeContainer>
          <ParagraphStylesTitle>Возраст</ParagraphStylesTitle>
          <ParagraphStylesBody>{ageValue}</ParagraphStylesBody>
        </EmployeeContainer>
        <EmployeeContainer>
          <ParagraphStylesTitle>Должность</ParagraphStylesTitle>
          <ParagraphStylesBody>{positionValue}</ParagraphStylesBody>
        </EmployeeContainer>
      </EmployeeCard>}
      
    </Homework23Wrapper>
  );
}

export default Homework23;
