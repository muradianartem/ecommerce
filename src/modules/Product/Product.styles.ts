import { createStyles, Theme } from "@material-ui/core";

export default function styles({ spacing, palette: { colors } }: Theme) {
  return createStyles({
    root: {
      margin: spacing(3),
      lineHeight: 1.4,
      color: colors.secondary
    },
    description: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      padding: spacing(4)
    },
    content: {
      fontSize: 16,
      marginBottom: spacing(2)
    },
    characteresticList: {
      paddingLeft: spacing(2),
      marginBottom: spacing(1),
      backgroundColor: colors.blue
    },
    characterestic: {
      marginRight: spacing(),
      opacity: 0.8
    },
    characteresticValue: {},
    price: {
      fontSize: 20,
      marginBottom: spacing(2)
    }
  });
}
