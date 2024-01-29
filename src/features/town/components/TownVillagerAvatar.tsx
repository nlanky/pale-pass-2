// REACT
import type { FC } from "react";

// PUBLIC MODULES
import { Avatar } from "@mui/material";
import { useDrag } from "react-dnd";

// LOCAL FILES
// Interfaces & Types
import { VILLAGER_ID_TO_VILLAGER } from "features/villager/constants";

interface TownVillagerAvatarProps {
  villagerId: number;
}

export const TownVillagerAvatar: FC<TownVillagerAvatarProps> = ({
  villagerId,
}) => {
  // Hooks
  const [{ isDragging }, drag] = useDrag(
    () => ({
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
      item: { id: villagerId },
      type: "villager",
    }),
    [],
  );

  // Derived variables
  const villager = VILLAGER_ID_TO_VILLAGER[villagerId];

  return (
    <Avatar
      ref={drag}
      src={villager.image}
      sx={{ opacity: isDragging ? 0 : 1 }}
    />
  );
};
