// REACT
import type { FC } from "react";

// PUBLIC MODULES
import { Box, Grid, Tooltip } from "@mui/material";
import { useDrop } from "react-dnd";
import { useNavigate } from "react-router-dom";

// LOCAL FILES
// Components
import { BuildingTooltip } from "features/building/components";
import { TownVillagerAvatar } from "features/town/components";
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
// Hooks
import { useAppDispatch, useAppSelector } from "features/redux/hooks";
// Redux
import { assignVillager } from "features/town/actions";
import {
  selectTownBuilding,
  selectVillagerIdsAssignedToBuilding,
} from "features/town/selectors";

interface TownBuildingOverlayProps {
  buildingId: number;
  townImageSize: { width: number; height: number };
}

export const TownBuildingOverlay: FC<TownBuildingOverlayProps> = ({
  buildingId,
  townImageSize,
}) => {
  // Derived variables
  const building = BUILDING_ID_TO_BUILDING[buildingId];
  const { width: townImageWidth, height: townImageHeight } =
    townImageSize;

  // Hooks
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const townBuilding = useAppSelector((state) =>
    selectTownBuilding(state, buildingId),
  );
  const assignedVillagerIds = useAppSelector((state) =>
    selectVillagerIdsAssignedToBuilding(state, buildingId),
  );
  const [{}, drop] = useDrop(
    () => ({
      accept: "villager",
      canDrop: () =>
        townBuilding !== undefined &&
        assignedVillagerIds.length + 1 <=
          building.maxAssignedVillagers,
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
      drop: (item: { id: number }) => {
        dispatch(
          assignVillager({
            villagerId: item.id,
            buildingId,
          }),
        );
      },
    }),
    [dispatch],
  );

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
            top:
              building.position.y * townImageHeight -
              0.05 * townImageHeight,
            left:
              building.position.x * townImageWidth -
              0.05 * townImageWidth,
            width: 0.1 * townImageWidth,
            height: 0.1 * townImageHeight,
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
