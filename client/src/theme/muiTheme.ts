import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--valid-color)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--valid-color)",
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "var(--valid-color)",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          textAlign: "center",
        },
      },
    },
  },
});
