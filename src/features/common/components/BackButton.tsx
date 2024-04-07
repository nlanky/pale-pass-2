// REACT
import type { FC } from "react";

// PUBLIC MODULES
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const BackButton: FC<{}> = () => {
  // Hooks
  const navigate = useNavigate();

  // Handlers
  const onClick = () => {
    navigate(-1);
  };

  return <Button onClick={onClick}>Back</Button>;
};
