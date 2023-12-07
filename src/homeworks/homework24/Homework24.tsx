import { useState, useEffect, ChangeEvent } from "react";

import Button from "components/Button";

import { Homework24Wrapper, Text, Card, ContainerJokes } from "./styles";

function Homework24() {
  const [jokeQuestion, setJokeQuestion] = useState<string | undefined>(
    undefined
  );
  const [jokeAnswer, setJokeAnswer] = useState<string | undefined>(undefined);
  const [jokeError, setJokeError] = useState<string | undefined>(undefined);

  const getJokes = async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    console.log(response);

    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      setJokeQuestion(data.setup);
      setJokeAnswer(data.punchline);
    } else {
      setJokeError("Ошибка при получении данных");

    }
  };

  const handlerUpdateJoke = () => {
    if(jokeError === undefined) {
      alert("Вы получили новую шутку");
      getJokes();
    } else {
      alert("Ошибка при получении данных")
    }
  };


  useEffect(() => {
    getJokes();
  }, []);

  return (
    <Homework24Wrapper>
      <Card>
        <ContainerJokes>
          {jokeQuestion && <Text>{jokeQuestion}</Text>}
          {jokeAnswer && <Text>{jokeAnswer}</Text>}
          {jokeError && <Text>{jokeError}</Text>}
        </ContainerJokes>
        <Button
          name="new joke"
          onClick={() => {
            handlerUpdateJoke();
          }}
        />
      </Card>
    </Homework24Wrapper>
  );
}

export default Homework24;
