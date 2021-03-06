/*
 * Copyright 2020 Actyx AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { create } from 'jss';
import preset from 'jss-preset-default';

import '../assets/fonts/Titillium_Web/font.css';
import '../assets/fonts/MaterialIcons/material-icons.css';
import {
  common,
  lightBlue,
  blueGrey,
  grey,
  green,
  orange,
  lightGreen,
  red,
  yellow,
  brown,
  pink
} from '../colors';

// Inspired from:
// https://material-ui.com/customization/default-theme/
// https://material-ui.com/customization/color/#color-palette
const createTheme = () => {
  const base = {
    palette: {
      common,
      primary: {
        light: lightBlue[200],
        main: lightBlue[500],
        dark: blueGrey[900],
        contrastText: common.white
      },
      secondary: {
        light: pink.A200,
        main: pink.A400,
        dark: pink.A700,
        contrastText: common.white
      },
      grey,
      success: {
        light: lightGreen.A700,
        main: green[500],
        dark: green[800]
      },
      warning: {
        light: orange[300],
        main: orange[500],
        dark: orange[800]
      },
      acknowledge: {
        light: yellow[400],
        main: yellow[600],
        dark: yellow[800]
      },
      support: {
        light: brown[200],
        main: brown[400],
        dark: brown[900]
      },
      error: {
        light: red[300],
        main: red.A700,
        dark: red[900]
      }
    },
    typography: {
      fontFamily: '"Titillium Web", sans-serif',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700
    },
    zIndex: {
      dialog: 1110,
      fluid: 1100,
      modalDrawer: 1000
    },
    utils: {
      rgba: (c: string, opacity: number) => {
        if (c.length < 7 || c.length > 7) {
          throw new Error('Please use full color HEX!');
        }

        return `rgba(${parseInt(c[1] + c[2], 16)}, ${parseInt(c[3] + c[4], 16)}, ${parseInt(
          c[5] + c[6],
          16
        )}, ${opacity})`;
      }
    }
  };

  return {
    shadow: {
      xs: `${1}px ${1}px ${3}px ${base.utils.rgba(base.palette.common.black, 0.4)}`,
      sm: `${4}px ${4}px ${4}px ${base.utils.rgba(base.palette.common.black, 0.3)}`,
      md: `${10}px ${10}px ${24}px ${base.utils.rgba(base.palette.common.black, 0.5)}`
    },
    ...base
  };
};

export const theme = createTheme();

const jss = create({
  plugins: preset().plugins
});

jss
  .createStyleSheet(
    {
      '@global': {
        html: {
          boxSizing: 'border-box',
          backgroundColor: theme.palette.grey[200],
          height: '100%',
          width: '100%',
          padding: 0,
          margin: 0
        },
        '*, *:before, *:after': {
          boxSizing: 'inherit'
        },
        hr: {
          margin: 0
        },
        body: {
          fontFamily: theme.typography.fontFamily,
          height: '100%',
          width: '100%',
          padding: 0,
          margin: 0,
          '& > div#root': {
            height: '100%',
            width: '100%',
            padding: 0,
            margin: 0
          }
        }
      }
    },
    { meta: 'global-styles' }
  )
  .attach();
