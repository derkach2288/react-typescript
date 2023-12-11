import { useNavigate } from "react-router-dom";

import Button from "components/Button";

import {
  KorneylukWrapper,
  CardContainer,
  TextContainer,
  Title,
  TexrContent,
  KorneylukImg,
  ButtonContainer,
} from "./styles";
import { KorneylukIcon } from "assets";

function Korneyluk() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/clients");
  };
  return (
    <KorneylukWrapper>
      <TextContainer>
        <Title>Игорь Корнелюк</Title>
        <CardContainer>
          <TexrContent>
            Подожди - дожди - дожди. <br /> Я оставил любовь позади <br />И
            теперь у меня впереди <br />
            Дожди, дожди, дожди.
          </TexrContent>
          <KorneylukImg src={KorneylukIcon} alt="korneyluk" />
        </CardContainer>
      </TextContainer>
      <ButtonContainer>
        <Button name="Go back" onClick={goBack} />
      </ButtonContainer>
    </KorneylukWrapper>
  );
}

export default Korneyluk;
