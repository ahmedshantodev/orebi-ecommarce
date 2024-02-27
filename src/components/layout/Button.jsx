import React from "react";

const Button = ({ className, text, iconAlighnment, icon , onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {iconAlighnment == "left" || iconAlighnment == "both" ? icon : null}
      {text}
      {iconAlighnment == "right" || iconAlighnment == "both" ? icon  : null}
    </button>
  );
};

export default Button;