import React from "react";

const Button = ({ btnText, btnType }) => {
  let btnTypeClass = "";

  switch (btnType) {
    case "secondary":
      btnTypeClass = "secondary";
      break;
    case "outline":
      btnTypeClass = "outline";
      break;
      case "second":
      btnTypeClass = "second";
      break;
    default:
      btnTypeClass = ""; 
  }

  return <button className={`btn ${btnTypeClass}`}>{btnText}</button>;
};

export default Button;
