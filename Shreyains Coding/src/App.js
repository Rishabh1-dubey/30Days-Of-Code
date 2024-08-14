import "./App.css";
import {  useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";


function App() {

const data =[{
  name:"Arijit Singh",songname:"Kalank", image:"https://m.media-amazon.com/images/M/MV5BYTg4NWEyMjMtNTM2MS00M2I4LWFjOTQtMDRjNjc0ODI3NmY4XkEyXkFqcGdeQXVyOTc1MDE5NzI@._V1_.jpg", added:false},
  {name:"Nayan",songname:"Tere Liye", image:"https://m.media-amazon.com/images/M/MV5BY2VlOTc4ZjctYjVlMS00NDYwLWEwZjctZmYzZmVkNGU5NjNjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg", added:false},
  {name:"Uday Narayn",songname:"Jab tak hai jaan", image:"https://play-lh.googleusercontent.com/PePLCRvcz7QuvkcFp38ZA-nY2p2LrnDKd_SFAliXUNacAhmHEQinoP2SUKpVQZP9rpuJ", added:false},
  {name:"Pawan Singh",songname:"kutti ayi nayi", image:"https://images.tv9hindi.com/wp-content/uploads/2024/04/pawan-singh-6.jpeg", added:false}
]

const [songData , setsongData] = useState(data)


  return (
    <>
      <div className="w-full h-screen bg-slate-400 f">
       <Navbar/>
       <div className=" flex felx-wrap px-4 gap-4 py-4">

       {songData.map((obj)=>(
         <Card  data={obj}  />
         
        ))}
        </div>
      </div>
    </>
  );
}

export default App;
