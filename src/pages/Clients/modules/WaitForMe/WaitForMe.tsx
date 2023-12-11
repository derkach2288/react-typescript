import { useNavigate } from "react-router-dom";

import Button from "components/Button";

import { WaitForMeWrapper, TextContainer, Title, TexrContent, ButtonContainer } from "./styles";

function WaitForMe() {
  const navigate = useNavigate();

  const goBack = () => {
    // navigate("/clients");
    navigate(-1); // вернуться на предыдущую страницу
  };
  return (
    <WaitForMeWrapper>
      <TextContainer>
        <Title>Жди меня</Title>
        <TexrContent> Ищите друг друга, что бы ни было, и ждите, несмотря ни на что!</TexrContent>
        <TexrContent>937-99-92</TexrContent>
      </TextContainer>
      <ButtonContainer>
        <Button name="Go back" onClick={goBack} />
      </ButtonContainer>
    </WaitForMeWrapper>
  );
}

export default WaitForMe;
