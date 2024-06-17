import React from 'react'

const Counter = () => {
  return (
    <div className=' bg-[#2d2d2d] h-[100vh] flex justify-center items-center flex-col'>
        <div className='font-medium text-purple-700 text-2xl mb-3'> Increment && Decrement</div>
        <div className='flex bg-white w-[250px] gap-3 justify-center py-3 items-center '>
            <button className='text-3xl font-medium pl-4 mx-auto '>-</button>
            <div className='text-2xl border-x-2 border-black px-12 '>0</div>
            <button className='text-3xl  font-medium pr-4 mx-auto'>+</button>
        </div>
        <div>Reset</div>
    </div>
  )
}

export default Counter