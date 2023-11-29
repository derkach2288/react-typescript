function Lesson20() {
  let isActive: boolean = true;
  isActive = false;

  let num: number = 3;
  num = 2.35;

  let info: string = `Ваше число: ${num}`;

  let fruits: string[] = ["apple", "orange"];
  let numbers: number[] = [1, 3, 5, 5];

  return <div className="lesson20-wrapper">{info}</div>;
}

export default Lesson20;
