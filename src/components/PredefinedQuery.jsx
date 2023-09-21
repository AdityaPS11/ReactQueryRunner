/* eslint-disable react/prop-types */

function PredefinedQuery({ setDefaults, setValue }) {
  const qurtyValue = [
    {
      query: "select * from customers;",
      default: 1,
    },
    {
      query: "select * from products;",
      default: 2,
    },
    {
      query: "select * from suppliers;",
      default: 3,
    },
    {
      query:
        "select * from employees;",
      default: 5,
    },
    {
      query:
        "select * from regions;",
      default: 6,
    },
    {
      query:
        "select contact_name, address,city,postal_code, country from customers;",
      default: 4,
    },
    
  ];
  return (
    <div>
      <div className="mx-auto flex items-center font-bold justify-center mt-2 py-2 h-11 px-4 text-white bg-green-500 font-mono w-56 text-lg md:text-xl">
        QueryRunner
      </div>
      <div className=" p-4 text-green-500">
        <div className="flex justify-center items-center">
          <p className="font-bold text-lg">Choose one Query!</p>
        </div>

        <div className="h-52 lg:h-48 overflow-auto scrollbar-hide mb-6 lg:mb-0">
          {qurtyValue.map((item, index) => (
            <p
              key={index}
              className="cursor-pointer text-white bg-green-500 hover:bg-green-600 font-mono p-2 text-center text-sm my-4"
              onClick={() => {
                setDefaults(`${item.default}`);
                setValue(`${item.query}`);
              }}
            >
              {item.query}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PredefinedQuery;