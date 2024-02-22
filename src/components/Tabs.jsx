const Tabs = ({ title, id, active, onClick }) => {
  return (
    <li
      onClick={() => onClick(id)}
      className={`text-gray-300 pb-2 hover:text-black cursor-pointer   ${
        active ? "text-red-950 border-b border-red-700" : "border-transparent text-black"
      } transition-all`}
    >
      {title}
    </li>
  );
};

export default Tabs;
