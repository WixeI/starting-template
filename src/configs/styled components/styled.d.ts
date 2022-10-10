/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { Theme } from '@mui/material/styles';
import { CustomTheme } from '../../styles/customTheme/types';

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

//Reference: https://medium.com/@abdurakhimov.sardor/how-to-use-and-customize-material-ui-version-5-with-styled-components-295e62562e61
