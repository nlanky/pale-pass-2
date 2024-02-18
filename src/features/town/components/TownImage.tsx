// REACT
import { type FC, useState, SyntheticEvent } from "react";

// PUBLIC MODULES
import { Box } from "@mui/material";

// LOCAL FILES
// Assets
import { townTier1Image } from "assets/town";
// Components
import { BuildingOverlay } from "features/building/components";
import { Image } from "features/common/components";
// Constants
import { BUILDING_ID_TO_BUILDING } from "features/building/constants";

export const TownImage: FC<{}> = () => {
  // Local state
  const [imageSize, setImageSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  // Handlers
  const onImageLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const element = event.target as Element;
    setImageSize({
      width: element.clientWidth,
      height: element.clientHeight,
    });
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Image onLoad={onImageLoad} src={townTier1Image} />

      {/* BUILDINGS */}
      {Object.keys(BUILDING_ID_TO_BUILDING).map((buildingId) => (
        <BuildingOverlay
          key={buildingId}
          buildingId={Number(buildingId)}
          townImageSize={imageSize}
        />
      ))}
    </Box>
  );
};
