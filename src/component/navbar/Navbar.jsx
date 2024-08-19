import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import { IoMdMore } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='flex justify-between p-5'>
            <div>
                <p className='font-bold'>
                    CNAPP Dashboard
                </p>
            </div>
            <div className='flex items-center gap-x-8'>
                <div className='flex items-center bg-slate-100 px-2 py-1'>
                    <Link to={'/addwidget'}>Add Widget</Link>
                    <IoMdAdd />
                </div>
                <div className='bg-slate-100 p-2'>
                    <FiRefreshCw />
                </div>
                <div className='bg-slate-100 p-2'>
                    <IoMdMore />
                </div>
                <div className='flex gap-x-2 items-center bg-slate-100 px-2 py-1'>
                    <FaClock />
                    <p>Last 2 day</p>
                    <FaAngleDown />
                </div>
            </div>
        </div>
    )
}

export default Navbar
