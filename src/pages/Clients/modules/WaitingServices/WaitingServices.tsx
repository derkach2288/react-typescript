import { useNavigate } from "react-router-dom";

import Button from "components/Button";

import { WaitingServicesWrapper, TextContainer, Title, TexrContent, ButtonContainer } from "./styles";

function WaitingServices() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/clients");
  };
  return (
    <WaitingServicesWrapper>
      <TextContainer>
        <Title>Ожидание-Сервис</Title>
        <TexrContent>Только мы умеем качественно ждать! Закажите 3 часа ожидания по цене 4х!</TexrContent>
        <TexrContent>321-23-43 - вы 123 в очереди, соединение с оператором через 8 часов</TexrContent>
      </TextContainer>
      <ButtonContainer>
        <Button name="Go back" onClick={goBack} />
      </ButtonContainer>
    </WaitingServicesWrapper>
  );
}

export default WaitingServices;
