// REACT
import { useState, type DragEvent } from "react";

// PUBLIC MODULES
import {
  Avatar,
  Box,
  Grid,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// LOCAL FILES
// Assets
import { townTier1Image } from "assets/town";
// Components
import { BuildingTooltip } from "features/building/components";
import {
  Image,
  StyledBox,
  StyledContainer,
} from "features/common/components";
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
import { VILLAGER_ID_TO_VILLAGER } from "features/villager/constants";
// Hooks
import { useImageDimensions } from "features/common/hooks";
import { useAppDispatch, useAppSelector } from "features/redux/hooks";
// Interfaces & Types
import type { Villager } from "features/villager/types";
// Redux
import {
  assignVillager,
  recruitVillager,
  unassignVillager,
} from "features/town/actions";
import {
  selectBuildingIdToAssignedVillagerIds,
  selectTownBuildingIds,
  selectUnassignedVillagers,
  selectVillagersAvailableToRecruit,
} from "features/town/selectors";

export const TownView = () => {
  // Hooks
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
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
  const townBuildingIds = useAppSelector(selectTownBuildingIds);

  // Local state
  const [assigningVillager, setAssigningVillager] = useState(false);

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
    setAssigningVillager(true);
  };
  const onVillagerDragEnd = () => {
    setAssigningVillager(false);
  };
  const onVillagerDrop = (
    event: DragEvent<HTMLDivElement>,
    buildingId: number,
    assign: boolean,
  ) => {
    const villagerId = Number(
      event.dataTransfer.getData("text/plain"),
    );
    if (isNaN(villagerId)) {
      return;
    }

    if (assign && !townBuildingIds.includes(buildingId)) {
      alert("You must build the building before assigning villagers");
      return;
    }

    if (assign) {
      dispatch(assignVillager({ villagerId, buildingId }));
    } else {
      dispatch(unassignVillager(villagerId));
    }

    onVillagerDragEnd();
  };

  return (
    <StyledContainer>
      <Grid container>
        <Grid item sx={{ position: "relative" }} xs={9}>
          <Image
            src={townTier1Image}
            style={{ width: "100%", marginBottom: theme.spacing(1) }}
          />

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
                sx={[
                  {
                    position: "absolute",
                    top:
                      building.position.y *
                      townImageDimensions.height,
                    left:
                      building.position.x * townImageDimensions.width,
                    width: 0.075 * townImageDimensions.width,
                    height: 0.075 * townImageDimensions.height,
                    cursor: "pointer",
                  },
                  assigningVillager && {
                    border: "2px solid white",
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
                  {Object.values(
                    buildingIdToAssignedVillagerIds[building.id] ||
                      {},
                  ).map((villagerId) => (
                    <Avatar
                      key={villagerId}
                      onDragEnd={onVillagerDragEnd}
                      onDragStart={(event) => {
                        onVillagerDragStart(event, villagerId);
                      }}
                      src={VILLAGER_ID_TO_VILLAGER[villagerId].image}
                    />
                  ))}
                </Grid>
              </Box>
            </Tooltip>
          ))}

          {/* VILLAGERS TO RECRUIT */}
          <StyledBox sx={{ width: 1, p: 1, mb: 1 }}>
            <Typography sx={{ mb: 1 }} variant="body1">
              Available to recruit
            </Typography>

            {villagersAvailableToRecruit.length === 0 && (
              <Typography variant="body1">
                No villagers available
              </Typography>
            )}

            <Grid container spacing={1}>
              {villagersAvailableToRecruit.map((villager) => (
                <Grid key={villager.id} item>
                  <Avatar
                    onClick={() => {
                      onRecruit(villager);
                    }}
                    src={villager.image}
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </StyledBox>

          {/* UNASSIGNED VILLAGERS */}
          <StyledBox sx={{ width: 1, p: 1, mb: 1 }}>
            <Typography sx={{ mb: 1 }} variant="body1">
              Unassigned Villagers
            </Typography>

            {unassignedTownVillagers.length === 0 && (
              <Typography variant="body1">
                No villagers to assign
              </Typography>
            )}

            <Grid container spacing={1}>
              {unassignedTownVillagers.map((townVillager) => {
                const villager =
                  VILLAGER_ID_TO_VILLAGER[townVillager.id];
                return (
                  <Grid key={townVillager.id} item>
                    <Avatar
                      key={townVillager.id}
                      draggable
                      onDragEnd={onVillagerDragEnd}
                      onDragStart={(event) => {
                        onVillagerDragStart(event, townVillager.id);
                      }}
                      src={villager.image}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </StyledBox>

          {/* UNASSIGN VILLAGERS */}
          <StyledBox
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
            }}
          >
            <Typography variant="body1">
              Drag villager here to unassign
            </Typography>
          </StyledBox>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </StyledContainer>
  );
};
