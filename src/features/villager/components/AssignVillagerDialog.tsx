// REACT
import type { FC } from "react";

// PUBLIC MODULES
import {
  Dialog,
  type DialogProps,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

// LOCAL FILES
// Components
import { VillagerAvatar } from "features/villager/components";
// Constants
import { VILLAGER_ID_TO_VILLAGER } from "features/villager/constants";
// Redux
import { useAppSelector } from "features/redux/hooks";
import { selectVillagerIds } from "features/villager/selectors";
import { selectVillagerIdToAssignment } from "features/villagerBuilding/selectors";
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";

interface AssignVillagerDialogProps extends DialogProps {
  onAssign: (villagerId: number) => void;
  onClose: () => void;
  open: boolean;
}

export const AssignVillagerDialog: FC<AssignVillagerDialogProps> = ({
  onAssign,
  onClose,
  open,
}) => {
  // Hooks
  const villagerIds = useAppSelector(selectVillagerIds);
  const villagerIdToAssignment = useAppSelector(
    selectVillagerIdToAssignment,
  );

  return (
    <Dialog onClose={onClose} open={open}>
      <List disablePadding>
        {villagerIds.map((villagerId) => {
          const villager = VILLAGER_ID_TO_VILLAGER[villagerId];
          const assignment = villagerIdToAssignment[villagerId];
          const assignmentText = assignment
            ? `Assigned to ${
                BUILDING_ID_TO_BUILDING[assignment.buildingId].name
              }`
            : `Unassigned`;

          return (
            <ListItemButton
              dense
              key={villagerId}
              onClick={() => {
                onAssign(villagerId);
              }}
            >
              <ListItemAvatar>
                <VillagerAvatar
                  villagerId={villagerId}
                  canDrag={false}
                  showBorder={false}
                  canClick={false}
                  showTooltip={false}
                />
              </ListItemAvatar>

              <ListItemText
                primaryTypographyProps={{
                  variant: "body1",
                }}
              >
                {villager.title} ({assignmentText})
              </ListItemText>
            </ListItemButton>
          );
        })}
      </List>
    </Dialog>
  );
};
