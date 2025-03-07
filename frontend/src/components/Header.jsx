import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <div className='navbar flex flex-row bg-[#0a0e14] h-20 justify-between' >
        <div className='leftSec flex items-center'>
            <div className='logo text-[#ffffff] font-bold text-xl p-4'>Ai Dashboard</div>
            <div className='searchBox'>
                <div className='searchBar relative flex flex-row mx-5'>
                    <input type="text" placeholder='Search....' className="w-120 border-transparent focus:outline-none placeholder:text-gray-500 placeholder:p-1 p-2 pl-10 rounded-lg text-gray-100 cursor-pointer bg-[#111927]"/>
                    <button>
                        <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </button>
                </div>
            </div>
        </div>
        <div className='rightSec flex items-center mx-10 justify-between gap-5'>
            <div className='notification cursor-pointer'>
                <IoMdNotificationsOutline className='text-white text-4xl cursor-pointer hover:text-gray-300'/>
            </div>
            <div className='profile cursor-pointer'>
                <FaRegUser className='text-white text-3xl hover:text-gray-300'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header