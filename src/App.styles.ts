import { createStyles, Theme } from "@material-ui/core/styles";

export default function styles({ palette: { colors } }: Theme) {
  return createStyles({
    "@global": {
      "*": {
        margin: 0,
        padding: 0,
        border: 0,
        fontWeight: 400
      },
      a: {
        display: "inline-flex",
        color: "inherit",
        outline: "none",
        textDecoration: "none",
        cursor: "pointer",

        "&:hover": {
          color: colors.red
        }
      }
    }
  });
}
