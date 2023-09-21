/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import getTableInfo from "./GetTableInfo";

function Buttons({
  setQuery,
  setValue,
  setHeaders,
  setRows,
  setDefaults,
  defaults,
  value,
}) {
  const runQuery = () => {
    setQuery(value);
    const { tableHeaders, tableRows } = getTableInfo(defaults);
    setHeaders(tableHeaders);
    setRows(tableRows);
    const temp = [];
    if (tableHeaders.length > 0 && tableRows.length > 0) {
      temp.push(tableHeaders);
      tableRows.forEach((row) => {
        temp.push(row);
      });
      if (temp.length > 0) {
        toast.success("Query run");
      } else {
        toast.error("This didn't work.");
      }
    }
  };

  const reset = () => {
    // function to reset the editor
    setQuery("");
    setValue("select * from customers;");
    setDefaults(1);
    setHeaders([]);
    setRows([]);
  };
  return (
    <div className="flex">
      <div className="p-2">
        <button
          onClick={reset}
          className="flex mx-auto text-white bg-red-500 border-0 py-2 h-9 px-4 focus:outline-none hover:bg-red-600 rounded text-lg justify-center items-center"
        >
          <div className="font-bold font-mono">Clear</div>
        </button>
      </div>
      <div className="p-2">
  <div className="flex justify-center space-x-4">
    <button
      onClick={runQuery}
      className="text-white bg-green-500 border-0 py-2 h-9 px-4 focus:outline-none hover:bg-green-600 rounded text-lg flex items-center"
    >
      <div className="font-bold font-mono">Run Query</div>
    </button>
    <button
      className="text-white bg-blue-500 border-0 py-2 h-9 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg flex items-center"
    >
      <div className="font-bold font-mono">Export CSV</div>
    </button>
  </div>
</div>
    </div>
  );
}

export default Buttons;