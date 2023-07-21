export const enum THEME {
  DARK = "dark",
  LIGHT = "light",
}

export default () => {
  let theme = THEME.LIGHT;
  let hours = new Date().getHours();
  if ((hours >= 18 && hours <= 24) || (hours >= 0 && hours <= 8)) {
    theme = THEME.DARK;
  }
  return theme;
};
