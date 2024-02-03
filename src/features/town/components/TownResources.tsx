// PUBLIC MODULES
import { Grid, Typography } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

// LOCAL FILES
// Components
import { Image, StyledGrid } from "features/common/components";
// Constants
import { RESOURCE_TO_IMAGE } from "features/resource/constants";
// Interfaces & Types
import type { Resource } from "features/resource/types";
// Redux
import { useAppSelector } from "features/redux/hooks";
import {
  selectTownResources,
  selectTownResourcesPerTurn,
} from "features/town/selectors";

export const TownResources = () => {
  const resources = useAppSelector((state) =>
    selectTownResources(state),
  );
  const resourcesPerTurn = useAppSelector((state) =>
    selectTownResourcesPerTurn(state),
  );

  return (
    <StyledGrid container direction="column" sx={{ p: 1 }}>
      {(Object.keys(resources) as Resource[]).map(
        (resource, index) => {
          const rpt = resourcesPerTurn[resource];
          let rptColour: string;
          if (rpt > 0) {
            rptColour = "success.main";
          } else {
            rptColour = "error.main";
          }

          return (
            <Grid
              key={resource}
              alignItems="center"
              container
              item
              justifyContent="space-between"
              sx={[
                index !== 0 && {
                  mt: 0.5,
                },
              ]}
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

              <Grid
                alignItems="center"
                container
                item
                justifyContent="flex-end"
                wrap="nowrap"
              >
                <Typography variant="body1">
                  {resources[resource]}
                </Typography>
                {rpt !== 0 && (
                  <Grid
                    alignItems="center"
                    container
                    item
                    justifyContent="flex-end"
                    sx={{ width: "auto" }}
                  >
                    {rpt > 0 && (
                      <ArrowUpward color="success" fontSize="small" />
                    )}
                    {rpt < 0 && (
                      <ArrowDownward color="error" fontSize="small" />
                    )}
                    <Typography
                      sx={{ color: rptColour }}
                      variant="body1"
                    >
                      {resourcesPerTurn[resource]}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>
          );
        },
      )}
    </StyledGrid>
  );
};
