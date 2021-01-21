import * as createPalette from '@material-ui/core/styles/createPalette';

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    gradient?: Palette['primary'];
  }
  interface PaletteOptions {
    gradient?: PaletteOptions['primary'];
  }
}