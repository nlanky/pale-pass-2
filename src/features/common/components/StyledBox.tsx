// PUBLIC MODULES
import { Box, type BoxProps, styled } from "@mui/material";

export const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.containerBackground.main,
  borderWidth: 5,
  borderStyle: "ridge",
  borderColor: theme.palette.containerBorder.main,
}));
