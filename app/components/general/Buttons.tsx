import React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  text: string;
  onclick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Buttons: React.FC<ButtonProps> = ({ text, onclick }) => {
  return (
    <Button onClick={onclick} variant="outlined">
      {text}
    </Button>
  );
};

export default Buttons;
