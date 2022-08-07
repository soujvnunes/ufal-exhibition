const theme = {
  main: {
    primary: "rgba(var(--color-main) / var(--action-primary))",
    secondary: "rgba(var(--color-main) / var(--action-secondary))",
    tertiary: "rgba(var(--color-main) / var(--action-tertiary))",
  },
  background: {
    primary: "rgba(var(--color-background) / var(--action-primary))",
    secondary: "rgba(var(--color-background) / var(--action-secondary))",
    tertiary: "rgba(var(--color-background) / var(--action-tertiary))",
  },
  text: {
    primary: "rgba(var(--color-text) / var(--action-primary))",
    secondary: "rgba(var(--color-text) / var(--action-secondary))",
    tertiary: "rgba(var(--color-text) / var(--action-tertiary))",
  },
  color: {
    accent: "rgba(var(--color-accent) / var(--action-primary))",
    error: "rgba(var(--color-error) / var(--action-primary))",
    warning: "rgba(var(--color-warning) / var(--action-primary))",
    info: "rgba(var(--color-info) / var(--action-primary))",
  },
  grid: {
    padding: "var(--grid-padding)",
    margin: "var(--grid-margin)",
  },
  media: {
    sm: "@media (min-width: 0rem) or (max-width: 40rem)",
    md: "@media (min-width: 40rem)",
    lg: "@media (min-width: 80rem)",
    light:
      "@media (prefers-color-scheme: no-preference) or (prefers-color-scheme: light)",
    dark: "@media (prefers-color-scheme: dark)",
    idle: "@media (prefers-reduced-motion: reduce)",
    motion: "@media (prefers-reduced-motion: no-preference)",
  },
  size: {
    2: "var(--size-02)",
    4: "var(--size-04)",
    8: "var(--size-08)",
    12: "var(--size-12)",
    16: "var(--size-16)",
    20: "var(--size-20)",
    24: "var(--size-24)",
    32: "var(--size-32)",
    40: "var(--size-40)",
    44: "var(--size-44)",
    48: "var(--size-48)",
    56: "var(--size-56)",
    64: "var(--size-64)",
    96: "var(--size-96)",
  },
  font: {
    overline: "var(--font-overline)",
    body: "var(--font-body)",
    subtitle: "var(--font-subtitle)",
    subhead: "var(--font-subhead)",
    headline: "var(--font-headline)",
  },
} as const;

export default theme;
