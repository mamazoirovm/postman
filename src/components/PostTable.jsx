const PostTable = () => {
    return (
      <div className="mt-5">
        <h1 className="text-slate-400">Query Table params</h1>
        <table className="border border-slate-700 border-collapse w-full">
          <thead>
            <tr>
              <th className="border border-slate-400 p-1"></th>
              <th className="border border-slate-400">Key</th>
              <th className="border border-slate-400">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-400"></td>
              <td className="border border-slate-400 p-3">Title</td>
              <td className="border border-slate-400 p-3">Phone</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default PostTable;
  