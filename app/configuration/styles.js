import colors from "./colors";

export const fontStyles = {
  fontSize: 25,
  color: colors.primary,
};

export const fontLargerStyles = {
  fontSize: 30,
  fontWeight: "bold",
};

export const fontSmallerStyles = {
  fontSize: 20,
  fontWeight: "bold",
};

export const colorByLineState = (state) => {
  switch (state) {
    case "ACTIVE":
      return colors.success;
    case "DEACTIVATED":
      return colors.secondary;
    case "BREAKDOWN":
      return colors.danger;
    default:
      return colors.primary;
  }
};

export const colorBySystemStatus = (status) =>
  status ? colors.danger : colors.success;
