// REACT
import type { FC } from "react";

// PUBLIC MODULES
import { People as PeopleIcon } from "@mui/icons-material";
import { Typography } from "@mui/material";

// LOCAL FILES
// Components
import { StyledGrid } from "features/common/components";
// Hooks
import { useAppSelector } from "features/redux/hooks";
// Redux
import {
  selectCurrentPopulation,
  selectMaxPopulation,
} from "features/town/selectors";

export const TownPopulation: FC<{}> = () => {
  // Hooks
  const currentPopulation = useAppSelector(selectCurrentPopulation);
  const maxPopulation = useAppSelector(selectMaxPopulation);

  return (
    <StyledGrid
      container
      justifyContent="center"
      sx={{ p: 1 }}
      wrap="nowrap"
    >
      <PeopleIcon />

      <Typography
        color={
          currentPopulation === maxPopulation
            ? "error.main"
            : "text.primary"
        }
        sx={{ ml: 1 }}
        variant="body1"
      >
        {currentPopulation} / {maxPopulation}
      </Typography>
    </StyledGrid>
  );
};
