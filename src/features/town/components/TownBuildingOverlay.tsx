// REACT
import type { FC } from "react";

// PUBLIC MODULES
import { Box, Grid, Tooltip } from "@mui/material";
import { useDrop } from "react-dnd";
import { useNavigate } from "react-router-dom";

// LOCAL FILES
// Assets
import { townTier1Image } from "assets/town";
// Components
import { BuildingTooltip } from "features/building/components";
import { TownVillagerAvatar } from "features/town/components";
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
// Hooks
import { useImageDimensions } from "features/common/hooks";
import { useAppDispatch, useAppSelector } from "features/redux/hooks";
// Redux
import { assignVillager } from "features/town/actions";
import {
  selectTownBuilding,
  selectVillagerIdsAssignedToBuilding,
} from "features/town/selectors";

interface TownBuildingOverlayProps {
  buildingId: number;
}

export const TownBuildingOverlay: FC<TownBuildingOverlayProps> = ({
  buildingId,
}) => {
  // Hooks
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { width: townImageWidth, height: townImageHeight } =
    useImageDimensions(townTier1Image);
  const assignedVillagerIds = useAppSelector((state) =>
    selectVillagerIdsAssignedToBuilding(state, buildingId),
  );
  const townBuilding = useAppSelector((state) =>
    selectTownBuilding(state, buildingId),
  );
  const [{}, drop] = useDrop(
    () => ({
      accept: "villager",
      canDrop: () => townBuilding !== undefined,
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
      drop: (item) => {
        dispatch(
          assignVillager({
            villagerId: (item as any).id,
            buildingId,
          }),
        );
      },
    }),
    [dispatch],
  );

  // Derived variables
  const building = BUILDING_ID_TO_BUILDING[buildingId];

  return (
    <Tooltip
      followCursor
      title={<BuildingTooltip building={building} />}
    >
      <Box
        onClick={() => {
          navigate(`/building/${building.id}`);
        }}
        ref={drop}
        sx={[
          {
            position: "absolute",
            top: building.position.y * townImageHeight,
            left: building.position.x * townImageWidth,
            width: 0.075 * townImageWidth,
            height: 0.075 * townImageHeight,
            cursor: "pointer",
          },
        ]}
      >
        {/* ASSIGNED VILLAGERS */}
        <Grid
          container
          sx={{
            position: "absolute",
          }}
          wrap="nowrap"
        >
          {assignedVillagerIds.map((villagerId) => (
            <Grid key={villagerId} item>
              <TownVillagerAvatar villagerId={villagerId} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Tooltip>
  );
};
