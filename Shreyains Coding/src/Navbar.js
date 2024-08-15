import React from "react";

const Navbar = ({data}) => {
  return (
    <div className=" w-full p-4 px-10 flex justify-between items-center">
      <h2>Organe</h2>
      <div className="flex p-2 bg-orange-200 gap-2 rounded-lg px-4 text-sm">
        <h2>Favourite</h2>
        <h2>{data.filter(item=>item.added).length}</h2>
      </div>
    </div>
  );
};

export default Navbar;
