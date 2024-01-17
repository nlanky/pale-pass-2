// PUBLIC MODULES
import { createAction } from "@reduxjs/toolkit";

// LOCAL FILES
// Interfaces & Types
import type { View } from "features/system/types";

export const setTurn = createAction<number>("system/setTurn");
export const setView = createAction<View>("system/setView");
