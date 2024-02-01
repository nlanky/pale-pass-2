// PUBLIC MODULES
import { Grid, Typography } from "@mui/material";

// LOCAL FILES
// Components
import { Image, StyledGrid } from "features/common/components";
// Constants
import { RESOURCE_TO_IMAGE } from "features/resource/constants";
// Interfaces & Types
import type { Resource } from "features/resource/types";
// Redux
import { useAppSelector } from "features/redux/hooks";
import { selectTownResources } from "features/town/selectors";

export const TownResources = () => {
  const resources = useAppSelector((state) =>
    selectTownResources(state),
  );

  return (
    <StyledGrid container direction="column" sx={{ px: 1, py: 0.5 }}>
      {(Object.keys(resources) as Resource[]).map((resource) => (
        <Grid
          key={resource}
          alignItems="center"
          container
          item
          justifyContent="space-between"
          wrap="nowrap"
        >
          <Grid alignItems="center" container item wrap="nowrap">
            <Image
              src={RESOURCE_TO_IMAGE[resource]}
              style={{ width: 32, height: 32 }}
            />
            <Typography sx={{ ml: 1 }} variant="body1">
              {resource}
            </Typography>
          </Grid>
          <Typography variant="body1">
            {resources[resource]}
          </Typography>
        </Grid>
      ))}
    </StyledGrid>
  );
};
