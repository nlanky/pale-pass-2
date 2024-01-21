// PUBLIC MODULES
import { Box, Container, Grid, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

// LOCAL FILES
// Assets
import { townTier1Image } from "assets/town";
// Components
import { BuildingTooltip } from "features/building/components";
import { Image } from "features/common/components";
// Constants
import { BUILDINGS } from "features/building/constants";
// Hooks
import { useImageDimensions } from "features/common/hooks";

export const TownView = () => {
  // Hooks
  const navigate = useNavigate();
  const townImageDimensions = useImageDimensions(townTier1Image);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item sx={{ position: "relative" }} xs={9}>
          <Image src={townTier1Image} style={{ width: "100%" }} />

          {/* BUILDINGS */}
          {BUILDINGS.map((building) => (
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
            </Tooltip>
          ))}
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Container>
  );
};
