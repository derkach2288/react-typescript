import {CSSProperties} from "react"
import Button from "components/Button";
import {Lesson22Wrapper, LoginCard} from "./styles"

function Lesson22() {
  // ТИПЫ
  // Union type
  type WordOrNumber = string | number;
  let wordOrNumber: WordOrNumber = 3;
  // let wordOrNumber: string | number = 3;

  // Interace vs type

  interface Person {
    name: string;
    age: number;
  }

  type PersonType = {
    name: string;
    age: number;
  };

  const person1: Person = {
    name: "John",
    age: 25,
    color: "white",
  };

  const person: PersonType = {
    name: "John",
    age: 25,
  };

  interface Person {
    color: string;
  }

  // Дженерик

  type Car<T> = {
    name: string;
    color: string;
    params: T;
  };

  const car: Car<number[]> = {
    name: "Porshe",
    color: "Red",
    params: [2, 3, 4],
  };
  // -------------------------------------
  // STYLES
  // 1. способ стилизации: создать style.css, импортироватьего и добавлять классы

  // 2. inline - мы передаем объект в атрибут тега style

  const isRed: boolean = true; // представим, что это пропса, которая пришла от родителького компонента

  const paragraphStyles: CSSProperties = {
    fontSize: "20px",
    color: isRed ? "red" : "blue",
  };

  return (
    <Lesson22Wrapper>
      <p style={paragraphStyles}>Lesson 22</p>
      <p style={{color: "blue"}}>Lesson 22</p>
      <LoginCard>
        <Button isRedFont={true} disabled={true} name="Login" onClick={()=> {}}/>
      </LoginCard>
    </Lesson22Wrapper>
  );
}

export default Lesson22;
