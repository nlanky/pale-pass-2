// PUBLIC MODULES
import {
  Button,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

// LOCAL FILES
// Components
import { StyledGrid } from "features/common/components";
import { VillagerAvatar } from "features/villager/components";
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";
import {
  VILLAGER_ID_TO_VILLAGER,
  VILLAGER_STAT_TO_SPECIALTY,
} from "features/villager/constants";
import { VILLAGER_STATS } from "features/villager/types";
// Hooks
import { useAppSelector } from "features/redux/hooks";
// Redux
import { selectVillagerById } from "features/villager/selectors";
import { selectVillagerAssignmentById } from "features/villagerBuilding/selectors";

export const VillagerView = () => {
  // Hooks
  const navigate = useNavigate();

  // Router
  const { id } = useParams();
  if (!id) {
    navigate("/town");
    return;
  }

  // Dervived variables
  const villagerId = Number(id);
  const { description, specialty, title, specialtyIcon } =
    VILLAGER_ID_TO_VILLAGER[villagerId];

  // Hooks
  const { stats } = useAppSelector((state) =>
    selectVillagerById(state, villagerId),
  );
  const assignment = useAppSelector((state) =>
    selectVillagerAssignmentById(state, villagerId),
  );

  // Handlers
  const onBackClick = () => {
    navigate("/town");
  };

  return (
    <Container maxWidth="lg">
      <StyledGrid
        alignItems="start"
        container
        direction="column"
        sx={{ p: 1 }}
      >
        <Button onClick={onBackClick}>Back to Town</Button>

        <Grid container flexWrap="nowrap" sx={{ mt: 2 }}>
          <Grid item>
            <VillagerAvatar
              villagerId={villagerId}
              size={200}
              canDrag={false}
              hasBorder={false}
            />
          </Grid>

          <Grid container direction="column" item sx={{ ml: 2 }}>
            <Grid container item>
              <Typography component="h1" sx={{ mr: 2 }} variant="h4">
                {title}
              </Typography>

              <Tooltip
                title={
                  <Typography variant="body1">{specialty}</Typography>
                }
              >
                {specialtyIcon}
              </Tooltip>
            </Grid>

            <Grid container flexWrap="nowrap" sx={{ mt: 1 }}>
              <Grid item xs={10}>
                <Typography variant="body1">{description}</Typography>

                <Typography
                  fontWeight="bold"
                  sx={{ mt: 2 }}
                  variant="body1"
                >
                  {!assignment && "Not assigned to a building"}
                  {assignment?.buildingId &&
                    `Assigned to ${
                      BUILDING_ID_TO_BUILDING[assignment.buildingId]
                        .name
                    }`}
                </Typography>
              </Grid>

              <Grid
                container
                direction="column"
                sx={{ ml: 2 }}
                xs={2}
              >
                {VILLAGER_STATS.map((stat) => (
                  <Grid
                    container
                    item
                    justifyContent="space-between"
                    key={stat}
                  >
                    <Typography
                      fontWeight="bold"
                      sx={[
                        VILLAGER_STAT_TO_SPECIALTY[stat] ===
                          specialty && {
                          color: "containerBorder.main",
                        },
                      ]}
                      variant="body1"
                    >
                      {stat}
                    </Typography>

                    <Typography sx={{ ml: 1 }} variant="body1">
                      {stats[stat]}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledGrid>
    </Container>
  );
};
