import React from 'react'
import { FaArrowDown, FaDollarSign, FaUserFriends, FaUsers } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";

const Cards = () => {
  return (
    <>
        <div className='container h-40 m-7 flex flex-row gap-7'>
            <div className='card rounded-2xl bg-[#0a0e14] w-1/4 h-full flex flex-col transition-shadow duration-500 ease-in-out hover:shadow-blue-400 shadow-md cursor-pointer'>
                <div className='name flex flex-row justify-between align-center mt-6 mx-5 text-lg text-gray-300'>    
                    <p className=''>Total users</p>
                    <FaUsers className='mt-1 text-2xl text-blue-400'/>
                </div>
                <div className='value text-4xl font-bold text-white mx-5 mt-4'>
                    24.5K
                </div>
                <div className='value2 flex flex-row mx-5 mt-2 gap-1'>
                    <FaArrowUp className='text-green-600 mt-1'/>
                    <p className='text-green-600'>+12.5%</p>
                </div>
            </div>
            <div className='card rounded-xl bg-[#0a0e14] w-1/4 h-full transition-shadow duration-500 ease-in-out  hover:shadow-blue-400 shadow-md cursor-pointer'>
                <div className='name flex flex-row justify-between align-center mt-6 mx-5 text-lg text-gray-300'>    
                    <p className=''>Revenue</p>
                    <FaDollarSign className='mt-1 text-2xl text-blue-400'/>
                </div>
                <div className='value text-4xl font-bold text-white mx-5 mt-4'>
                    $89.2k
                </div>
                <div className='value2 flex flex-row mx-5 mt-2 gap-1'>
                    <FaArrowUp className='text-green-600 mt-1'/>
                    <p className='text-green-600'>+8.2%</p>
                </div>
            </div>
            <div className='card rounded-xl bg-[#0a0e14] w-1/4 h-full transition-shadow duration-500 ease-in-out  hover:shadow-blue-400 shadow-md cursor-pointer'>
                <div className='name flex flex-row justify-between align-center mt-6 mx-5 text-lg text-gray-300'>    
                    <p className=''>Conversion</p>
                    <IoStatsChartSharp className='mt-1 text-2xl text-blue-400'/>
                </div>
                <div className='value text-4xl font-bold text-white mx-5 mt-4'>
                    3.8%
                </div>
                <div className='value2 flex flex-row mx-5 mt-2 gap-1'>
                    <FaArrowDown className='text-red-600 mt-1'/>
                    <p className='text-red-600'>-2.4%</p>
                </div>
            </div>
            <div className='card rounded-xl bg-[#0a0e14] w-1/4 h-full transition-shadow duration-500 ease-in-out  hover:shadow-blue-400 shadow-md cursor-pointer'>
                <div className='name flex flex-row justify-between align-center mt-6 mx-5 text-lg text-gray-300'>    
                    <p className=''>Active Users</p>
                    <FaUserFriends className='mt-1 text-2xl text-blue-400'/>
                </div>
                <div className='value text-4xl font-bold text-white mx-5 mt-4'>
                    1.2K
                </div>
                <div className='value2 flex flex-row mx-5 mt-2 gap-1'>
                    <FaArrowUp className='text-green-600 mt-1'/>
                    <p className='text-green-600'>+5.7%</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards