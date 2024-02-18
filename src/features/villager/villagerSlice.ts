// PUBLIC MODULES
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

// LOCAL FILES
// Interfaces & Types
import type { TownVillager } from "features/villager/types";

export const villagerAdapter = createEntityAdapter<TownVillager>();

export const villagerSlice = createSlice({
  name: "villager",
  initialState: villagerAdapter.getInitialState(),
  reducers: {
    addVillager: villagerAdapter.addOne,
  },
});

export const villagerReducer = villagerSlice.reducer;
export const { addVillager } = villagerSlice.actions;
