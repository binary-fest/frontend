/* eslint-disable @typescript-eslint/no-unused-vars */
import * as createPalette from '@material-ui/core/styles/createPalette';

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    gradient: PaletteColor;
  }
  interface PaletteOptions {
    gradient: PaletteOptions['primary'];
  }
}