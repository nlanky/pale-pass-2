// PUBLIC MODULES
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

// LOCAL FILES
// Interfaces & Types
import type { TownBuilding } from "features/building/types";

export const buildingAdapter = createEntityAdapter<TownBuilding>();

export const buildingSlice = createSlice({
  name: "building",
  initialState: buildingAdapter.getInitialState(),
  reducers: {
    addBuilding: buildingAdapter.addOne,
  },
});

export const buildingReducer = buildingSlice.reducer;
export const { addBuilding } = buildingSlice.actions;
