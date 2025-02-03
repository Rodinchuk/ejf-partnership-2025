import React from "react";
import "./OptionButton.css";

function OptionButton({ variant = "default", onClick, disabled, children }) {
  // Визначаємо клас кнопки відповідно до варіанту
  const variantClass =
    variant === "secondary" ? "optionButton-secondary" : "optionButton-default";

  return (
    <button
      className={`optionButton ${variantClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default OptionButton;
