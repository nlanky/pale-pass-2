// PUBLIC MODULES
import { Avatar, Grid, Typography, useTheme } from "@mui/material";
import { useDrop } from "react-dnd";

// LOCAL FILES
// Assets
import { townTier1Image } from "assets/town";
// Components
import {
  Image,
  StyledBox,
  StyledContainer,
} from "features/common/components";
import {
  TownBuildingOverlay,
  TownResources,
  TownVillagerAvatar,
} from "features/town/components";
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
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

export const TownView = () => {
  // Hooks
  const dispatch = useAppDispatch();
  const theme = useTheme();
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

  // Handlers
  const onRecruit = (villager: Villager) => {
    dispatch(recruitVillager(villager));
  };

  return (
    <StyledContainer>
      <Grid container spacing={1}>
        <Grid item sx={{ position: "relative" }} xs={10}>
          <Image
            src={townTier1Image}
            style={{ width: "100%", marginBottom: theme.spacing(1) }}
          />

          {/* BUILDINGS */}
          {Object.keys(BUILDING_ID_TO_BUILDING).map((buildingId) => (
            <TownBuildingOverlay
              key={buildingId}
              buildingId={Number(buildingId)}
            />
          ))}

          {/* VILLAGERS TO RECRUIT */}
          <StyledBox sx={{ width: 1, p: 1, mb: 1 }}>
            <Typography sx={{ mb: 1 }} variant="body1">
              Available to Recruit
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

            {unassignedTownVillagerIds.length === 0 && (
              <Typography variant="body1">
                No villagers to assign
              </Typography>
            )}

            <Grid container spacing={1}>
              {unassignedTownVillagerIds.map((id) => (
                <Grid key={id} item>
                  <TownVillagerAvatar villagerId={id} />
                </Grid>
              ))}
            </Grid>
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
            }}
          >
            <Typography variant="body1">
              Drag villager here to unassign
            </Typography>
          </StyledBox>
        </Grid>
        <Grid item xs={2}>
          <TownResources />
        </Grid>
      </Grid>
    </StyledContainer>
  );
};
