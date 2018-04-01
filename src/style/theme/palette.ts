import Color from 'color';
import {
  black,
  blueGrey400,
  blueGrey700,
  blueGrey600,
  blueGrey900,
  cyan200,
  cyan400,
  cyan700,
  green400,
  grey200,
  grey300,
  orange400,
  red400,
  white,
} from './colors';

// Primary Colors
export const primaryColor1 = blueGrey700;
export const primaryColor2 = blueGrey400;
export const primaryColor3 = blueGrey900;

// Accent Colors
export const accentColor1 = cyan400;
export const accentColor2 = cyan200;
export const accentColor3 = cyan700;

// State Colors
export const successColor = green400;
export const warningColor = orange400;
export const dangerColor = red400;

// Light UI Accents
export const appBackgroundColor = white;
export const borderColor = grey300;
export const shadowColor = black;

// Neutral UI Accents
export const neutralAppBackgroundColor = grey200;
export const neutralBorderColor = grey300;
export const neautralShadowColor = black;

// Dark UI Accents
export const darkAppBackgroundColor = blueGrey900;
export const darkBorderColor = grey300;
export const darkShadowColor = black;

// Light UI Accents
export const dividerBlack = Color(black)
  .alpha(0.15)
  .rgbString();
export const dividerWhite = Color(white)
  .alpha(0.15)
  .rgbString();

// Dark UI Accents
export const darkDividerBlack = Color(black)
  .alpha(0.4)
  .rgbString();
export const darkDividerWhite = Color(white)
  .alpha(0.15)
  .rgbString();
