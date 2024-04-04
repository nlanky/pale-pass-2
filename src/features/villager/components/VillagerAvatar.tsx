// REACT
import { type FC, useContext, useEffect } from "react";

// PUBLIC MODULES
import { Avatar } from "@mui/material";
import { useDrag } from "react-dnd";
import { useNavigate } from "react-router-dom";

// LOCAL FILES
// Constants
import { VILLAGER_ID_TO_VILLAGER } from "features/villager/constants";
// Context
import { DraggingVillagerContext } from "features/town/context";

interface VillagerAvatarProps {
  villagerId: number;
  size?: number;
  canDrag?: boolean;
  hasBorder?: boolean;
  borderColor?: string;
  canClick?: boolean;
}

export const VillagerAvatar: FC<VillagerAvatarProps> = ({
  villagerId,
  size = 40,
  canDrag = true,
  hasBorder = true,
  borderColor = "white",
  canClick = true,
}) => {
  // Hooks
  const navigate = useNavigate();
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

  // Effects
  useEffect(() => {
    setDragging(isDragging);
  }, [isDragging]);

  // Derived variables
  const villager = VILLAGER_ID_TO_VILLAGER[villagerId];

  // Handlers
  const onClick = () => {
    navigate(`/villager/${villagerId}`);
  };

  return (
    <Avatar
      onClick={canClick ? onClick : undefined}
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
  );
};
