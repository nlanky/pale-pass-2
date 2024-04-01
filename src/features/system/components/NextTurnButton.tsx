// REACT
import type { FC } from "react";

// PUBLIC MODULES
import { Button } from "@mui/material";

// LOCAL FILES
// Hooks
import { useAppDispatch, useAppSelector } from "features/redux/hooks";
// Redux
import { selectTurn } from "features/system/selectors";
import { setTurnThunk } from "features/system/systemSlice";

export const NextTurnButton: FC<{}> = () => {
  // Hooks
  const dispatch = useAppDispatch();
  const turn = useAppSelector((state) => selectTurn(state));

  // Handlers
  const onNextTurn = () => {
    dispatch(setTurnThunk(turn + 1));
  };

  return (
    <Button onClick={onNextTurn} sx={{ width: "100%" }}>
      Next Turn
    </Button>
  );
};
