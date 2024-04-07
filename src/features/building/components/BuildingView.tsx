// PUBLIC MODULES
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

// LOCAL FILES
// Components
import {
  BackButton,
  Image,
  StyledGrid,
} from "features/common/components";
import { ResourceTrade } from "features/resource/components";
import { AssignedVillagers } from "features/villager/components";
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
  selectVillagerIdsAssignedToBuilding,
} from "features/building/selectors";
import { assignVillager } from "features/villagerBuilding/villagerBuildingSlice";

export const BuildingView = () => {
  // Hooks
  const dispatch = useAppDispatch();
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
  const currentTier = useAppSelector((state) =>
    selectBuildingTier(state, buildingId),
  );
  const image = useAppSelector((state) =>
    selectBuildingImage(state, buildingId),
  );
  const description = useAppSelector((state) =>
    selectBuildingDescription(state, buildingId),
  );
  const assignedVillagerIds = useAppSelector((state) =>
    selectVillagerIdsAssignedToBuilding(state, buildingId),
  );

  // Handlers
  const onAssign = (villagerId: number) => {
    dispatch(assignVillager({ villagerId, buildingId }));
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
  const isBuilt = currentTier !== undefined;
  const canUpgrade = currentTier && currentTier < building.maxTier;

  return (
    <Container maxWidth="lg">
      <StyledGrid
        alignItems="start"
        container
        direction="column"
        sx={{ p: 1 }}
      >
        <BackButton />

        <Grid container flexWrap="nowrap" sx={{ mt: 2 }}>
          <Grid item xs={9}>
            <Typography component="h1" variant="h4">
              {building.name}
            </Typography>

            <Typography sx={{ mt: 1 }} variant="body1">
              {description}
            </Typography>

            {building.canAssignVillagers && (
              <>
                <Typography
                  component="h2"
                  sx={{ mt: 1 }}
                  variant="h5"
                >
                  Villagers Assigned
                </Typography>

                <Box sx={{ mt: 1 }}>
                  <AssignedVillagers
                    assignedVillagerIds={assignedVillagerIds}
                    maxAssignedVillagers={currentTier}
                    onVillagerAssign={onAssign}
                  />
                </Box>
              </>
            )}
          </Grid>

          <Grid item xs={3}>
            <Image src={image?.interior} />
          </Grid>
        </Grid>

        {isBuilt && building.effects.includes("TRADE_RESOURCES") && (
          <ResourceTrade />
        )}

        {!isBuilt && (
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
