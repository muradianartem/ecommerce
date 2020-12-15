import { createStyles, Theme } from "@material-ui/core";

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      display: "grid",
      gridTemplateColumns: "100px 1fr",
      margin: spacing(0, 1)
    },
    attributeItem: {
      width: "100%"
    },
    attrTitle: {
      width: "100%",
      textAlign: "center",
      marginTop: spacing(3)
    }
  });
}
