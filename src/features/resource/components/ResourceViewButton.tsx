// REACT
import type { FC } from "react";

// PUBLIC MODULES
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ResourceViewButton: FC<{}> = () => {
  // Hooks
  const navigate = useNavigate();

  // Handlers
  const onOverview = () => {
    navigate("/resources");
  };

  return (
    <Button onClick={onOverview} sx={{ width: "100%" }}>
      Overview
    </Button>
  );
};
