import showToast from "./showToast";

const httpErrorHandler = (error) => {
  switch (error.response.data.status) {
    case 401:
        showToast("Niepoprawne dane logowania!")
      break;
    default:
      console.log("Unindetified error");
  }
};


export default httpErrorHandler;
