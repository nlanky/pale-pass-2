// REACT
import { type FC, useState } from "react";

// PUBLIC MODULES
import {
  Button,
  Grid,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  ArrowRightAlt as ArrowRightAltIcon,
  Handshake as HandshakeIcon,
} from "@mui/icons-material";

// LOCAL FILES
// Components
import { Image } from "features/common/components";
// Constants
import {
  type Resource,
  RESOURCE_TO_IMAGE,
  RESOURCE_TO_TRADE_RATES,
  RESOURCES,
} from "features/resource/constants";
// Hooks
import { useAppDispatch, useAppSelector } from "features/redux/hooks";
// Redux
import { tradeResources } from "features/resource/resourceSlice";
import { selectTotalResources } from "features/resource/selectors";
// Utility functions
import {
  getMaxTradeQuantity,
  getMinTradeQuantity,
} from "features/resource/utils";

export const ResourceTrade: FC<{}> = () => {
  // Hooks
  const dispatch = useAppDispatch();
  const totalResources = useAppSelector(selectTotalResources);

  // Local state
  const [fromResource, setFromResource] = useState<Resource | null>(
    null,
  );
  const [toResource, setToResource] = useState<Resource | null>(null);
  const [quantity, setQuantity] = useState(0);

  // Handlers
  const onSelectFromResource = (resource: Resource) => {
    setQuantity(0);

    // Deselect if clicked again
    setFromResource(resource === fromResource ? null : resource);
  };

  const onSelectToResource = (resource: Resource) => {
    setQuantity(0);

    // Deselect if clicked again
    setToResource(resource === toResource ? null : resource);
  };

  const onQuantityChange = (value: number) => {
    setQuantity(value);
  };

  const onConfirmTrade = () => {
    if (fromResource && toResource) {
      dispatch(
        tradeResources({ fromResource, toResource, quantity }),
      );
      setQuantity(0);
    }
  };

  // Derived variables
  let tradeText = "";
  if (fromResource && toResource && fromResource !== toResource) {
    const tradeRate =
      RESOURCE_TO_TRADE_RATES[fromResource][toResource];
    const quantity = getMinTradeQuantity(fromResource, toResource);
    tradeText = `I can offer you ${
      tradeRate * quantity
    } ${toResource} for ${quantity} ${fromResource}`;
  } else {
    tradeText =
      "We kindly ask you to treat our valuable goods with care. If you are interested in making a trade, simply select the items you would like to exchange and those you wish to receive by clicking on them.";
  }

  const tableResources: Resource[][] = [];
  let tableRowIndex = 0;
  RESOURCES.forEach((resource) => {
    if (tableResources[tableRowIndex]?.length === 2) {
      tableRowIndex += 1;
    }

    if (!tableResources[tableRowIndex]) {
      tableResources[tableRowIndex] = [];
    }

    tableResources[tableRowIndex].push(resource);
  });

  return (
    <Grid container direction="column" sx={{ mt: 1 }}>
      <Typography variant="body1">{tradeText}</Typography>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              colSpan={2}
              sx={{ borderColor: "divider" }}
            >
              <Typography variant="body1">
                Player Resources
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              colSpan={2}
              sx={{ borderColor: "divider" }}
            >
              <Typography variant="body1">
                Resources to Trade
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableResources.map((rowResources, index) => (
            <TableRow key={`row_${index}`}>
              {/* PLAYER RESOURCES */}
              {rowResources.map((resource) => {
                const isSelected = fromResource === resource;
                return (
                  <TableCell
                    align="center"
                    key={`player_resource_cell_${resource}`}
                    onClick={() => {
                      onSelectFromResource(resource);
                    }}
                    sx={{
                      bgcolor: isSelected
                        ? "containerBackground.light"
                        : "transparent",
                      borderColor: "divider",
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: "containerBackground.light",
                      },
                    }}
                  >
                    <Image
                      src={RESOURCE_TO_IMAGE[resource]}
                      style={{ width: 64 }}
                    />
                    <Typography variant="body1">
                      {totalResources[resource]}
                    </Typography>
                  </TableCell>
                );
              })}

              {/* TRADE RATE */}
              {rowResources.map((resource) => {
                const isSelected = toResource === resource;
                let tradeRate = NaN;
                let tradeRateText = "";
                if (fromResource) {
                  tradeRate =
                    RESOURCE_TO_TRADE_RATES[fromResource][resource];
                  if (fromResource === resource) {
                    tradeRateText = "N/A";
                  } else if (Math.round(tradeRate) === tradeRate) {
                    tradeRateText = `1 / ${tradeRate}`;
                  } else {
                    tradeRateText = `1 / ${tradeRate.toFixed(2)}`;
                  }
                }

                return (
                  <TableCell
                    align="center"
                    key={`trade_rate_cell_${resource}`}
                    onClick={() => {
                      onSelectToResource(resource);
                    }}
                    sx={{
                      bgcolor: isSelected
                        ? "containerBackground.light"
                        : "transparent",
                      borderColor: "divider",
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: "containerBackground.light",
                      },
                    }}
                  >
                    <Image
                      src={RESOURCE_TO_IMAGE[resource]}
                      style={{ width: 64 }}
                    />
                    <Typography variant="body1">
                      {tradeRateText}
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {fromResource && toResource && (
        <>
          <Grid
            alignItems="center"
            container
            sx={{ mt: 2 }}
            wrap="nowrap"
          >
            <Grid
              alignItems="center"
              container
              direction="column"
              item
            >
              <Image
                src={RESOURCE_TO_IMAGE[fromResource]}
                style={{ width: 64 }}
              />
              <Typography variant="body1">{quantity}</Typography>
            </Grid>

            <Grid alignItems="center" container direction="column">
              <ArrowRightAltIcon fontSize="large" />
              <Slider
                color="containerBorder"
                disabled={fromResource === toResource}
                min={0}
                max={getMaxTradeQuantity(
                  totalResources,
                  fromResource,
                  toResource,
                )}
                onChange={(_, value) => {
                  onQuantityChange(value as number);
                }}
                step={getMinTradeQuantity(fromResource, toResource)}
                value={quantity}
              />
            </Grid>

            <Grid
              alignItems="center"
              container
              direction="column"
              item
            >
              <Image
                src={RESOURCE_TO_IMAGE[toResource]}
                style={{ width: 64 }}
              />

              <Typography variant="body1">
                {RESOURCE_TO_TRADE_RATES[fromResource][toResource] *
                  quantity}
              </Typography>
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Button
              disabled={quantity === 0 || fromResource === toResource}
              onClick={onConfirmTrade}
              startIcon={<HandshakeIcon />}
              sx={{ width: 100 }}
            >
              Trade
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};
