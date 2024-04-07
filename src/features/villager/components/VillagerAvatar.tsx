// REACT
import { type FC, useContext, useEffect } from "react";

// PUBLIC MODULES
import { Avatar, Tooltip, Typography } from "@mui/material";
import { useDrag } from "react-dnd";
import { useNavigate } from "react-router-dom";

// LOCAL FILES
// Constants
import {
  DEFAULT_VILLAGER_AVATAR_SIZE,
  VILLAGER_ID_TO_VILLAGER,
} from "features/villager/constants";
// Context
import { DraggingVillagerContext } from "features/town/context";

interface VillagerAvatarProps {
  villagerId: number;
  size?: number;
  canClick?: boolean;
  canDrag?: boolean;
  showBorder?: boolean;
  borderColor?: string;
  showTooltip?: boolean;
}

export const VillagerAvatar: FC<VillagerAvatarProps> = ({
  villagerId,
  size = DEFAULT_VILLAGER_AVATAR_SIZE,
  canClick = true,
  canDrag = true,
  showBorder = true,
  borderColor = "white",
  showTooltip = true,
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
    <Tooltip
      title={
        showTooltip ? (
          <Typography variant="body1">{villager.title}</Typography>
        ) : undefined
      }
    >
      <Avatar
        onClick={canClick ? onClick : undefined}
        ref={drag}
        src={villager.image}
        sx={{
          width: size,
          height: size,
          borderWidth: showBorder ? 2 : 0,
          borderStyle: "solid",
          borderColor,
          opacity: isDragging ? 0 : 1,
          cursor: canClick || canDrag ? "pointer" : "auto",
        }}
      />
    </Tooltip>
  );
};
