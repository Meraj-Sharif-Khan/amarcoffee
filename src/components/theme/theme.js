// styles/theme.js
import { light, dark } from "./colors";

export function applyTheme(mode = "light") {
  if (typeof window === "undefined") return;

  const root = document.documentElement;
  const theme = mode === "dark" ? dark : light;

  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}