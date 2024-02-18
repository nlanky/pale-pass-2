// REACT
import type { FC } from "react";

// PUBLIC MODULES
import { Box, Typography } from "@mui/material";

// LOCAL FILES
// Classes
import type { Building } from "features/building/types";
// Hooks
import { useAppSelector } from "features/redux/hooks";
// Redux
import { selectBuildingById } from "features/building/selectors";

interface BuildingTooltipProps {
  building: Building;
}

export const BuildingTooltip: FC<BuildingTooltipProps> = ({
  building,
}) => {
  const { id, name } = building;

  // Hooks
  const townBuilding = useAppSelector((state) =>
    selectBuildingById(state, id),
  );

  // Derived variables
  const canBuild = townBuilding === undefined;
  const currentTier = townBuilding?.tier;
  const title = `${name}${
    currentTier ? ` - Tier ${currentTier}` : ""
  }`;

  return (
    <Box>
      <Typography variant="body1">{title}</Typography>
      {canBuild && (
        <Typography variant="body1">Available to build</Typography>
      )}
    </Box>
  );
};
