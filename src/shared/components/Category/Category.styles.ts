import { createStyles, Theme } from "@material-ui/core";

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      width: 270,
      margin: spacing(2),
      "&:hover": {
        cursor: "pointer"
      }
    },
    media: {
      paddingTop: "99%"
    }
  });
}
