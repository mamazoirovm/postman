import React from "react";
import JSONPretty from "react-json-pretty";
import { useSelector } from "react-redux";

const PostResponse = () => {
  const request = useSelector((state) =>
    state.requests.find((re) => re.id === state.currentRequest)
  );
  return (
    <div className="w-full p-4 border mt-10 h-72 border-slate-300 overflow-y-auto">
      <div className="bg-slate-400">
        <button className="p-5 bg-slate-400 text-white rounded-md  px-10 py-2 border-l border-r border-slate-200">Pretty</button> 
        <button className="p-5 bg-slate-400 text-white rounded-md  px-10 py-2 border-l border-r border-slate-200">Raw</button> 
        <button className="p-5 bg-slate-400 text-white rounded-md  px-10 py-2 border-l border-r border-slate-200">Preview</button> 
        <button className="p-5 bg-slate-400 text-white rounded-md  px-10 py-2 border-l border-r border-slate-200">Visualize</button> 
      </div>
      <JSONPretty
        mainStyle="background: #fff; color: #000"
        keyStyle="color: rgb(163, 21,21,)"
        valueStyle="color: rgb(9, 134, 75)"
        stringStyle="color: rgb(4,81,165)"
        booleanStyle="color: rgb(4,81,165); font-weight: 800"
        id="json-pretty"
        data={request?.response?.data}
      ></JSONPretty>
    </div>
  );
};

export default PostResponse;
