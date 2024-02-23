import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeRequest } from "../store/PostmanSlice";

const PostmanReq = () => {
  const dispatch = useDispatch();
  const request = useSelector((state) =>
    state.requests.find((re) => re.id === state.currentRequest)
  );
  return (
    <div>
      <input
      onChange={(e)=> dispatch(
        changeRequest({
          name: e.target.value,
        })
      )}
        id={"postman-request"}
        className="font-medium p-2"
        value={request?.name || ""}
        type="text"
      />
    </div>
  );
};

export default PostmanReq;
