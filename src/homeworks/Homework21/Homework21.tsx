import "./styles.css";
import { useState } from "react";
import Button from "components/Button";
// import like from "../../assets/like.png";
// import dislike from "../../assets/dislike.png";
import {LikeIcon, DisLikeIcon} from "assets"

function Homework21() {
  const [countLike, setCountLike] = useState<number>(0);
  const [countDislike, setCountDisike] = useState<number>(0);
  const onPlus = (): void => {
    setCountLike((prevValue: number) => prevValue + 1);
  };
  const onMinus = (): void => {
    setCountDisike((prevValue: number) => prevValue - 1);
  };

  const resetCount = () => {
    setCountLike(0);
    setCountDisike(0);
  };

  return (
    <div className="hw21-wrapper">
      <div className="container">
        <img
          onClick={onMinus}
          className="icon-like"
          // src={dislike}
          src={DisLikeIcon}
          alt="icon-like"
        />
        <p
          className={`count ${
            countDislike === 0
              ? "green-text"
              : countDislike < 0
              ? "red-text"
              : ""
          }`}
        >
          {countDislike !== 0 && countDislike}
        </p>
        <img
          onClick={onPlus}
          className="icon-like"
          // src={like}
          src={LikeIcon}
          alt="icon-like"
        />
        <p className={`count ${countLike === 0 ? "green-text" : ""}`}>
          {countLike !== 0 && countLike}
        </p>

        <div className="btn">
          <Button
            name="Reset Results"
            onClick={resetCount}
            className={countDislike !== 0 || countLike !== 0 ? "red-btn" : ""}
          />
        </div>
      </div>
    </div>
  );
}

export default Homework21;
