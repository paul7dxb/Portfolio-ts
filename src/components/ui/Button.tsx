import { ReactNode, MouseEventHandler } from "react";
import "./Button.scss";

interface ButtonProps {
  isDisabled?: boolean
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
  type?: "button" | "submit" | "reset";
}

const Button = ({ isDisabled, children, className, onClick, type }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`Button ${className ?? ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;