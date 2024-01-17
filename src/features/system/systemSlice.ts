// PUBLIC MODULES
import { createSlice } from "@reduxjs/toolkit";

// LOCAL FILES
// Interfaces & Types
import type { View } from "features/system/types";
// Redux
import { setTurn, setView } from "features/system/actions";

interface SystemState {
  turn: number;
  view: View;
}

const initialState: SystemState = {
  turn: 1,
  view: "town",
};

export const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setTurn, (state, action) => {
        state.turn = action.payload;
      })
      .addCase(setView, (state, action) => {
        state.view = action.payload;
      });
  },
});

export const systemReducer = systemSlice.reducer;
