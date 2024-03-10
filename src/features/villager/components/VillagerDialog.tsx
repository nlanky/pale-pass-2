// REACT
import type { FC } from "react";

// PUBLIC MODULES
import { Close as CloseIcon } from "@mui/icons-material";
import {
  Avatar,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

// LOCAL FILES
// Interfaces & Types
import type { Villager } from "features/villager/classes";
// Redux
import { useAppSelector } from "features/redux/hooks";
import { selectVillagerById } from "features/villager/selectors";
import { VILLAGER_STATS } from "../types";

interface VillagerDialogProps {
  villager: Villager;
  open: boolean;
  onClose: () => void;
}

export const VillagerDialog: FC<VillagerDialogProps> = ({
  villager,
  open,
  onClose,
}) => {
  const { description, specialty, image, title, specialtyIcon } =
    villager;

  // Hooks
  const { stats } = useAppSelector((state) =>
    selectVillagerById(state, villager.id),
  );

  return (
    <Dialog onClose={onClose} open={open}>
      <Grid
        alignItems="center"
        container
        justifyContent="space-between"
        sx={{ px: 2, py: 1 }}
        wrap="nowrap"
      >
        <Grid alignItems="center" container item>
          <Tooltip
            title={
              <Typography variant="body1">{specialty}</Typography>
            }
          >
            {specialtyIcon}
          </Tooltip>
          <Typography component="h2" sx={{ ml: 2 }} variant="h6">
            {title}
          </Typography>
        </Grid>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ p: 0 }}
        >
          <CloseIcon />
        </IconButton>
      </Grid>
      <DialogContent dividers sx={{ p: 0 }}>
        <Grid container sx={{ px: 2, py: 1 }} wrap="nowrap">
          <Avatar src={image} sx={{ width: 100, height: 100 }} />
          <Typography sx={{ ml: 2 }} variant="body1">
            {description}
          </Typography>
        </Grid>

        <Divider />

        <Grid container sx={{ px: 2, py: 1 }}>
          {VILLAGER_STATS.map((stat) => (
            <Grid container item key={stat} xs={4}>
              <Typography fontWeight="bold" variant="body1">
                {stat}
              </Typography>
              <Typography sx={{ ml: 1 }} variant="body1">
                {stats[stat]}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
