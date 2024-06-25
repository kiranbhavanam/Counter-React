import React, { useState } from "react";

const List = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>
        <input type="text" className="border" />
      </td>
      <td>{props.time}</td>
    </tr>
  );
};
const Todo = () => {
  const [display, setDisplay] = useState(true);
  const [todos, setTodos] = useState([
    { id: 1, time: "8:00" },
    { id: 2, time: "6:00" },
  ]);
  const reverse = () => {
    console.log("before reversing: ", todos);
    setTodos([...todos].reverse());
    console.log("after reversing: ", [...todos].reverse());
  };
  const addClickHandler=()=>{
    setDisplay(!display)
  }
  return (
    <div>
      {/* Enter the task */}
      <div className={display?"h-[100px] flex justify-evenly items-center gap-3 bg-[#6a6a6f] w-[500px] mx-auto my-4 rounded-sm shadow":"hidden"}>
    <input type="text" className="border bg-white text-black py-2 px-4 w-[350px] shadow-black shadow-sm rounded-sm" />
      <button className="border shadow-black bg-[#3d3d3d] text-white py-2 px-4 shadow-sm rounded-sm" onClick={addClickHandler}>ADD TASK</button>
      </div>
      <table className={display && "hidden"}>
        <thead>
          <tr>
            <td className="py-2 px-4 border-b-2 border-gray-300  bg-gray-100 text-left text-gray-600 uppercase font-semibold text-sm">
              Id
            </td>

            <td className="py-2 px-4 border-b-2 border-gray-300 bg-gray-100 text-left text-gray-600 uppercase font-semibold text-sm">
              Input
            </td>
            <td className="py-2 px-4 border-b-2 border-gray-300 bg-gray-100 text-left text-gray-600 uppercase font-semibold text-sm">
              Time
            </td>
          </tr>
        </thead>
        <tbody>
          {todos.map((task, index) => {
            console.log(
              `<List key=${index} id=${task.id} time=${task.time}></List>`
            );
            return <List key={index} id={task.id} time={task.time}></List>;
          })}
        </tbody>
      </table>
      <button
        className="py-2 px-4 border-b-2 border-gray-300 bg-gray-100 text-left text-gray-600 uppercase font-semibold text-sm"
        onClick={reverse}
      >
        reverse
      </button>
    </div>
  );
};

export default Todo;
