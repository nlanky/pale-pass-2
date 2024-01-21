// REACT
import type { FC } from "react";

// PUBLIC MODULES
import { Box, Typography } from "@mui/material";

// LOCAL FILES
// Classes
import { Building } from "features/building/classes";

interface BuildingTooltipProps {
  building: Building;
}

export const BuildingTooltip: FC<BuildingTooltipProps> = ({
  building,
}) => {
  const { name } = building;

  // TODO Building state
  const tier = 1;

  return (
    <Box>
      <Typography variant="body1">
        {name} - Tier {tier}
      </Typography>
    </Box>
  );
};
