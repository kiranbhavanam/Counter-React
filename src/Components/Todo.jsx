import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "./Theme";
import "react-toastify/ReactToastify.css";
const List = (props) => {
  const deleteNotify = () => {
    toast("Task has been deleted.");
  };
  const completedNotify = () => {
    toast("Hurray!! task completed.");
  };
  const completedHandler = (id) => {
    props.setTodos(
      props.todos.map((task) =>
        task.id === id ? { ...task, status: "completed" } : task
      )
    );
    completedNotify();
  };
  const deleteHandler = (id) => {
    const newTodos = props.todos.filter((task) => task.id !== id);
    props.setTodos(newTodos);
    deleteNotify();
  };
  return (
    <tr className=" hover:bg-gray-200 shadow-white shadow-sm transition duration-300">
      <td className="py-2 px-4 text-blue-600 font-medium">{props.id}</td>
      <td className="py-2 px-4 text-gray-800">{props.desc}</td>
      <td className="py-2 pl-4 text-gray-600">{props.time}</td>
      <td className="py-2 pr-4 text-gray-600">
        <button
          className={`border font-extralight text-sm px-2 py-1 bg-blue-100 mr-2 shadow-md rounded-md hover:bg-blue-200 ${
            props.status === "completed" &&
            "bg-green-400 pointer-events-none transition-all duration-150"
          }`}
          onClick={() => {
            completedHandler(props.id);
          }}
        >
          {props.status === "" ? "Mark Completed" : "Finished!"}
        </button>
        <button
          className="border font-extralight text-sm px-2 py-1 bg-blue-100 shadow-md rounded-md hover:bg-blue-200 "
          onClick={() => {
            deleteHandler(props.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
const Todo = () => {
  //get the todos from local storage for initializing from 2nd time onwards.
  const getInitialTodos = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos || [];
  };
  const [todos, setTodos] = useState(getInitialTodos);
  const [display, setDisplay] = useState(true);
  const [value, setValue] = useState("");
  const notify = () => {
    toast("New task added!");
  };
  // Load tasks from local storage whenever the component is mounted.
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      console.log("Loaded todos from local storage:", storedTodos);
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    console.log("Updating local storage with todos:", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const reverse = () => {
    console.log("before reversing: ", todos);
    setTodos([...todos].reverse());

    console.log("after reversing: ", [...todos].reverse());
  };
  const addClickHandler = () => {
    setDisplay(!display);
    const newTask = {
      id: todos.length + 1,
      desc: value,
      time: new Date().toLocaleTimeString(),
      status: "",
    };
    //make sure to sort the todo because if its in reversed then new task gets added to incorrect position.
    setTodos([...todos, newTask].sort((a, b) => a.id - b.id));
    setValue("");
    notify();
  };
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`h-[100vh] flex justify-center items-center ${
        theme === "dark" ? "bg-[#2d2d2e]" : "bg-white"
      }`}
    >
      <button
        className=" absolute top-10 px-2 py-2 bg-slate-200 text-2xl rounded-full flex justify-center items-center"
        onClick={() => {
          toggleTheme();
        }}
      >
        <i className="fa-solid fa-circle-half-stroke "></i>
      </button>
      <div className="w-3/5 mx-auto mt-10 p-4 bg-white shadow-sm shadow-white rounded-lg">
        {/* Enter the task */}
        <div
          className={
            display
              ? "hidden"
              : "flex justify-between items-center gap-3 bg-blue-50 p-4 rounded-md shadow-sm"
          }
        >
          <input
            type="text"
            value={value}
            className="border border-blue-300 bg-white text-black py-2 px-4 w-3/4 rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            className={` border border-blue-500 text-blue-500 bg-white py-2 px-4 rounded-md shadow-sm ${
              value
                ? "hover:bg-blue-600 hover:text-white transition duration-300"
                : "opacity-50 cursor-not-allowed"
            }`}
            onClick={addClickHandler}
            disabled={!value}
          >
            ADD TASK
          </button>
        </div>
        <table
          className={`${display ? "w-full my-4" : "hidden"} ${
            theme === "light" ? "bg-slate-600" : "bg-white"
          }`}
        >
          <thead>
            <tr className={`${theme === "dark" && "text-white"}`}>
              <td className="py-2 px-4 border-b-2 border-gray-300 bg-blue-100 text-center text-gray-700 uppercase font-semibold text-sm">
                Id
              </td>

              <td className="py-2 px-4 border-b-2 border-gray-300 bg-blue-100 text-center text-gray-600 uppercase font-semibold text-sm">
                Input
              </td>
              <td className="py-2 px-4 border-b-2 border-gray-300 bg-blue-100 text-center text-gray-600 uppercase font-semibold text-sm">
                Time
              </td>
              <td className="py-2 px-4 border-b-2 border-gray-300 bg-blue-100 text-center text-gray-600 uppercase font-semibold text-sm">
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {todos.map((task, index) => {
              // console.log(
              //   `<List key=${index} id=${task.id} time=${task.time}></List>`
              // );
              return (
                <List
                  key={index}
                  id={task.id}
                  desc={task.desc}
                  time={task.time}
                  status={task.status}
                  todos={todos}
                  setTodos={setTodos}
                ></List>
              );
            })}
          </tbody>
        </table>
        <button
          className={
            display
              ? "py-2 px-4 mr-4 border border-blue-500 bg-blue-500 text-left text-white uppercase font-semibold text-sm rounded-md transition-all shadow-sm hover:bg-blue-600 duration-300 "
              : "hidden"
          }
          onClick={() => {
            setDisplay(!display);
          }}
        >
          New Task
        </button>
        <button
          className={
            display
              ? "py-2 px-4 border border-blue-300 bg-blue-500 text-left text-white uppercase font-semibold text-sm rounded-md shadow-sm transition duration-300 hover:bg-blue-600"
              : "hidden"
          }
          onClick={reverse}
        >
          reverse
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Todo;
