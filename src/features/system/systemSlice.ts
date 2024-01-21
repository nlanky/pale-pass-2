// PUBLIC MODULES
import { createSlice } from "@reduxjs/toolkit";

// LOCAL FILES
// Redux
import { setTurn } from "features/system/actions";

interface SystemState {
  turn: number;
}

const initialState: SystemState = {
  turn: 1,
};

export const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setTurn, (state, action) => {
      state.turn = action.payload;
    });
  },
});

export const systemReducer = systemSlice.reducer;
