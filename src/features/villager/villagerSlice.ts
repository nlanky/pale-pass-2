// PUBLIC MODULES
import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

// LOCAL FILES
// Interfaces & Types
import type { TownVillager } from "features/villager/types";

export const villagerAdapter = createEntityAdapter<TownVillager>();

export const villagerSlice = createSlice({
  name: "villager",
  initialState: villagerAdapter.getInitialState({
    lastAttractTurn: 1,
  }),
  reducers: {
    addVillager: villagerAdapter.addOne,
    updateLastAttractTurn: (state, action: PayloadAction<number>) => {
      state.lastAttractTurn = action.payload;
    },
    updateVillagers: villagerAdapter.updateMany,
  },
});

export const villagerReducer = villagerSlice.reducer;
export const { addVillager, updateLastAttractTurn, updateVillagers } =
  villagerSlice.actions;
