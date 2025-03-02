"use client";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const CustomToggleButton = styled(ToggleButton)(() => ({
  color: "white",
  textTransform: "capitalize",
  height: "20px",
  fontSize: "10px",
  "&.Mui-selected": {
    backgroundColor: "var(--mainColor)",
    color: "white",
  },
}));

export const ToggleMode = () => {
  const [alignment, setAlignment] = React.useState("light");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => { 
    localStorage.setItem("theme", newAlignment);
    setAlignment(newAlignment);
  };
  useEffect(() => {
    setAlignment(localStorage.getItem("theme") || "light");
  }, [alignment]);

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <CustomToggleButton value="dark">Dark</CustomToggleButton>
        <CustomToggleButton value="light">Light</CustomToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
