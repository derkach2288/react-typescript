import "./styles.css";
import { useState } from "react";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import Button from "../../components/Button";

function Homework21() {
  const [count, setCount] = useState<number>(0);
  const onPlus = (): void => {
    setCount((prevValue: number) => prevValue + 1);
  };
  const onMinus = (): void => {
    setCount((prevValue: number) => prevValue - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="hw21-wrapper">
      <div className="container">
        <img
          onClick={onMinus}
          className="icon-like"
          src={like}
          alt="icon-like"
        />
        <p className={`count ${count === 0 ? "green-text" : count < 0 ? "red-text" : ""}`}>{count}</p>
        <img
          onClick={onPlus}
          className="icon-like"
          src={dislike}
          alt="icon-like"
        />
        <div className="btn">
          <Button name="Reset Results" onClick={resetCount} />
        </div>
      </div>
    </div>
  );
}

export default Homework21;
