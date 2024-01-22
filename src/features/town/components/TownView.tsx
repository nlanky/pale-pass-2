// REACT
import type { DragEvent } from "react";

// PUBLIC MODULES
import {
  Avatar,
  Box,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// LOCAL FILES
// Assets
import { townTier1Image } from "assets/town";
// Classes
import type { Villager } from "features/villager/classes";
// Components
import { BuildingTooltip } from "features/building/components";
import { Image } from "features/common/components";
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
import { VILLAGER_ID_TO_VILLAGER } from "features/villager/constants";
// Hooks
import { useImageDimensions } from "features/common/hooks";
import { useAppDispatch, useAppSelector } from "features/redux/hooks";
// Redux
import {
  assignVillager,
  recruitVillager,
  unassignVillager,
} from "features/town/actions";
import {
  selectBuildingIdToAssignedVillagerIds,
  selectUnassignedVillagers,
  selectVillagersAvailableToRecruit,
} from "features/town/selectors";

export const TownView = () => {
  // Hooks
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const townImageDimensions = useImageDimensions(townTier1Image);
  const buildingIdToAssignedVillagerIds = useAppSelector(
    selectBuildingIdToAssignedVillagerIds,
  );
  const unassignedTownVillagers = useAppSelector(
    selectUnassignedVillagers,
  );
  const villagersAvailableToRecruit = useAppSelector(
    selectVillagersAvailableToRecruit,
  );

  // Handlers
  const onRecruit = (villager: Villager) => {
    dispatch(recruitVillager(villager));
  };
  const onVillagerDragStart = (
    event: DragEvent<HTMLDivElement>,
    villagerId: number,
  ) => {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text/plain", villagerId.toString());
  };
  const onVillagerDrop = (
    event: DragEvent<HTMLDivElement>,
    buildingId: number,
    assign: boolean,
  ) => {
    const villagerId = Number(
      event.dataTransfer.getData("text/plain"),
    );
    if (assign) {
      dispatch(assignVillager({ villagerId, buildingId }));
    } else {
      dispatch(unassignVillager(villagerId));
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item sx={{ position: "relative" }} xs={9}>
          <Image src={townTier1Image} style={{ width: "100%" }} />

          {/* BUILDINGS */}
          {Object.values(BUILDING_ID_TO_BUILDING).map((building) => (
            <Tooltip
              key={building.id}
              followCursor
              title={<BuildingTooltip building={building} />}
            >
              <Box
                onClick={() => {
                  navigate(`/building/${building.id}`);
                }}
                onDragOver={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                }}
                onDrop={(event) => {
                  onVillagerDrop(event, building.id, true);
                }}
                sx={{
                  position: "absolute",
                  top:
                    building.position.y * townImageDimensions.height,
                  left:
                    building.position.x * townImageDimensions.width,
                  width: 0.075 * townImageDimensions.width,
                  height: 0.075 * townImageDimensions.height,
                  cursor: "pointer",
                  "&:hover": {
                    border: "2px solid white",
                  },
                }}
              >
                {/* ASSIGNED VILLAGERS */}
                {Object.values(
                  buildingIdToAssignedVillagerIds[building.id] || {},
                ).map((villagerId) => (
                  <Avatar
                    onDragStart={(event) => {
                      onVillagerDragStart(event, villagerId);
                    }}
                    src={VILLAGER_ID_TO_VILLAGER[villagerId].image}
                    sx={{
                      position: "absolute",
                    }}
                  />
                ))}
              </Box>
            </Tooltip>
          ))}

          {/* VILLAGERS TO RECRUIT */}
          <Typography variant="body1">
            Available to recruit
          </Typography>
          {villagersAvailableToRecruit.map((villager) => (
            <Avatar
              onClick={() => {
                onRecruit(villager);
              }}
              src={villager.image}
            />
          ))}

          {/* UNASSIGNED VILLAGERS */}
          <Typography variant="body1">Unassigned</Typography>
          {unassignedTownVillagers.map((townVillager) => {
            const villager = VILLAGER_ID_TO_VILLAGER[townVillager.id];
            return (
              <Avatar
                draggable
                onDragStart={(event) => {
                  onVillagerDragStart(event, townVillager.id);
                }}
                src={villager.image}
              />
            );
          })}
          <Box
            alignItems="center"
            display="flex"
            justifyContent="center"
            onDragOver={(event) => {
              event.stopPropagation();
              event.preventDefault();
            }}
            onDrop={(event) => {
              onVillagerDrop(event, NaN, false);
            }}
            sx={{
              width: "100%",
              height: 50,
              border: "1px solid black",
            }}
          >
            <Typography variant="body1">
              Drag villager here to unassign
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Container>
  );
};
