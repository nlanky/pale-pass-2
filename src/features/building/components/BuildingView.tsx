// PUBLIC MODULES
import { Button, Container, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "features/redux/hooks";
import { selectTownBuilding } from "features/town/selectors";
import { useNavigate, useParams } from "react-router-dom";
import { BUILDING_ID_TO_BUILDING } from "../constants";
import { buildBuilding } from "features/town/actions";

export const BuildingView = () => {
  // Hooks
  const navigate = useNavigate();

  // Router
  const { id } = useParams();
  if (!id) {
    navigate("/town");
    return;
  }

  // Dervived variables
  const buildingId = Number(id);
  const building = BUILDING_ID_TO_BUILDING[buildingId];

  // Hooks
  const dispatch = useAppDispatch();
  const townBuilding = useAppSelector((state) =>
    selectTownBuilding(state, buildingId),
  );

  // Handlers
  const onBackClick = () => {
    navigate("/town");
  };

  const onBuild = () => {
    dispatch(buildBuilding(building));
  };

  // Derived variables
  const canBuild = townBuilding === undefined;
  const currentTier = townBuilding?.tier;
  const title = `${building.name}${
    currentTier ? ` - Tier ${currentTier}` : ""
  }`;

  return (
    <Container maxWidth="lg">
      <Button onClick={onBackClick}>Back to Town</Button>
      <Typography variant="body1">{title}</Typography>
      {canBuild && <Button onClick={onBuild}>Build</Button>}
    </Container>
  );
};
