import { useState } from "react";

import Counter from "../../components/Counter";

import "./styles.css";

function Lesson21() {
  let emtyContainer: null = null;
  let undefContainer: undefined = undefined;

  // тип tupel - позволяет хранить массив фиксированной длинны с зазными типами. Важен порядок
  let tuppelArray: [string, number, string] = ["tiger", 3, "Lion"];

  // void эта функция, которая ничего не возвращает
  function helloWorld(): void {
    console.log("hello world");
  }

  const sayHi = (): void => {
    console.log("Hi");
  };

  // финкция, которая возвращает
  const sum = (a: number, b: number): number => {
    return a + b;
  };

  // тип any - любой тип данных
  let anyType: any = 3;
  anyType = "3";
  anyType = () => console.log("Any function");

  // enum

  enum SEASONS {
    WINTER = "Winter",
    SPRING = "Spring",
    SUMMER = "Summer",
    AUTUMN = "Aunumn",
    QWE = 3,
  }

  let spring: SEASONS = SEASONS.SPRING;

  console.log(SEASONS.SUMMER);

  // типизация объектов

  interface Persons {
    pets: string[];
  }

  interface Persons2 {
    someInfo?: string;
  }

  interface Person extends Persons, Persons2 {
    name: string;
    lastName: string;
    age: number;
    hairColor: string;
    isMarried?: boolean; // ? значит свойство необязательное
  }

  const person: Person = {
    name: "Josh",
    lastName: "Smith",
    age: 35,
    hairColor: "Black",
    isMarried: true,
    pets: ["Tiger"],
  };

  //----------

  const [count, setCount] = useState<number>(0);

  const onPlus = (): void => {
    setCount((prevValue: number) => prevValue + 1);
  };

  const onMinus = (): void => {
    setCount((prevValue: number) => prevValue - 1);
  };

  // несколько типов в одной переменной
  let some: string | undefined = undefined;
  some = "Hello";

  return (
    <div className="lesson21-wrapper">
      <Counter count={count} onPlus={onPlus} onMinus={onMinus} />
    </div>
  );
}

export default Lesson21;
