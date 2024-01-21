// PUBLIC MODULES
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const BuildingView = () => {
  // Hooks
  const navigate = useNavigate();

  // Handlers
  const onBackClick = () => {
    navigate("/town");
  };

  return (
    <Container maxWidth="lg">
      <Button onClick={onBackClick}>Back to Town</Button>
    </Container>
  );
};
