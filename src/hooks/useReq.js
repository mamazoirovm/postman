import { useDispatch } from "react-redux";
import { changeRequest } from "../store/PostmanSlice";

const statusText = {
  404: "Not found",
  200: "OK",
};

export default () => {
  const dispatch = useDispatch()
  const sendRequest = async (url) => {
    try {
      const startTimes = new Date();
      const res = await fetch(url);
      const endTimes = new Date();

      const timeDiff = endTimes - startTimes;
      const status = `${res.status} ${statusText[res.status]}`;

      const data = await res.json();
      const DataString = JSON.stringify(data)
      const size = new TextEncoder().encode(DataString).length;
      console.log(res, data);

       dispatch(
        changeRequest({
          response: {
            data: DataString,
            size,
            timeDiff,
            status
          }
        })
       )
    } catch (error) {
      console.log(error);
    }
  };
  return {
    sendRequest,
  };
};
