// PUBLIC MODULES
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

// LOCAL FILES
// Constants
import { INITIAL_BUILDINGS } from "features/building/constants";
// Interfaces & Types
import type { TownBuilding } from "features/building/types";

export const buildingAdapter = createEntityAdapter<TownBuilding>();

export const buildingSlice = createSlice({
  name: "building",
  initialState: buildingAdapter.addMany(
    buildingAdapter.getInitialState(),
    INITIAL_BUILDINGS,
  ),
  reducers: {
    addBuilding: buildingAdapter.addOne,
    updateBuilding: buildingAdapter.updateOne,
  },
});

export const buildingReducer = buildingSlice.reducer;
export const { addBuilding, updateBuilding } = buildingSlice.actions;
