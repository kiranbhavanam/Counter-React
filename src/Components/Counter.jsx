import React from 'react'
import { useState } from 'react';

const Counter = () => {
  const [counter,setCounter]=useState(0);
  function incrementHandler(){
    setCounter(counter+1)
  }
  function decrementHandler(){
    setCounter(counter-1)
  }
  
  return (
    <div className=' bg-[#2d2d2d] h-[100vh] flex justify-center items-center flex-col'>
        <div className='font-medium text-purple-700 text-2xl mb-3'> Increment && Decrement</div>
        <div className='flex bg-white w-[250px] gap-3 justify-center  items-center align-top '>
            <button className='text-3xl font-medium px-4 py-2 flex items-center justify-center' onClick={decrementHandler}>-</button>
            <div className='text-2xl border-x-2 border-black w-[100px] '>{counter}</div>
            <button className='text-3xl  font-medium  px-4 flex items-center justify-center'  onClick={incrementHandler}>+</button>
        </div>
        <button className='text-white font-semibold mt-2  border-black rounded-sm px-2 bg-purple-700' onClick={()=>{setCounter(0)}}>Reset</button>
    </div>
  )
}

export default Counter