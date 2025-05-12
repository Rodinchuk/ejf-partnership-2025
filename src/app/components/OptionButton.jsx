import React from "react";
import "./OptionButton.css";

function OptionButton({ variant = "default", onClick, disabled, children, isSoldOut }) {
  const variantClass =
    variant === "secondary" ? "optionButton-secondary" : "optionButton-default";

  return (
    <div className="optionButton-wrapper">
      <button
        className={`optionButton ${variantClass} ${isSoldOut ? "optionButton-disabled" : ""}`}
        onClick={isSoldOut ? () => {} : onClick} 
        disabled={disabled || isSoldOut}
      >
        {children}
      </button>
      {isSoldOut && (
        <div className="sold-out-overlay">
          <span className="sold-out-text">Sold Out</span>
        </div>
      )}
    </div>
  );
}

export default OptionButton;