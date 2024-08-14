import React from "react";

const Card = ({ data }) => {
  const { name, songname, added, image } = data;
  return (
    <div className="w-62 bg-white  p-6 rounded-md flex gap-3 relative">
      <div className="w-20 h-22 bg-pink-700 rounded-md">
        <img
          className="w-full h-full overflow-hidden rounded-md object-cover"
          src={image}
        />
      </div>
      <div className=" mt-4">
        <h2 className="font-semibold">Song Name :{songname}</h2>
        <h2>Artist :{name}</h2>
      </div>
      <button
        className={`absolute top-[144px] p-1 whitespace-nowrap ${
          added === false ? "bg-orange-500" : "bg-green-500"
        } text-white bg-orange-500 rounded-xl px-2 mx-12`}
      >
        {added === false ? "Add to favrourites" : " Added"}
      </button>
    </div>
  );
};

export default Card;
