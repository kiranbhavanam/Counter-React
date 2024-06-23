import React, { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Todo from "./Components/Todo";

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="App">
      {/* <h1 className='font-bold text-3xl text-purple-800 '>Hey its tailwind baby </h1> */}
      <button
        className="border bg-[#4f4f4f] px-4 py-2 text-2xl text-white font-semibold rounded-md "
        onClick={() => setActiveComponent("Counter")}
      >
        Counter
      </button>
      <button
        className="border bg-[#4f4f4f] px-4 py-2 text-2xl text-white font-semibold rounded-md"
        onClick={() => setActiveComponent("Todo")}
      >
        ToDo
      </button>

      <div className="component-container">
        {activeComponent === "Counter" && <Counter />}
        {activeComponent === "Todo" && <Todo />}
      </div>
    </div>
  );
}

export default App;
