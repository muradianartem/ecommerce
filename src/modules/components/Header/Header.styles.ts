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
    }
  });
}
