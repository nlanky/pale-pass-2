// REACT
import { type FC, useContext, useState, useEffect } from "react";

// PUBLIC MODULES
import { Grid, Tooltip } from "@mui/material";
import { useDrop } from "react-dnd";
import { useNavigate } from "react-router-dom";

// LOCAL FILES
// Components
import { BuildingTooltip } from "features/building/components";
import { VillagerAvatar } from "features/villager/components";
// Constants
import {
  BUILDING_ID_TO_BUILDING,
  BUILDING_OVERLAY_AVATAR_SIZE,
  BUILDING_OVERLAY_HEIGHT,
  BUILDING_OVERLAY_WIDTH,
} from "features/building/constants";
// Context
import { DraggingVillagerContext } from "features/town/context";
// Hooks
import { useAppDispatch, useAppSelector } from "features/redux/hooks";
// Redux
import {
  selectCanAssignVillagerToBuilding,
  selectVillagerIdsAssignedToBuilding,
} from "features/building/selectors";
import { assignVillager } from "features/villagerBuilding/villagerBuildingSlice";

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
  const top = building.position.y * townImageHeight;
  const left = building.position.x * townImageWidth;

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
      onClose={() => {
        setTooltipShowing(false);
      }}
      onOpen={() => {
        setTooltipShowing(true);
      }}
      open={tooltipShowing}
      title={<BuildingTooltip building={building} />}
    >
      {/* ASSIGNED VILLAGERS */}
      <Grid
        container
        justifyContent="center"
        onClick={() => {
          navigate(`/building/${building.id}`);
        }}
        ref={drop}
        sx={[
          {
            position: "absolute",
            top: top - 3,
            left: left - 3,
            width: BUILDING_OVERLAY_WIDTH,
            height: BUILDING_OVERLAY_HEIGHT,
            borderWidth: 3,
            borderStyle: "ridge",
            borderColor: "containerBorder.main",
            cursor: "pointer",
          },
          isDragging &&
            canAssignVillager && {
              borderColor: "containerBorder.light",
            },
        ]}
      >
        {assignedVillagerIds.map((villagerId) => (
          <Grid key={villagerId} item>
            <VillagerAvatar
              villagerId={villagerId}
              size={BUILDING_OVERLAY_AVATAR_SIZE}
              borderColor="containerBorder.light"
              canClick={false}
              showTooltip={false}
            />
          </Grid>
        ))}
      </Grid>
    </Tooltip>
  );
};
