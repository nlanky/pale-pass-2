// PUBLIC MODULES
import { createSlice } from "@reduxjs/toolkit";

// LOCAL FILES
// Interfaces & Types
import type { TownBuilding, TownVillager } from "features/town/types";
// Redux
import {
  assignVillager,
  buildBuilding,
  recruitVillager,
  unassignVillager,
} from "features/town/actions";

interface TownState {
  buildingIdToBuilding: Record<number, TownBuilding>;
  villagerIdToVillager: Record<number, TownVillager>;
}

const initialState: TownState = {
  buildingIdToBuilding: {},
  villagerIdToVillager: {},
};

export const townSlice = createSlice({
  name: "town",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(buildBuilding, (state, action) => {
        const { id } = action.payload;
        state.buildingIdToBuilding[id] = {
          id,
          tier: 1,
        };
      })
      .addCase(recruitVillager, (state, action) => {
        const { id } = action.payload;
        state.villagerIdToVillager[id] = {
          id,
          assignedBuildingId: null,
        };
      })
      .addCase(assignVillager, (state, action) => {
        const { villagerId, buildingId } = action.payload;
        state.villagerIdToVillager[villagerId] = {
          ...state.villagerIdToVillager[villagerId],
          assignedBuildingId: buildingId,
        };
      })
      .addCase(unassignVillager, (state, action) => {
        const villagerId = action.payload;
        state.villagerIdToVillager[villagerId] = {
          ...state.villagerIdToVillager[villagerId],
          assignedBuildingId: null,
        };
      });
  },
});

export const townReducer = townSlice.reducer;
