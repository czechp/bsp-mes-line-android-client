import dayjs from "dayjs";

const dateFormatter = (date) => {
  return dayjs(date).format('H:m:s \n D.M.YYYY r.');
};

export default dateFormatter;
