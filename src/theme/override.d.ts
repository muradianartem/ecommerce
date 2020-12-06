import "@material-ui/core/styles/overrides";

import { colors } from "./theme";

type Colors = typeof colors;

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    colors: Colors;
  }

  interface PaletteOptions {
    colors: Colors;
  }
}
