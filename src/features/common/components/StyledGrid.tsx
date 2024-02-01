// PUBLIC MODULES
import { Grid, type GridProps, styled } from "@mui/material";

export const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  backgroundColor: theme.palette.containerBackground.main,
  borderWidth: 5,
  borderStyle: "ridge",
  borderColor: theme.palette.containerBorder.main,
}));
