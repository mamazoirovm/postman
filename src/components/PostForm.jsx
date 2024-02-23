import { useDispatch, useSelector } from "react-redux";
import { changeRequest } from "../store/PostmanSlice";
import useReq from "../hooks/useReq";

const PostForm = () => {

  const {sendRequest} = useReq()
  const dispatch = useDispatch();
  const handleSelected = (e) => {
    dispatch(
      changeRequest({
        method: e.target.value,
      })
    );
  };

  const request = useSelector((state) =>
    state.requests.find(re => re.id === state.currentRequest)
  );

  const handleSubmit = async e => {
    e.preventDefault();

    if (request.url) {
      sendRequest(request.url)
    }
  };
  return (
    <form className="mt-4 flex gap-3" onSubmit={handleSubmit}>
      <div className="border rounded-md overflow-hidden flex-1 gap-2">
        <select
          onChange={handleSelected}
          style={{ color: "#000" }}
          value={request?.method}
          className="p-1"
          name=""
          id=""
        >
          <option
            style={{ background: "#212121", color: "#6BDD9A" }}
            value="GET"
          >
            GET
          </option>
          <option
            style={{ background: "#212121", color: "#FFE47E", padding: 3 }}
            value="POST"
          >
            POST
          </option>
          <option
            style={{ background: "#212121", color: "#71A9EE" }}
            value="PUT"
          >
            PUT
          </option>
          <option
            style={{ background: "#212121", color: "#A18EBC" }}
            value="PATCH"
          >
            PATCH
          </option>
          <option
            style={{ background: "#212121", color: "#A96E66" }}
            value="DELETE"
          >
            DELETE
          </option>
        </select>
        <input
          onChange={e =>
            dispatch(
              changeRequest({
                url: e.target.value,
              })
            )
          }
          value={request?.url || ""}
          type="text"
          className="border-l w-[85%]  flex-1 p-2"
          placeholder="enter a url "
        />
      </div>
      <button className="px-6 grid place-items-center bg-blue-600 text-2xl text-white rounded-md">
        Save
      </button>
    </form>
  );
};

export default PostForm;
