import "./App.css";
import { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

function App() {
  const data = [
    {
      name: "Arijit Singh",
      song: "Kalank",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTg4NWEyMjMtNTM2MS00M2I4LWFjOTQtMDRjNjc0ODI3NmY4XkEyXkFqcGdeQXVyOTc1MDE5NzI@._V1_.jpg",
      added: false,
    },
    {
      name: "Nayan",
      song: "Tere Liye",
      image:
        "https://m.media-amazon.com/images/M/MV5BY2VlOTc4ZjctYjVlMS00NDYwLWEwZjctZmYzZmVkNGU5NjNjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      added: false,
    },
    {
      name: "Uday Narayn",
      song: "Jab tak",
      image:
        "https://play-lh.googleusercontent.com/PePLCRvcz7QuvkcFp38ZA-nY2p2LrnDKd_SFAliXUNacAhmHEQinoP2SUKpVQZP9rpuJ",
      added: false,
    },
    {
      name: "Pawan Singh",
      song: "kutti ",
      image:
        "https://images.tv9hindi.com/wp-content/uploads/2024/04/pawan-singh-6.jpeg",
      added: false,
    },
  ];

  const [songData, setsongData] = useState(data);
  const handleClick = (index) =>{
    setsongData((prev) =>{
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) return {...index, added:!item.added };
        
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-slate-400 ">
        <Navbar data={songData} />
        <div className=" flex gap-4 felx-wrap mt-10  px-8">
          {songData.map((obj, index) =>(
            <Card data={obj} handleClick={handleClick} index={index} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
