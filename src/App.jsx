import React, { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import moment from "moment";
import Typewriter from "typewriter-effect";
import { Icon } from '@iconify/react';
import { data } from "autoprefixer";
import axios from "axios";


function App() {
const [data, setData] = useState("")
const [word, setWord] = useState("https://api.api-ninjas.com/v1/randomword")

useEffect(() => {
  axios(word).then((e) => {
    setData(e.data);
  });
}, [word]);
  
  return (
    data &&
    <div className="items-center flex-col justify-center text-white flex h-screen w-full bg-black">
      <div className="text-3xl">HANGMAN</div>
      <div className="p-2">A little game to have fun with it</div>
      <div className="">{data.word}  
      </div>
      <button>
      <div className="justify-center items-center flex flex-rol justify-center flex gap-3 p-3">
        
      <div className="bg-black  text-white bold flex justify-center border w-12  h-12 text-2xl items-center flex ">A</div>
      <div className="bg-black  text-white bold border w-12  h-12 flex justify-center text-2xl items-center flex ">B</div>
      <div className="bg-black  text-white bold border w-12  h-12 text-2xl items-center flex justify-center flex ">C</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center  h-12 text-2xl items-center flex ">D</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">E</div>
      <div className="bg-black  text-white bold border w-12  h-12 text-2xl flex justify-center items-center flex">F</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">G</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">H</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">I</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">J</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">K</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">L</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">M</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">N</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">O</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">P</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">Q</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">R</div>
      </div>
      <div className="justify-center items-center flex flex-rol gap-3 p-3">
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">S</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">T</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">U</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">V</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">W</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">X</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">Y</div>
      <div className="bg-black  text-white bold border w-12 flex justify-center h-12 text-2xl items-center flex ">Z</div>

      </div>

      </button>
        
      
      
        

    </div>
  )
}

export default App