// PUBLIC MODULES
import {
  Container,
  type ContainerProps,
  styled,
} from "@mui/material";

export const StyledContainer = styled(Container)<ContainerProps>(
  () => ({
    height: "100vh",
    overflowY: "auto",
  }),
);
