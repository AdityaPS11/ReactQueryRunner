/* eslint-disable react/prop-types */

import TableUI from "./TableUI";

function Table({ query, headers, rows }) {
  return (
    <div>
      {query ? (
        <section className="text-gray-500 body-font pl-4">
          <div className="flex w-full justify-between mt-6 lg:mt-0">
            <div className="font-bold text-center py-4 w-40 bg-gray-400 text-black rounded-tl-md rounded-tr-lg">
              Output
            </div>
          </div>
          <TableUI headers={headers} rows={rows} />
        </section>
      ) : (
        <div className="w-full flex text-center h-80 justify-center items-center font-bold font-mono text-gray-400 text-2xl px-6">
          Please Run a Query!
        </div>
      )}
    </div>
  );
}

export default Table;