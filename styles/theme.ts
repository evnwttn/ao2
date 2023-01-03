import { createTheme } from "@mui/material";
import { palette } from "./styles";

const appTheme = createTheme({
  palette: {
    primary: {
      main: palette._black,
    },
    secondary: {
      main: palette._white,
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: "Noto Sans",
          fontSize: "0.75vw",
          letterSpacing: "0.125vw",
          textTransform: "uppercase",
          backgroundColor: palette._black,
          color: palette._white,
          border: `solid 1px ${palette._white}`,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: { padding: "0 0 0" },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          background: "none",
          color: "none",
          boxShadow: "none",
          minHeight: "none",
          minWidth: "none",
          maxheight: "none",
          maxWidth: "none",
          borderRadius: "none",
          pointerEvents: "none",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: palette._white,
          fontFamily: "Noto Sans",
          fontSize: "0.8vw",
          letterSpacing: "0.125vw",
          textTransform: "uppercase",
          fontWeight: "400",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { color: palette._darkgrey },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: palette._white,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          display: "inline-flex",
          color: palette._white,
          "&:hover": {
            background: "none",
            opacity: "0.7",
            cursor: "pointer",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          border: `1px solid ${palette._black}`,
          fontFamily: "Noto Sans",
          fontSize: "0.7vw",
          letterSpacing: "0.125vw",
          textTransform: "uppercase",
          fontWeight: "400",
          lineHeight: "1.66",
          color: palette._white,
          "&:hover": {
            opacity: "0.7",
          },
        },
        text: {
          color: palette._white,
          fontFamily: "Noto Sans",
          fontSize: "1.5vw",
          pointerEvents: "all",
          letterSpacing: "0.75vw",
          "&:hover": {
            background: "none",
            opacity: "0.7",
          },
        },
        textSecondary: {
          color: palette._red,
          fontSize: "0.9vw",
        },
        textInherit: {
          fontSize: "1vw",
          letterSpacing: "0.5vw",
        },
      },
    },
  },
});

export default appTheme;
