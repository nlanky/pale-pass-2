// REACT
import type { FC } from "react";

// PUBLIC MODULES
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// LOCAL FILES
// Components
import {
  Image,
  StyledContainer,
  StyledGrid,
} from "features/common/components";
import { VillagerAvatar } from "features/villager/components";
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
import {
  type Resource,
  RESOURCE_TO_IMAGE,
} from "features/resource/constants";
// Hooks
import { useAppSelector } from "features/redux/hooks";
// Redux
import {
  selectBuildingIds,
  selectBuildingTier,
  selectVillagerIdsAssignedToBuilding,
} from "features/building/selectors";
import { selectBuildingResourcesPerTurn } from "features/resource/selectors";

interface ResourceViewRowProps {
  buildingId: number;
}

const ResourceViewRow: FC<ResourceViewRowProps> = ({
  buildingId,
}) => {
  // Hooks
  const tier = useAppSelector((state) =>
    selectBuildingTier(state, buildingId),
  );
  const assignedVillagerIds = useAppSelector((state) =>
    selectVillagerIdsAssignedToBuilding(state, buildingId),
  );
  const resourcesPerTurn = useAppSelector((state) =>
    selectBuildingResourcesPerTurn(state, buildingId),
  );

  // Derived variables
  const building = BUILDING_ID_TO_BUILDING[buildingId];

  return (
    <TableRow>
      <TableCell>{building.name}</TableCell>
      <TableCell>{tier || "-"}</TableCell>
      <TableCell>
        {assignedVillagerIds.length === 0 && "-"}
        {assignedVillagerIds.length !== 0 && (
          <Grid container spacing={1}>
            {assignedVillagerIds.map((villagerId) => (
              <Grid item key={villagerId}>
                <VillagerAvatar
                  villagerId={villagerId}
                  canDrag={false}
                  hasBorder={false}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </TableCell>
      <TableCell>
        <Grid alignItems="center" container wrap="nowrap">
          {(Object.keys(resourcesPerTurn) as Resource[]).map(
            (resource, index) => {
              const rpt = resourcesPerTurn[resource];
              if (rpt === 0) {
                return null;
              }

              let rptColour: string;
              if (rpt > 0) {
                rptColour = "success.main";
              } else {
                rptColour = "error.main";
              }
              return (
                <Grid
                  alignItems="center"
                  container
                  key={resource}
                  item
                  sx={[{ width: "auto" }, index !== 0 && { ml: 1 }]}
                >
                  <Image
                    src={RESOURCE_TO_IMAGE[resource]}
                    style={{ width: 32, height: 32 }}
                  />
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
              );
            },
          )}
        </Grid>
      </TableCell>
    </TableRow>
  );
};

export const ResourceView = () => {
  // Hooks
  const navigate = useNavigate();
  const buildingIds = useAppSelector((state) =>
    selectBuildingIds(state),
  );

  // Handlers
  const onBack = () => {
    navigate("/town");
  };

  return (
    <StyledContainer>
      <StyledGrid
        alignItems="start"
        container
        direction="column"
        sx={{ p: 1 }}
      >
        <Button onClick={onBack}>Back to Town</Button>
        <TableContainer sx={{ mt: 1 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Building</TableCell>
                <TableCell>Tier</TableCell>
                <TableCell>Villagers Assigned</TableCell>
                <TableCell>Resources Per Turn</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {buildingIds.map((buildingId) => (
                <ResourceViewRow
                  buildingId={buildingId}
                  key={buildingId}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledGrid>
    </StyledContainer>
  );
};
