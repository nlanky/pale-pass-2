// REACT
import { type FC, useContext, useEffect, useState } from "react";

// PUBLIC MODULES
import { Avatar } from "@mui/material";
import { useDrag } from "react-dnd";

// LOCAL FILES
// Context
import { DraggingVillagerContext } from "features/town/context";
// Interfaces & Types
import { VILLAGER_ID_TO_VILLAGER } from "features/villager/constants";
import { VillagerDialog } from "features/villager/components";

interface TownVillagerAvatarProps {
  villagerId: number;
  size?: number;
  borderColor?: string;
}

export const TownVillagerAvatar: FC<TownVillagerAvatarProps> = ({
  villagerId,
  size = 40,
  borderColor = "white",
}) => {
  // Hooks
  const [{ isDragging }, drag] = useDrag(
    () => ({
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
      item: { id: villagerId },
      options: {
        dropEffect: "move",
      },
      type: "villager",
    }),
    [],
  );

  // Context
  const { setDragging } = useContext(DraggingVillagerContext);

  // Local state
  const [dialogOpen, setDialogOpen] = useState(false);

  // Effects
  useEffect(() => {
    setDragging(isDragging);
  }, [isDragging]);

  // Derived variables
  const villager = VILLAGER_ID_TO_VILLAGER[villagerId];

  // Handlers
  const onDoubleClick = () => {
    setDialogOpen(true);
  };

  const onDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Avatar
        onDoubleClick={onDoubleClick}
        ref={drag}
        src={villager.image}
        sx={{
          width: size,
          height: size,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor,
          opacity: isDragging ? 0 : 1,
          cursor: "pointer",
        }}
      />
      <VillagerDialog
        villager={villager}
        open={dialogOpen}
        onClose={onDialogClose}
      />
    </>
  );
};
