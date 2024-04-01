// PUBLIC MODULES
import { createSlice, type Update } from "@reduxjs/toolkit";

// LOCAL FILES
// Constants
import { TURNS_PER_ATTRACT } from "features/system/constants";
// Interfaces & Types
import type { AppThunk } from "features/redux/store";
import type { TownVillager } from "features/villager/types";
// Redux
import {
  selectBuildingNames,
  selectBuildings,
} from "features/building/selectors";
import { updateResources } from "features/resource/resourceSlice";
import { setTurn } from "features/system/actions";
import { selectMaxPopulation } from "features/town/selectors";
import {
  selectCurrentPopulation,
  selectLastAttractTurn,
  selectVillagerById,
  selectVillagerIds,
  selectVillagerNames,
} from "features/villager/selectors";
import {
  addVillager,
  updateLastAttractTurn,
  updateVillagers,
} from "features/villager/villagerSlice";
import { selectVillagerAssignments } from "features/villagerBuilding/selectors";
// Utility functions
import { getNextTurnResources } from "features/resource/utils";
import {
  getVillagerToAttract,
  trainVillager,
} from "features/villager/utils";
import { selectTotalResources } from "features/resource/selectors";

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

// THUNKS
export const setTurnThunk =
  (turn: number): AppThunk =>
  (dispatch, getState) => {
    const state = getState();

    // Attract villager
    const currentPopulation = selectCurrentPopulation(state);
    const maxPopulation = selectMaxPopulation(state);
    const lastAttractTurn = selectLastAttractTurn(state);
    if (
      currentPopulation + 1 <= maxPopulation &&
      lastAttractTurn + TURNS_PER_ATTRACT <= turn
    ) {
      const villagerIds = selectVillagerIds(state);
      const buildingNames = selectBuildingNames(state);
      const villagerNames = selectVillagerNames(state);
      const villagerAttracted = getVillagerToAttract(
        villagerIds,
        buildingNames,
        villagerNames,
      );
      if (villagerAttracted) {
        dispatch(
          addVillager({
            id: villagerAttracted.id,
            stats: villagerAttracted.startingStats,
          }),
        );
        dispatch(updateLastAttractTurn(turn));
      }
    }

    // Train villagers
    const villagerUpdates: Update<TownVillager, number>[] = [];
    const villagerAssignments = selectVillagerAssignments(state);
    villagerAssignments.forEach((assignment) => {
      const { villagerId, buildingId } = assignment;
      const updatedVillager = trainVillager(
        selectVillagerById(state, villagerId),
        buildingId,
      );
      villagerUpdates.push({
        id: updatedVillager.id,
        changes: { stats: updatedVillager.stats },
      });
    });
    dispatch(updateVillagers(villagerUpdates));

    // Gather resources
    const buildings = selectBuildings(state);
    dispatch(
      updateResources(
        getNextTurnResources(
          selectTotalResources(state),
          buildings,
          villagerAssignments,
        ),
      ),
    );

    // Finally, update turn
    dispatch(setTurn(turn));
  };
