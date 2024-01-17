// LOCAL FILES
// Interfaces & Types
import type { RootState } from "features/redux/store";

export const selectTurn = (state: RootState) => state.system.turn;
export const selectView = (state: RootState) => state.system.view;
