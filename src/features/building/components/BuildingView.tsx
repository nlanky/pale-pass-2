// PUBLIC MODULES
import { Button, Container, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

// LOCAL FILES
// Components
import { Image, StyledBox } from "features/common/components";
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
// Hooks
import { useAppDispatch, useAppSelector } from "features/redux/hooks";
// Redux
import { buildBuilding } from "features/town/actions";
import {
  selectTownBuildingImage,
  selectTownBuildingTier,
} from "features/town/selectors";

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
  const currentTier = useAppSelector((state) =>
    selectTownBuildingTier(state, buildingId),
  );
  const image = useAppSelector((state) =>
    selectTownBuildingImage(state, buildingId),
  );

  // Handlers
  const onBackClick = () => {
    navigate("/town");
  };

  const onBuild = () => {
    dispatch(buildBuilding(building));
  };

  // Derived variables
  const canBuild = currentTier === undefined;
  const title = `${building.name}${
    currentTier ? ` - Tier ${currentTier}` : ""
  }`;

  return (
    <Container maxWidth="lg">
      <Button onClick={onBackClick} sx={{ mb: 1 }}>
        Back to Town
      </Button>
      <StyledBox
        alignItems="flex-start"
        display="flex"
        flexDirection="column"
        sx={{ p: 1 }}
      >
        <Typography component="h1" sx={{ mb: 1 }} variant="h4">
          {title}
        </Typography>

        <Image src={image?.interior} />

        {canBuild && (
          <Button onClick={onBuild} sx={{ mt: 1 }}>
            Build
          </Button>
        )}
      </StyledBox>
    </Container>
  );
};
