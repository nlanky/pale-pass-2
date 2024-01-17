// REACT
import type { FC } from "react";

// LOCAL FILES
// Components
import { TownView } from "features/town/components";
// Redux
import { useAppSelector } from "features/redux/hooks";
import { selectView } from "features/system/selectors";

export const Router: FC<{}> = () => {
  // Hooks
  const view = useAppSelector(selectView);

  return <>{view === "town" && <TownView />}</>;
};
