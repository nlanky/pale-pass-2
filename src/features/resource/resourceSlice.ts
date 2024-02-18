// PUBLIC MODULES
import { createSlice } from "@reduxjs/toolkit";

// LOCAL FILES
// Constants
import { NO_RESOURCES } from "features/resource/constants";
// Interfaces & Types
import { Resources } from "features/resource/types";

interface ResourceState {
  total: Resources;
}

const initialState: ResourceState = {
  total: NO_RESOURCES,
};

export const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {},
});

export const resourceReducer = resourceSlice.reducer;
