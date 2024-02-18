// REACT
import { type FC, useContext, useState, useEffect } from "react";

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
import {
  BUILDING_OVERLAY_HEIGHT,
  BUILDING_OVERLAY_WIDTH,
} from "features/town/constants";
// Context
import { DraggingVillagerContext } from "features/town/context";
// Hooks
import { useAppDispatch, useAppSelector } from "features/redux/hooks";
// Redux
import {
  selectCanAssignVillagerToBuilding,
  selectVillagerIdsAssignedToBuilding,
} from "features/building/selectors";
import { assignVillager } from "features/villager/villagerBuildingSlice";

interface BuildingOverlayProps {
  buildingId: number;
  townImageSize: { width: number; height: number };
}

export const BuildingOverlay: FC<BuildingOverlayProps> = ({
  buildingId,
  townImageSize,
}) => {
  // Hooks
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const assignedVillagerIds = useAppSelector((state) =>
    selectVillagerIdsAssignedToBuilding(state, buildingId),
  );
  const canAssignVillager = useAppSelector((state) =>
    selectCanAssignVillagerToBuilding(state, buildingId),
  );

  // Local state
  const [tooltipShowing, setTooltipShowing] = useState(false);

  // Context
  const { isDragging } = useContext(DraggingVillagerContext);

  // Derived variables
  const building = BUILDING_ID_TO_BUILDING[buildingId];
  const { width: townImageWidth, height: townImageHeight } =
    townImageSize;
  const showHighlight = isDragging && canAssignVillager;
  const top =
    building.position.y * townImageHeight -
    (BUILDING_OVERLAY_HEIGHT / 2) * townImageHeight;
  const left =
    building.position.x * townImageWidth -
    (BUILDING_OVERLAY_WIDTH / 2) * townImageWidth;
  const width = BUILDING_OVERLAY_WIDTH * townImageWidth;
  const height = BUILDING_OVERLAY_HEIGHT * townImageHeight;

  // Hooks
  const [_, drop] = useDrop(
    () => ({
      accept: "villager",
      canDrop: () => canAssignVillager,
      drop: (item: { id: number }) => {
        dispatch(
          assignVillager({
            villagerId: item.id,
            buildingId,
          }),
        );
      },
    }),
    [canAssignVillager, dispatch],
  );

  // Effects
  useEffect(() => {
    if (isDragging) {
      setTooltipShowing(false);
    }
  }, [isDragging]);

  return (
    <Tooltip
      followCursor
      onClose={() => {
        setTooltipShowing(false);
      }}
      onOpen={() => {
        setTooltipShowing(true);
      }}
      open={tooltipShowing}
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
            top,
            left,
            width,
            height,
            cursor: "pointer",
          },
          showHighlight && {
            top: top - 1,
            left: left - 1,
            width: width + 2,
            height: height + 2,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "white",
          },
        ]}
      >
        {/* ASSIGNED VILLAGERS */}
        <Grid
          container
          sx={{
            position: "absolute",
          }}
        >
          {assignedVillagerIds.map((villagerId) => (
            <Grid key={villagerId} item>
              <TownVillagerAvatar
                villagerId={villagerId}
                size={width / 3}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Tooltip>
  );
};
