// REACT
import { forwardRef, type ImgHTMLAttributes } from "react";

export const Image = forwardRef<
  HTMLImageElement,
  ImgHTMLAttributes<HTMLImageElement>
>(({ style, ...rest }, ref) => {
  // Derived variables
  const combinedStyle = { display: "block", width: "100%", ...style };

  return (
    <img loading="lazy" ref={ref} style={combinedStyle} {...rest} />
  );
});
