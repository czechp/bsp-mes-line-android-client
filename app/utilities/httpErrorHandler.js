import showToast from "./showToast";

const httpErrorHandler = (error) => {
  if (error.toString() === "Error: Network Error") {
    showToast("Brak połączenia z serwerem!");
    return;
  }
  switch (error.response.status) {
    case 401:
      showToast("Niepoprawne dane logowania!");
      break;
    case 400:
      showToast(error.response.data.message);
      break;
    default:
      showToast("Unindetified error!");
  }
};

export default httpErrorHandler;
