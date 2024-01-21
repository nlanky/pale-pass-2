import { useEffect, useState } from "react";

export const useImageDimensions = (path: string) => {
  // Local state
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Effects
  useEffect(() => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      setDimensions({
        height: img.height,
        width: img.width,
      });
    };
  }, [path]);

  return dimensions;
};
