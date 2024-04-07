// REACT
import { forwardRef } from "react";

// PUBLIC MODULES
import {
  type LinkProps,
  type PaletteColor,
  type PaletteColorOptions,
  createTheme,
} from "@mui/material";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

declare module "@mui/material/styles" {
  interface ExtendedTheme {
    gap: (spacing: number) => number;
  }
  interface Theme extends ExtendedTheme {}
  interface ThemeOptions extends ExtendedTheme {}
}

const defaultTheme = createTheme();
const createColour = (mainColour: string) =>
  defaultTheme.palette.augmentColor({ color: { main: mainColour } });
const gap = (spacing: number) =>
  parseInt(defaultTheme.spacing(spacing), 10);

// Use MUI theming on React Router Link component
const LinkBehaviour = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.containerBackground.main,
          borderWidth: 5,
          borderStyle: "ridge",
          borderColor: theme.palette.containerBorder.main,
          color: theme.palette.text.primary,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "white",
          },
        }),
      },
    },
    MuiButtonBase: {
      defaultProps: { LinkComponent: LinkBehaviour },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiLink: {
      defaultProps: {
        color: "containerBorder.main",
        component: LinkBehaviour,
      } as LinkProps,
    },
    MuiTooltip: {
      defaultProps: {
        followCursor: true,
      },
    },
  },
  palette: {
    containerBackground: createColour("#e6e4d1"),
    containerBorder: createColour("#a14d2b"),
  },
  typography: {
    fontFamily: "Cormorant Garamond, Times New Roman, sans-serif",
    htmlFontSize: 10,
    body1: {
      fontSize: "1.6rem",
    },
    body2: {
      fontSize: "1.8rem",
    },
    button: {
      fontSize: "1.6rem",
    },
  },
  // Utility function for spacing maths
  gap,
});

declare module "@mui/material/styles" {
  interface Palette {
    containerBackground: PaletteColor;
    containerBorder: PaletteColor;
  }
  interface PaletteOptions {
    containerBackground: PaletteColorOptions;
    containerBorder: PaletteColorOptions;
  }
}

declare module "@mui/material/Slider" {
  interface SliderPropsColorOverrides {
    containerBorder: true;
  }
}
