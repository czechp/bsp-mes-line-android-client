import showToast from "./showToast";

const httpErrorHandler = (error) => {
  console.log(error);
  if (error.toString() === "Error: Network Error") {
    showToast("Brak połączenia z serwerem!");
    return;
  }
  switch (error.response.data.status) {
    case 401:
      showToast("Niepoprawne dane logowania!");
      break;
    default:
      showToast("Unindetified error!");
  }
};

export default httpErrorHandler;
