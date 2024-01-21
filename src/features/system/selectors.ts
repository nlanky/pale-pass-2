// LOCAL FILES
// Interfaces & Types
import type { RootState } from "features/redux/store";

export const selectTurn = (state: RootState) => state.system.turn;
