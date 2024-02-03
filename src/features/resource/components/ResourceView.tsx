// REACT
import type { FC } from "react";

// PUBLIC MODULES
import {
  Avatar,
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
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
import { RESOURCE_TO_IMAGE } from "features/resource/constants";
import { VILLAGER_ID_TO_VILLAGER } from "features/villager/constants";
// Hooks
import { useAppSelector } from "features/redux/hooks";
// Interfaces & Types
import type { Resource } from "features/resource/types";
// Redux
import {
  selectTownBuildingIds,
  selectTownBuildingResourcesPerTurn,
  selectTownBuildingTier,
  selectVillagerIdsAssignedToBuilding,
} from "features/town/selectors";

interface ResourceViewRowProps {
  buildingId: number;
}

const ResourceViewRow: FC<ResourceViewRowProps> = ({
  buildingId,
}) => {
  // Hooks
  const tier = useAppSelector((state) =>
    selectTownBuildingTier(state, buildingId),
  );
  const assignedVillagerIds = useAppSelector((state) =>
    selectVillagerIdsAssignedToBuilding(state, buildingId),
  );
  const resourcesPerTurn = useAppSelector((state) =>
    selectTownBuildingResourcesPerTurn(state, buildingId),
  );

  // Derived variables
  const building = BUILDING_ID_TO_BUILDING[buildingId];

  return (
    <TableRow>
      <TableCell>{building.name}</TableCell>
      <TableCell>{tier || "-"}</TableCell>
      <TableCell>
        {assignedVillagerIds.length === 0 && "-"}
        {assignedVillagerIds.map((villagerId) => (
          <Avatar
            key={villagerId}
            src={VILLAGER_ID_TO_VILLAGER[villagerId].image}
          />
        ))}
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
  const townBuildingIds = useAppSelector((state) =>
    selectTownBuildingIds(state),
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
              {townBuildingIds.map((buildingId) => (
                <ResourceViewRow
                  key={buildingId}
                  buildingId={buildingId}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledGrid>
    </StyledContainer>
  );
};
