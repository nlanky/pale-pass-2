// REACT
import type { FC } from "react";

// PUBLIC MODULES
import {
  Avatar,
  Button,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// LOCAL FILES
// Components
import {
  StyledContainer,
  StyledGrid,
} from "features/common/components";
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
// Hooks
import { useAppSelector } from "features/redux/hooks";
// Redux
import {
  selectTownBuildingIds,
  selectTownBuildingTier,
  selectVillagerIdsAssignedToBuilding,
} from "features/town/selectors";
import { VILLAGER_ID_TO_VILLAGER } from "features/villager/constants";

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
      <TableCell>-</TableCell>
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
      <StyledGrid direction="column" sx={{ p: 1 }}>
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
