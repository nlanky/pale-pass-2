// REACT
import { type FC, useState } from "react";

// PUBLIC MODULES
import { Box, Grid, Tooltip, Typography } from "@mui/material";

// LOCAL FILES
// Components
import {
  AssignVillagerDialog,
  VillagerAvatar,
} from "features/villager/components";
// Constants
import { DEFAULT_VILLAGER_AVATAR_SIZE } from "features/villager/constants";
// Utility functions
import { createArrayOfLength } from "features/common/utils";

interface AssignedVillagersProps {
  assignedVillagerIds: number[];
  maxAssignedVillagers: number;
  onVillagerAssign: (villagerId: number) => void;
  villagerAvatarSize?: number;
}

export const AssignedVillagers: FC<AssignedVillagersProps> = ({
  assignedVillagerIds,
  maxAssignedVillagers,
  onVillagerAssign,
  villagerAvatarSize = DEFAULT_VILLAGER_AVATAR_SIZE,
}) => {
  // Local state
  const [dialogOpen, toggleDialog] = useState(false);

  // Handlers
  const openDialog = () => {
    toggleDialog(true);
  };

  const closeDialog = () => {
    toggleDialog(false);
  };

  const onAssign = (villagerId: number) => {
    onVillagerAssign(villagerId);
    toggleDialog(false);
  };

  return (
    <>
      <Grid columnSpacing={1} container>
        {createArrayOfLength(maxAssignedVillagers).map((index) => {
          const assignedVillagerId = assignedVillagerIds[index];
          return (
            <Grid item key={index}>
              {assignedVillagerId && (
                <VillagerAvatar
                  villagerId={assignedVillagerId}
                  size={villagerAvatarSize}
                  canDrag={false}
                  showBorder={false}
                />
              )}

              {!assignedVillagerId && (
                <Tooltip
                  title={
                    <Typography variant="body1">
                      Assign a villager
                    </Typography>
                  }
                >
                  <Box
                    onClick={openDialog}
                    sx={{
                      height: villagerAvatarSize,
                      width: villagerAvatarSize,
                      borderWidth: 1,
                      borderRadius: "50%",
                      borderStyle: "dashed",
                      borderColor: "containerBorder.main",
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
              )}
            </Grid>
          );
        })}
      </Grid>

      <AssignVillagerDialog
        onAssign={onAssign}
        onClose={closeDialog}
        open={dialogOpen}
      />
    </>
  );
};
