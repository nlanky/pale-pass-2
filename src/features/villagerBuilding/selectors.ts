// LOCAL FILES
// Interfaces & Types
import type { RootState } from "features/redux/store";
// Redux
import { villagerBuildingAdapter } from "features/villagerBuilding/villagerBuildingSlice";

export const {
  selectAll: selectVillagerAssignments,
  selectById: selectVillagerAssignmentById,
  selectEntities: selectVillagerIdToAssignment,
  selectIds: selectAssignedVillagerIds,
} = villagerBuildingAdapter.getSelectors<RootState>(
  (state) => state.villagerBuilding,
);
