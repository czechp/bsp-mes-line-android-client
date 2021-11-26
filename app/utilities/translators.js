const translator = {
  lineStatus: (status) => {
    switch (status) {
      case "ACTIVE":
        return "Włączona";
      case "DEACTIVATED":
        return "Wyłączona";
      case "BREAKDOWN":
        return "Awaria";

      default:
        return "Błąd nie rozpoznano";
    }
  },

  productionType: (type) => {
    switch (type) {
      case "PTS":
        return "PTS";
      case "CANDLE":
        return "Świeca";
      case "TEALIGHT":
        return "TeaLight";
      default:
        return "Błąd nie rozpoznano";
    }
  },
};

export default translator;
