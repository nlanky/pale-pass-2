// PUBLIC MODULES
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// LOCAL FILES
// Constants
import {
  NO_RESOURCES,
  type Resource,
  RESOURCE_TO_TRADE_RATES,
} from "features/resource/constants";
// Utility functions
import {
  createFullResourcesObject,
  mergeResources,
} from "features/resource/utils";

interface ResourceState {
  total: Record<Resource, number>;
}

const initialState: ResourceState = {
  total: NO_RESOURCES,
};

export const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    tradeResources: (
      state,
      action: PayloadAction<{
        fromResource: Resource;
        toResource: Resource;
        quantity: number;
      }>,
    ) => {
      const { fromResource, toResource, quantity } = action.payload;
      const resourceChanges = createFullResourcesObject({
        [fromResource]: -quantity,
        [toResource]:
          quantity *
          RESOURCE_TO_TRADE_RATES[fromResource][toResource],
      });
      state.total = mergeResources(state.total, resourceChanges);
    },
  },
});

export const { tradeResources } = resourceSlice.actions;
export const resourceReducer = resourceSlice.reducer;
