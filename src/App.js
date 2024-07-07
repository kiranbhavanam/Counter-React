import React, { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Todo from "./Components/Todo.jsx";
import { ThemeProvider } from "./Components/Theme.jsx";

function App() {
  const [activeComponent, setActiveComponent] = useState({app:"",status:false});
  function counterHandler(){
   setActiveComponent({app:"Counter",status:true})
 }
 function todoHandler(){
  setActiveComponent({app:"Todo",status:true})
 }
function backHandler(){
  setActiveComponent({app:"",status:false})
}
  return (
    <div className="App relative">
      {/* <h1 className='font-bold text-3xl text-purple-800 '>Hey its tailwind baby </h1> */}
      <div className={!activeComponent.status&&"hidden"}>
      <i className={`${activeComponent.app==="Counter"?"text-white bg-purple-700":" text-white bg-blue-500 shadow-black"}   border px-4 py-2 rounded-md shadow fa-solid fa-arrow-left  absolute top-4 left-8 align-middle hover:cursor-pointer`} onClick={backHandler}><span className="font-serif font-extralight align-middle ml-2 text-center ">Go Back</span></i>
      </div>
    
      <div className={activeComponent.status?"hidden":"flex justify-center items-center h-[100vh]"}>
      <button
        className="border bg-[#4f4f4f] px-4 py-2 text-2xl text-white font-semibold rounded-md "
        onClick={counterHandler}
      >
        Counter
      </button>
      <button
        className="border bg-[#4f4f4f] px-4 py-2 text-2xl text-white font-semibold rounded-md"
        onClick={todoHandler}
      >
        ToDo
      </button>
      </div>
      <div className="component-container">
        {activeComponent.app === "Counter" && <Counter />}
        {activeComponent.app=== "Todo" &&<ThemeProvider><Todo /></ThemeProvider> }
      </div>

   
    </div>
  );
}

export default App;
