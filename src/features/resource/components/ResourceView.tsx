// REACT
import type { FC } from "react";

// PUBLIC MODULES
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import {
  Grid,
  Link,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

// LOCAL FILES
// Components
import {
  BackButton,
  Image,
  StyledContainer,
  StyledGrid,
} from "features/common/components";
import { TownResources } from "features/resource/components";
import { AssignedVillagers } from "features/villager/components";
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
import {
  type Resource,
  RESOURCE_TO_IMAGE,
  RESOURCE_VIEW_ROW_HEIGHT,
} from "features/resource/constants";
// Hooks
import { useAppDispatch, useAppSelector } from "features/redux/hooks";
// Redux
import {
  selectBuildingIds,
  selectBuildingTier,
  selectVillagerIdsAssignedToBuilding,
} from "features/building/selectors";
import { selectBuildingResourcesPerTurn } from "features/resource/selectors";
import { assignVillager } from "features/villagerBuilding/villagerBuildingSlice";

interface ResourceViewRowProps {
  buildingId: number;
}

const ResourceViewRow: FC<ResourceViewRowProps> = ({
  buildingId,
}) => {
  // Hooks
  const dispatch = useAppDispatch();
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

  // Handlers
  const onAssign = (villagerId: number) => {
    dispatch(assignVillager({ villagerId, buildingId }));
  };

  return (
    <TableRow sx={{ height: RESOURCE_VIEW_ROW_HEIGHT }}>
      <TableCell>
        <Link href={`/building/${building.id}`} variant="body1">
          {building.name}
        </Link>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{tier || "-"}</Typography>
      </TableCell>
      <TableCell>
        <AssignedVillagers
          assignedVillagerIds={assignedVillagerIds}
          maxAssignedVillagers={tier}
          onVillagerAssign={onAssign}
          villagerAvatarSize={32}
        />
      </TableCell>
      <TableCell>
        <Grid alignItems="center" container wrap="nowrap">
          {(Object.keys(resourcesPerTurn) as Resource[]).map(
            (resource) => {
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
                  sx={[{ width: "auto" }]}
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
  const buildingIds = useAppSelector((state) =>
    selectBuildingIds(state),
  );

  return (
    <StyledContainer>
      <StyledGrid
        alignItems="start"
        container
        direction="column"
        sx={{ p: 1 }}
      >
        <BackButton />

        <TownResources direction="row" hideBorder />

        <TableContainer>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow sx={{ height: RESOURCE_VIEW_ROW_HEIGHT }}>
                <TableCell>
                  <Typography variant="body1">Building</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">Tier</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">
                    Villagers Assigned
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">
                    Resources Per Turn
                  </Typography>
                </TableCell>
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
