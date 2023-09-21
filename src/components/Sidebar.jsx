
const links = [
  { label: "Welcome", value: "welcome!" },
  { label: "QueryTable", value: "querytable" },
];

const SideNavbar = () => {
  return (
    <div className="side-navbar w-18 max-w-500 text-center fixed left-0 top-0 h-full bg-white p-5">
      <div className="nav-links mt-5">
        <ul className="list-none p-0 mx-10">
          {links.map((link) => (
            <li
              key={link.value}
              className={`link-item ${
                "query-editor" === link.value ? "bg-blue-100 text-white font-bold" : "hover:bg-blue-100"
              } rounded-lg py-2 px-5 my-3 text-left cursor-pointer font-semibold text-gray-700 text-lg`}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-t border-gray-300 mt-5" />
      <button className="logout bg-gray-300 rounded-lg py-2 px-5 my-3 font-semibold w-full hover:bg-gray-400">
        Logout
      </button>
    </div>
  );
};

export default SideNavbar;


