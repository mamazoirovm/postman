import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { addRequest, setCurrentRequest } from "../store/PostmanSlice";
const Request = () => {

  const requests = useSelector(state => state.requests)
  const currentRequest = useSelector(state=> state.currentRequest)

  const dispatch = useDispatch()
  const addNewRequest = () => {
    const newRequest = {
      id: uuid(),
      name: "New request",
      method: "GET",
      params: {},
      headers: {},
      body: {},
      response: {},
    };
       dispatch(addRequest(newRequest))
       const inEle = document.getElementById('postman-request')
       inEle.focus()
       setTimeout(function () {
        inEle.select();
       }, 0)
  };
const handleRequse = id => {
dispatch(setCurrentRequest(id))
}
 
  return (
    <div className="bg-slate-200 border-r p-4 ">
      <button onClick={addNewRequest} className="text-3xl">
        +
      </button>
      <ul>
        {requests.map((request, index) =>(
          <li onClick={()=> handleRequse(request.id)} className={`border mt-1 mb-2 bg-slate-200 rounded-md p-2 border-black cursor-pointer ${currentRequest === request.id ? 'bg-slate-300' : "bg-slate-200"}`} key={request.id}>
            {index + 1 }. {"  "}
             { request.method} {""}
            {request.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Request;
