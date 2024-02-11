// PUBLIC MODULES
import { Avatar, Grid, Typography } from "@mui/material";
import { useDrop } from "react-dnd";

// LOCAL FILES
// Components
import {
  StyledBox,
  StyledContainer,
} from "features/common/components";
import { ResourceViewButton } from "features/resource/components";
import { NextTurnButton } from "features/system/components";
import {
  TownImage,
  TownResources,
  TownVillagerAvatar,
} from "features/town/components";
// Hooks
import { useAppDispatch, useAppSelector } from "features/redux/hooks";
// Interfaces & Types
import type { Villager } from "features/villager/types";
// Redux
import {
  recruitVillager,
  unassignVillager,
} from "features/town/actions";
import {
  selectUnassignedVillagerIds,
  selectVillagersAvailableToRecruit,
} from "features/town/selectors";
import { useState } from "react";
import { DraggingVillagerContext } from "../context";

export const TownView = () => {
  // Hooks
  const dispatch = useAppDispatch();
  const unassignedTownVillagerIds = useAppSelector(
    selectUnassignedVillagerIds,
  );
  const villagersAvailableToRecruit = useAppSelector(
    selectVillagersAvailableToRecruit,
  );
  const [_, drop] = useDrop(
    () => ({
      accept: "villager",
      drop: (item: { id: number }) => {
        dispatch(unassignVillager(item.id));
      },
    }),
    [dispatch],
  );

  // Local state
  const [draggingVillager, setDraggingVillager] = useState(false);

  // Handlers
  const onRecruit = (villager: Villager) => {
    dispatch(recruitVillager(villager));
  };

  return (
    <DraggingVillagerContext.Provider
      value={{
        isDragging: draggingVillager,
        setDragging: setDraggingVillager,
      }}
    >
      <StyledContainer>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <TownImage />

            {/* VILLAGERS TO RECRUIT */}
            <StyledBox sx={{ width: 1, p: 1, mt: 1 }}>
              <Typography sx={{ mb: 1 }} variant="body1">
                Available to Recruit
              </Typography>

              {villagersAvailableToRecruit.length === 0 && (
                <Typography variant="body1">
                  No villagers available
                </Typography>
              )}

              {villagersAvailableToRecruit.length !== 0 && (
                <Grid container spacing={1}>
                  {villagersAvailableToRecruit.map((villager) => (
                    <Grid key={villager.id} item>
                      <Avatar
                        onClick={() => {
                          onRecruit(villager);
                        }}
                        src={villager.image}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </StyledBox>

            {/* UNASSIGNED VILLAGERS */}
            <StyledBox sx={{ width: 1, p: 1, mt: 1 }}>
              <Typography sx={{ mb: 1 }} variant="body1">
                Unassigned Villagers
              </Typography>

              {unassignedTownVillagerIds.length === 0 && (
                <Typography variant="body1">
                  No villagers to assign
                </Typography>
              )}

              {unassignedTownVillagerIds.length !== 0 && (
                <Grid container spacing={1}>
                  {unassignedTownVillagerIds.map((id) => (
                    <Grid key={id} item>
                      <TownVillagerAvatar
                        villagerId={id}
                        borderColor="containerBorder.main"
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </StyledBox>

            {/* UNASSIGN VILLAGERS */}
            <StyledBox
              alignItems="center"
              display="flex"
              justifyContent="center"
              ref={drop}
              sx={{
                width: "100%",
                height: 50,
                mt: 1,
              }}
            >
              <Typography variant="body1">
                Drag villager here to unassign
              </Typography>
            </StyledBox>
          </Grid>
          <Grid container direction="column" item xs={2}>
            <TownResources />
            <Grid item sx={{ mt: 1 }}>
              <ResourceViewButton />
            </Grid>
            <Grid item sx={{ mt: 1 }}>
              <NextTurnButton />
            </Grid>
          </Grid>
        </Grid>
      </StyledContainer>
    </DraggingVillagerContext.Provider>
  );
};
