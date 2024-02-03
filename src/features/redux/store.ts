// PUBLIC MODULES
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  // persistReducer,
  persistStore,
  type PersistorOptions,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";

// LOCAL FILES
// Redux
import { systemReducer } from "features/system/systemSlice";
import { townReducer } from "features/town/townSlice";

const rootReducer = combineReducers({
  system: systemReducer,
  town: townReducer,
});

// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
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
