// PUBLIC MODULES
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

// LOCAL FILES
// Interfaces & Types
import type { VillagerBuildingAssignment } from "features/villager/types";

export const villagerBuildingAdapter = createEntityAdapter<
  VillagerBuildingAssignment,
  number
>({
  selectId: (assignment) => assignment.villagerId,
});

export const villagerBuildingSlice = createSlice({
  name: "villagerBuilding",
  initialState: villagerBuildingAdapter.getInitialState(),
  reducers: {
    assignVillager: (
      state,
      action: PayloadAction<{
        villagerId: number;
        buildingId: number;
      }>,
    ) => {
      const { villagerId, buildingId } = action.payload;

      // Unassign (if necessary)
      villagerBuildingAdapter.removeOne(state, villagerId);

      // Assign to building
      villagerBuildingAdapter.addOne(state, {
        villagerId,
        buildingId,
      });
    },
    unassignVillager: villagerBuildingAdapter.removeOne,
  },
});

export const villagerBuildingReducer = villagerBuildingSlice.reducer;
export const { assignVillager, unassignVillager } =
  villagerBuildingSlice.actions;
