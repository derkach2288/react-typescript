import "./styles.css";
import {ButtonProps} from "./types"

// type ButtonType = "button" | "submit" | "reset";

// interface ButtonProps {
//   name: string;
//   type?: ButtonType;
//   onClick: () => void;
//   className?: string;
// }

function Button({ name, type = "button", onClick, className }: ButtonProps) {
  return (
    <button className={`button-component ${className}`} onClick={onClick} type={type}>
      {name}
    </button>
  );
}

export default Button;
