import { createStyles, Theme } from "@material-ui/core";

export default function styles({ spacing, palette: { colors } }: Theme) {
  return createStyles({
    root: {
      backgroundColor: colors.primary,
      color: colors.white,
      padding: spacing(3)
    },
    spaces: {
      marginRight: spacing()
    },
    paper: {
      position: "absolute",
      right: 20,
      top: 50,
      width: 400,
      display: "flex",
      flexDirection: "column",
      backgroundColor: colors.white,
      padding: spacing(2, 4, 3)
    },
    submitBtn: {
      marginTop: spacing(2)
    },
    signInBtn: {
      color: colors.white
    }
  });
}
