import React, { useState } from "react";

const List = (props) => {
  return (
    <tr className=" hover:bg-gray-200 shadow-white shadow-sm transition duration-300">
      <td className="py-2 px-4 text-blue-600 font-medium">{props.id}</td>
      <td className="py-2 px-4 text-gray-800">{props.desc}</td>
      <td className="py-2 px-4 text-gray-600">{props.time}</td>
    </tr>
  );
};
const Todo = () => {
  const [display, setDisplay] = useState(true);
  const [value,setValue]=useState("")
  const [todos, setTodos] = useState([
    { id: 1, time: "8:00",desc:"Play game" },
    { id: 2, time: "6:00",desc:"Do Gym" },
  ]);
  const reverse = () => {
    console.log("before reversing: ", todos);
    setTodos([...todos].reverse());

    console.log("after reversing: ", [...todos].reverse());
  };
  const addClickHandler = () => {
    setDisplay(!display);
    const newTask={
      id:todos.length+1,
      desc:value,
      time:new Date().toLocaleTimeString()}
      //make sure to sort the todo because if its in reversed then new task gets added to incorrect position.
    setTodos([...todos,newTask].sort((a,b)=>a.id-b.id))
    setValue("")

  };
  return (
    <div className="h-[100vh] flex justify-center items-center bg-[#2d2d2e]">

    <div className="w-3/5 mx-auto mt-10 p-4 bg-white shadow-sm shadow-white rounded-lg">
      {/* Enter the task */}
      <div
        className={
          display
            ? "flex justify-between items-center gap-3 bg-blue-50 p-4 rounded-md shadow-sm"
            : "hidden"
          }
          >
        <input
          type="text"
          value={value}
          className="border border-blue-300 bg-white text-black py-2 px-4 w-3/4 rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>{setValue(e.target.value)}}
          />
        <button
          className="border border-blue-500 text-blue-500 bg-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 hover:text-white transition duration-300"
          onClick={addClickHandler}
          >
          ADD TASK
        </button>
      </div>
      <table className={display ?"hidden":"w-full my-4"}>
        <thead>
          <tr className="">
            <td className="py-2 px-4 border-b-2 border-gray-300 bg-blue-100 text-center text-gray-700 uppercase font-semibold text-sm">
              Id
            </td>

            <td className="py-2 px-4 border-b-2 border-gray-300 bg-blue-100 text-center text-gray-600 uppercase font-semibold text-sm">
              Input
            </td>
            <td className="py-2 px-4 border-b-2 border-gray-300 bg-blue-100 text-center text-gray-600 uppercase font-semibold text-sm">
              Time
            </td>
          </tr>
        </thead>
        <tbody>
          {todos.map((task, index) => {
            console.log(
              `<List key=${index} id=${task.id} time=${task.time}></List>`
            );
            return <List key={index} id={task.id} desc={task.desc}  time={task.time}></List>;
          })}
        </tbody>
      </table>
      <button
        className={display?"hidden":"py-2 px-4 mr-4 border border-blue-500 bg-blue-500 text-left text-white uppercase font-semibold text-sm rounded-md transition-all shadow-sm hover:bg-blue-600 duration-300 "}
        onClick={()=>{setDisplay(!display)}}
        >
        New Task
      </button>
      <button
        className={display?"hidden":"py-2 px-4 border border-blue-300 bg-blue-500 text-left text-white uppercase font-semibold text-sm rounded-md shadow-sm transition duration-300 hover:bg-blue-600"}
        onClick={reverse}
      >
        reverse
      </button>
    </div>
        </div>
  );
};

export default Todo;
