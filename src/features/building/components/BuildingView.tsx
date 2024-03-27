// PUBLIC MODULES
import { Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

// LOCAL FILES
// Components
import { Image, StyledGrid } from "features/common/components";
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
// Hooks
import { useAppDispatch, useAppSelector } from "features/redux/hooks";
// Redux
import {
  addBuilding,
  updateBuilding,
} from "features/building/buildingSlice";
import {
  selectBuildingDescription,
  selectBuildingImage,
  selectBuildingTier,
} from "features/building/selectors";

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
    selectBuildingTier(state, buildingId),
  );
  const image = useAppSelector((state) =>
    selectBuildingImage(state, buildingId),
  );
  const description = useAppSelector((state) =>
    selectBuildingDescription(state, buildingId),
  );

  // Handlers
  const onBackClick = () => {
    navigate("/town");
  };

  const onBuild = () => {
    dispatch(addBuilding({ id: buildingId, tier: 1 }));
  };

  const onUpgrade = () => {
    dispatch(
      updateBuilding({
        id: buildingId,
        changes: { tier: currentTier + 1 },
      }),
    );
  };

  // Derived variables
  const canBuild = currentTier === undefined;
  const canUpgrade = currentTier && currentTier < building.maxTier;

  return (
    <Container maxWidth="lg">
      <StyledGrid
        alignItems="start"
        container
        direction="column"
        sx={{ p: 1 }}
      >
        <Button onClick={onBackClick} sx={{ mb: 1 }}>
          Back to Town
        </Button>

        <Typography component="h1" sx={{ mb: 1 }} variant="h4">
          {building.name}
        </Typography>

        <Grid container>
          <Grid item xs={9}>
            <Typography variant="body1">
              {description?.text}
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Image src={image?.interior} />
          </Grid>
        </Grid>

        {canBuild && (
          <Button onClick={onBuild} sx={{ mt: 1 }}>
            Build
          </Button>
        )}

        {canUpgrade && (
          <Button onClick={onUpgrade} sx={{ mt: 1 }}>
            Upgrade
          </Button>
        )}
      </StyledGrid>
    </Container>
  );
};
