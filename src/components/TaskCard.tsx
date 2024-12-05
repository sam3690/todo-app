import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const TaskCard = () => {
  return (
    <div className='flex flex-row p-6 items-center justify-between mt-3 text-[#9E78CF] min-w-[300px] max-h-[80px] rounded-lg bg-[#0D0714]'>
        <label htmlFor="label" >Task number 1</label>
        <div className='flex flex-row items-center  justify-between'>
        <FaCheck className='justify-start text-xl' />
        <MdDelete className='justify-end text-right text-xl ml-3' />
        </div>
    </div>
  )
}

export default TaskCard