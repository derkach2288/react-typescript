import { useNavigate } from "react-router-dom";

import Button from "components/Button";

import { InstituteOfDelaysMeWrapper, TextContainer, Title, TexrContent, ButtonContainer } from "./styles";

function InstituteOfDelays() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/clients");
  };
  return (
    <InstituteOfDelaysMeWrapper>
      <TextContainer>
        <Title>Институт Задержек</Title>
        <TexrContent> Факультет Надежды и Ожидания! Обещанного 3 года ждут!</TexrContent>
        <TexrContent>123-12-22 - телефон в режиме ожидания</TexrContent>
      </TextContainer>
      <ButtonContainer>
        <Button name="Go back" onClick={goBack} />
      </ButtonContainer>
    </InstituteOfDelaysMeWrapper>
  );
}

export default InstituteOfDelays;
