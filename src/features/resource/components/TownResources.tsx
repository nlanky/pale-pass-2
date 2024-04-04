// REACT
import type { FC } from "react";

// PUBLIC MODULES
import { Grid, Typography } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

// LOCAL FILES
// Components
import { Image, StyledGrid } from "features/common/components";
// Constants
import {
  type Resource,
  RESOURCE_TO_IMAGE,
} from "features/resource/constants";
// Redux
import { useAppSelector } from "features/redux/hooks";
import {
  selectResourcesPerTurn,
  selectTotalResources,
} from "features/resource/selectors";

interface TownResourcesProps {
  direction: "column" | "row";
  hideBorder?: boolean;
}

export const TownResources: FC<TownResourcesProps> = ({
  direction,
  hideBorder = false,
}) => {
  const resources = useAppSelector((state) =>
    selectTotalResources(state),
  );
  const resourcesPerTurn = useAppSelector((state) =>
    selectResourcesPerTurn(state),
  );

  return (
    <StyledGrid
      container
      direction={direction}
      sx={[{ p: 1 }, hideBorder && { borderWidth: 0 }]}
      wrap="nowrap"
    >
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
                direction === "column" && index !== 0 && { mt: 1 },
                direction === "row" && index !== 0 && { ml: 1 },
              ]}
              wrap="nowrap"
              xs={2}
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
