import "./styles.css";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  name: string;
  type?: ButtonType;
  onClick: () => void;
}

function Button({ name, type = "button", onClick }: ButtonProps) {
  return (
    <button className="button-component" onClick={onClick} type={type}>
      {name}
    </button>
  );
}

export default Button;
