// REACT
import { type FC, useContext, useEffect } from "react";

// PUBLIC MODULES
import { Avatar } from "@mui/material";
import { useDrag } from "react-dnd";

// LOCAL FILES
// Context
import { DraggingVillagerContext } from "features/town/context";
// Interfaces & Types
import { VILLAGER_ID_TO_VILLAGER } from "features/villager/constants";

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

  // Effects
  useEffect(() => {
    setDragging(isDragging);
  }, [isDragging]);

  // Derived variables
  const villager = VILLAGER_ID_TO_VILLAGER[villagerId];

  return (
    <Avatar
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
  );
};
