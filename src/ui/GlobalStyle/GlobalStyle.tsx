import { normalize } from "polished";
import { useMemo } from "react";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
  ThemeProviderProps,
} from "styled-components";

const FONTS = {
  sans: [
    "futura-pt",
    "system-ui",
    "-apple-system",
    "'Segoe UI'",
    "Roboto",
    "Ubuntu",
    "Cantarell",
    "Noto Sans",
    "sans-serif",
    "BlinkMacSystemFont",
    "Helvetica",
    "Arial",
    "sans-serif",
    "'Apple Color Emoji'",
    "'Segoe UI Emoji'",
    "'Segoe UI Symbol'",
  ].join(", "),
  serif: [
    "freight-display-pro",
    "Cambria",
    "'Hoefler Text'",
    "Utopia",
    "'Liberation Serif'",
    "'Nimbus Roman No9 L Regular'",
    "Times",
    "'Times New Roman'",
    "serif",
  ].join(", "),
};
const THEME = {
  palette: {
    main: "var(--palette-main)",
    accent: "var(--palette-accent)",
    surface: "var(--palette-surface)",
    background: "var(--palette-background)",
    text: "var(--palette-text)",
    error: "var(--palette-error)",
    warning: "var(--palette-warning)",
    success: "var(--palette-success)",
  },
  action: {
    primary: "var(--base-alpha-primary)",
    secondary: "var(--base-alpha-secondary)",
    tertiary: "var(--base-alpha-tertiary)",
  },
  typography: {
    sans: "var(--base-font-sans)",
    serif: "var(--base-font-serif)",
    body2: "var(--typography-body2)",
    body1: "var(--typography-body1)",
    subtitle: "var(--typography-subtitle)",
    title: "var(--typography-title)",
    heading: "var(--typography-heading)",
  },
  media: {
    md: "@media screen and (min-width: 40rem)",
    lg: "@media screen and (min-width: 80rem)",
    dark: "@media (prefers-color-scheme: dark)",
    motion: "@media (prefers-reduced-motion: no-preference)",
  },
  spacing: {
    x3s: "var(--base-spacing-x3s)",
    x2s: "var(--base-spacing-x2s)",
    xs: "var(--base-spacing-xs)",
    sm: "var(--base-spacing-sm)",
    md: "var(--base-spacing-md)",
    lg: "var(--base-spacing-xl)",
    xl: "var(--base-spacing-x2l)",
    x2l: "var(--base-spacing-x5l)",
    x3l: "var(--base-spacing-x8l)",
  },
  grid: {
    padding: "var(--grid-padding)",
    margin: "var(--grid-margin)",
  },
} as const;
const GlobalStyleFactory = createGlobalStyle(({ theme }) => ({
  ...normalize()[0],
  ...normalize()[1],
  ":root": {
    "--base-spacing-auto": "auto",
    "--base-spacing-0": 0,
    "--base-spacing-1": 1,
    "--base-spacing-x3s": "0.125rem",
    "--base-spacing-x2s": "0.25rem",
    "--base-spacing-xs": "0.5rem",
    "--base-spacing-sm": "0.75rem",
    "--base-spacing-md": "1rem",
    "--base-spacing-lg": "1.25rem",
    "--base-spacing-xl": "1.5rem",
    "--base-spacing-x2l": "2rem",
    "--base-spacing-x3l": "2.5rem",
    "--base-spacing-x4l": "2.75rem",
    "--base-spacing-x5l": "3rem",
    "--base-spacing-x6l": "3.5rem",
    "--base-spacing-x7l": "4rem",
    "--base-spacing-x8l": "6rem",
    "--base-font-sans": FONTS.sans,
    "--base-font-serif": FONTS.serif,
    "--base-color-pink-200": "255 245 255",
    "--base-color-pink-300": "255 224 255",
    "--base-color-pink-400": "255 204 255",
    "--base-color-pink-500": "255 153 255",
    "--base-color-pink-600": "204 102 204",
    "--base-color-pink-700": "68 34 68",
    "--base-color-pink-800": "26 15 26",
    "--base-color-gray-100": "255 255 255",
    "--base-color-gray-900": "51 51 51",
    "--base-color-red-500": "255 51 51",
    "--base-color-red-600": "204 0 0",
    "--base-color-blue-500": "51 153 255",
    "--base-color-blue-600": "0 102 187",
    "--base-color-yellow-500": "255 238 170",
    "--base-color-yellow-600": "204 204 119",
    "--base-alpha-primary": 1,
    "--base-alpha-secondary": 0.6,
    "--base-alpha-tertiary": 0.4,
  },
  html: {
    "--palette-main": "var(--base-color-pink-500)",
    "--palette-accent": "var(--base-color-pink-400)",
    "--palette-surface": "var(--base-color-pink-300)",
    "--palette-background": "var(--base-color-pink-200)",
    "--palette-text": "var(--base-color-gray-100)",
    "--palette-error": "var(--base-color-red-600)",
    "--palette-warning": "var(--base-color-yellow-600)",
    "--palette-success": "var(--base-color-blue-600)",
    [theme.media.dark]: {
      "--palette-accent": "var(--base-color-pink-600)",
      "--palette-surface": "var(--base-color-pink-700)",
      "--palette-background": "var(--base-color-pink-800)",
      "--palette-text": "var(--base-color-gray-900)",
      "--palette-error": "var(--base-color-red-500)",
      "--palette-warning": "var(--base-color-yellow-500)",
      "--palette-success": "var(--base-color-blue-500)",
    },
    "--typography-body2": "var(--base-spacing-sm)",
    "--typography-body1": "var(--base-spacing-md)",
    "--typography-subtitle": "var(--base-spacing-lg)",
    "--typography-title": "var(--base-spacing-x3l)",
    "--typography-heading": "var(--base-spacing-x5l)",
    "--grid-padding": "--base-spacing-xs",
    "--grid-margin": "var(--base-spacing-md)",
    [theme.media.md]: {
      "--typography-title": "var(--base-spacing-x4l)",
      "--typography-heading": "var(--base-spacing-x6l)",
      "--grid-padding": "--base-spacing-sm",
      "--grid-margin": "var(--base-spacing-xl)",
    },
    [theme.media.lg]: {
      "--typography-title": "var(--base-spacing-x5l)",
      "--typography-heading": "var(--base-spacing-x7l)",
      "--grid-padding": "--base-spacing-md",
      "--grid-margin": "var(--base-spacing-x2l)",
    },
  },
  body: {
    margin: 0,
    textRendering: "optimizeLegibility",
    textSizeAdjust: "100%",
    lineHeight: "1.5em",
    fontSize: theme.typography.body1,
    fontFamily: theme.typography.sans,
    backgroundColor: theme.palette.background,
    color: theme.palette.text,
    "-webkit-font-smoothing": "auto",
    "-moz-osx-font-smoothing": "auto",
    [theme.media.dark]: {
      colorScheme: "dark",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },
  },
}));

function GlobalStyle({
  children,
}: Omit<ThemeProviderProps<DefaultTheme>, "theme">) {
  const theme = useMemo(() => THEME, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleFactory />
      {children}
    </ThemeProvider>
  );
}

export default Object.assign(GlobalStyle, { THEME });
