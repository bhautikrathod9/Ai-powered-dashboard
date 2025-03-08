import React from 'react';
import { FaChartLine, FaChartPie, FaGear } from 'react-icons/fa6';

const Sidebar = () => {
  return (
    <div className='container flex flex-col w-65 h-screen bg-[#0a0e14] text-gray-300 text-xl'>
      <div className='list font-bold mt-4'>
        <div className='flex items-center px-2 py-3 mx-5 my-2 rounded-xl hover:text-blue-400 cursor-pointer hover:bg-[#1d3054]'>
          <FaChartLine className='mr-2' />
          Dashboard
        </div>
        <div className='flex items-center px-2 py-3 mx-5 my-2 rounded-xl hover:text-blue-400 cursor-pointer hover:bg-[#1d3054]'>
          <FaChartPie className='mr-2' />
          Analytics
        </div>
        <div className='flex items-center px-2 py-3 mx-5 my-2 rounded-xl hover:text-blue-400 cursor-pointer hover:bg-[#1d3054]'>
          <FaGear className='mr-2' />
          Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;