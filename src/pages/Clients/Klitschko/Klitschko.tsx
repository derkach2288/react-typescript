import { useNavigate } from "react-router-dom";

import Button from "components/Button";

import {
  KlitschkokWrapper,
  CardContainer,
  TextContainer,
  Title,
  KorneylukImg,
  ButtonContainer,
} from "./styles";
import { Klitschko1, Klitschko2, Klitschko3 } from "assets";

function Klitschko() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/clients");
  };
  return (
    <KlitschkokWrapper>
      <TextContainer>
        <Title>Виталий Кличко</Title>
        <CardContainer>
          <KorneylukImg src={Klitschko1} alt="Klitschko1" />
          <KorneylukImg src={Klitschko2} alt="Klitschko2" />
          <KorneylukImg src={Klitschko3} alt="Klitschko3" />
        </CardContainer>
      </TextContainer>
      <ButtonContainer>
        <Button name="Go back" onClick={goBack} />
      </ButtonContainer>
    </KlitschkokWrapper>
  );
}

export default Klitschko;
