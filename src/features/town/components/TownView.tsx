// PUBLIC MODULES
import { Avatar, Box, Container, Grid, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

// LOCAL FILES
// Assets
import { townTier1Image } from "assets/town";
// Components
import { BuildingTooltip } from "features/building/components";
import { Image } from "features/common/components";
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
// Hooks
import { useImageDimensions } from "features/common/hooks";
import { useAppSelector } from "features/redux/hooks";
// Redux
import {
  selectUnassignedVillagers,
  selectVillagersAvailableToRecruit,
} from "features/town/selectors";

export const TownView = () => {
  // Hooks
  const navigate = useNavigate();
  const townImageDimensions = useImageDimensions(townTier1Image);
  const unassignedTownVillagers = useAppSelector(
    selectUnassignedVillagers,
  );
  const villagersAvailableToRecruit = useAppSelector(
    selectVillagersAvailableToRecruit,
  );

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
              />
              {/* TODO: ASSIGNED VILLAGERS */}
            </Tooltip>
          ))}

          {/* VILLAGERS TO RECRUIT */}
          {villagersAvailableToRecruit.map((villager) => (
            <Avatar src={villager.image} />
          ))}

          {/* UNASSIGNED VILLAGERS */}
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Container>
  );
};
