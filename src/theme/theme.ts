import { createMuiTheme } from "@material-ui/core/styles";

export const colors = {
  primary: "#212F44",
  secondary: "#373633",
  red: "#DA291C",
  warning: "#FFC107",
  white: "#EEEEEE",
  blue: "#00AAAA"
};

export default createMuiTheme({
  palette: {
    colors,
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    },
    error: {
      main: colors.warning
    }
  }
});
