import React from "react";
import "./Button.scss";

const Button = ({
  onClick,
  children,
  className = "",
  disabled = false,
  borderRadius = "100px",
  style = {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      disabled={disabled}
      style={{ borderRadius, ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
