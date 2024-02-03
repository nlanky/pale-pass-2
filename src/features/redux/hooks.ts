// PUBLIC MODULES
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

// LOCAL FILES
// Interfaces & Types
import type { RootState, AppDispatch } from "features/redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
