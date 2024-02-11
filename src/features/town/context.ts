// REACT
import { createContext } from "react";

export const DraggingVillagerContext = createContext({
  isDragging: false,
  // @ts-ignore
  setDragging: (dragging: boolean) => {},
});
