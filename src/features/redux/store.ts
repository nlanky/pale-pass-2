// PUBLIC MODULES
import {
  combineReducers,
  configureStore,
  ThunkAction,
  UnknownAction,
} from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  type PersistorOptions,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// LOCAL FILES
// Redux
import { buildingReducer } from "features/building/buildingSlice";
import { resourceReducer } from "features/resource/resourceSlice";
import { systemReducer } from "features/system/systemSlice";
import { villagerReducer } from "features/villager/villagerSlice";
import { villagerBuildingReducer } from "features/villagerBuilding/villagerBuildingSlice";

const rootReducer = combineReducers({
  building: buildingReducer,
  resource: resourceReducer,
  system: systemReducer,
  villager: villagerReducer,
  villagerBuilding: villagerBuildingReducer,
});

const persistConfig = {
  key: "palePass2",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          REHYDRATE,
        ],
      },
    }),
});
export const persistor = persistStore(store, {
  // Ensures saved game is not loaded without user action
  // manualPersist: true,
} as unknown as PersistorOptions);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;
