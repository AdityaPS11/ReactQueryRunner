
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Buttons from "./components/Buttons.jsx";
import PredefinedQuery from "./components/PredefinedQuery.jsx";
import SqlEditbox from "./components/SqlEditbox.jsx";
import Table from "./components/Table.jsx";
import SideNavbar from "./components/Sidebar.jsx";

function App() {
  const [value, setValue] = useState("select * from customers;");
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [query, setQuery] = useState("");
  const [defaults, setDefaults] = useState(1);

  if (value === "") {
    toast.error("Please remove the code and run the query");
    setValue(
      "-- Online QueryRunner to Run SQL Online. --"
    );
  }

  useEffect(() => {
    if (value.toLowerCase() === "select * from customers;") {
      setDefaults(1);
    } else if (value.toLowerCase() === "select * from suppliers;") {
      setDefaults(2);
    } else if (value.toLowerCase() === "select * from products;") {
      setDefaults(3);
    } else if (
      value.toLowerCase() ===
      "select contact_name, address,city,postal_code, country from customers;"
    ) {
      setDefaults(4);
    } else if(value.toLowerCase() === "select * from employees;"){
      setDefaults(5);
    } else if(value.toLowerCase() === "select * from regions;"){
      setDefaults(6);
    }
     else {
      setDefaults(0);
    }
  }, [value]);

  return (
    <div className="flex flex-wrap items-start w-full">
    <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12">
    <SideNavbar />
  </div>
  <div className="w-full lg:w-9/12 md:w-8/12 sm:w-6/12">
    <div className="flex flex-wrap justify-center items-start w-full">
      <div className="w-full lg:w-8/12 md:w-12">
        <div className="flex w-full justify-between">
          <div className="font-bold text-center py-4 w-28 bg-gray-200">
            Input
          </div>
        </div>
        <SqlEditbox value={value} setValue={setValue} />
        <Buttons
          setQuery={setQuery}
          setHeaders={setHeaders}
          setRows={setRows}
          value={value}
          setValue={setValue}
          setDefaults={setDefaults}
          defaults={defaults}
        />
      </div>
      <div className="w-full lg:w-4/12 md:w-12">
        <PredefinedQuery setValue={setValue} setDefaults={setDefaults} />
      </div>
    </div>
    <Table query={query} headers={headers} rows={rows} />
  </div>
      <Toaster
        position="bottom-left"
        gutter={8}
        toastOptions={{
          duration: 3000,
        }}
      />
    </div>
  );
}

export default App;
