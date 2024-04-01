// PUBLIC MODULES
import { createSlice } from "@reduxjs/toolkit";

// LOCAL FILES
// Constants
import { TURNS_PER_ATTRACT } from "features/system/constants";
import { VILLAGER_ID_TO_VILLAGER } from "features/villager/constants";
// Interfaces & Types
import type { AppThunk } from "features/redux/store";
// Redux
import { selectBuildingNames } from "features/building/selectors";
import { setTurn } from "features/system/actions";
import { selectMaxPopulation } from "features/town/selectors";
import {
  selectCurrentPopulation,
  selectLastAttractTurn,
  selectVillagerIds,
  selectVillagerNames,
} from "features/villager/selectors";
import {
  addVillager,
  updateLastAttractTurn,
} from "features/villager/villagerSlice";

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
  async (dispatch, getState) => {
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
      const villagerAttractPool = Object.values(
        VILLAGER_ID_TO_VILLAGER,
      ).filter((villager) => {
        // Villager in town
        if (villagerIds.includes(villager.id)) {
          return false;
        }

        // Villager requirements not met
        if (!villager.canAttract(buildingNames, villagerNames)) {
          return false;
        }

        return true;
      });
      if (villagerAttractPool.length !== 0) {
        const villagerAttracted =
          villagerAttractPool[
            Math.floor(Math.random() * villagerAttractPool.length)
          ];
        dispatch(
          addVillager({
            id: villagerAttracted.id,
            stats: villagerAttracted.startingStats,
          }),
        );
        dispatch(updateLastAttractTurn(turn));
      }
    }

    dispatch(setTurn(turn));
  };
