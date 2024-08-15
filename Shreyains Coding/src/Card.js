import React from "react";
function Card ({ data, handleClick, index }) {
  const { name, song, added, image } = data;
  return (
    <div className="w-60 bg-white  p-4 rounded-md flex gap-4  pb-8 relative mt-10">
      <div className="w-22 h-20 bg-pink-700 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt=""/>
        </div>
      <div className="">
        <h2 className="font-semibold leading-none">{song}</h2>
        <h6 className="text-sm">{name}</h6>
        </div>
<button onClick={()=> handleClick(index)} className={`absolute top-[110px] p-1 whitespace-nowrap 
${added === false ? "bg-orange-500" : "bg-green-400"} text-white rounded-xl px-2 mx-12`}
>
        {added === false ? "Add to favrourites" : " Added"}
      </button>
    </div>
  );
};

export default Card;
