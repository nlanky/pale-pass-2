// REACT
import { useState } from "react";

// PUBLIC MODULES
import { Grid, Typography } from "@mui/material";
import { useDrop } from "react-dnd";

// LOCAL FILES
// Components
import {
  StyledBox,
  StyledContainer,
} from "features/common/components";
import {
  ResourceViewButton,
  TownResources,
} from "features/resource/components";
import { NextTurnButton } from "features/system/components";
import { TownImage, TownPopulation } from "features/town/components";
import { VillagerAvatar } from "features/villager/components";
// Context
import { DraggingVillagerContext } from "features/town/context";
// Hooks
import { useAppDispatch, useAppSelector } from "features/redux/hooks";
// Redux
import { selectUnassignedVillagerIds } from "features/villager/selectors";
import { unassignVillager } from "features/villagerBuilding/villagerBuildingSlice";

export const TownView = () => {
  // Hooks
  const dispatch = useAppDispatch();
  const unassignedVillagerIds = useAppSelector(
    selectUnassignedVillagerIds,
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

            {/* UNASSIGNED VILLAGERS */}
            <StyledBox sx={{ width: 1, p: 1, mt: 1 }}>
              <Typography sx={{ mb: 1 }} variant="body1">
                Unassigned Villagers
              </Typography>

              {unassignedVillagerIds.length === 0 && (
                <Typography variant="body1">
                  No villagers to assign
                </Typography>
              )}

              {unassignedVillagerIds.length !== 0 && (
                <Grid container spacing={1}>
                  {unassignedVillagerIds.map((id) => (
                    <Grid item key={id}>
                      <VillagerAvatar
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
              <TownPopulation />
            </Grid>

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
