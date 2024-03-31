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

interface VillagerAvatarProps {
  villagerId: number;
  size?: number;
  canDrag?: boolean;
  hasBorder?: boolean;
  borderColor?: string;
  hasDialog?: boolean;
}

export const VillagerAvatar: FC<VillagerAvatarProps> = ({
  villagerId,
  size = 40,
  canDrag = true,
  hasBorder = true,
  borderColor = "white",
  hasDialog = true,
}) => {
  // Hooks
  const [{ isDragging }, drag] = useDrag(
    () => ({
      canDrag,
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
        onDoubleClick={hasDialog ? onDoubleClick : undefined}
        ref={drag}
        src={villager.image}
        sx={{
          width: size,
          height: size,
          borderWidth: hasBorder ? 2 : 0,
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
