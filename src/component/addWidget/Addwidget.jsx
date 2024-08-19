import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
function Addwidget() {
    const { initialwidget } = useSelector(store => store.widgets)
    const [check, setCheck] = useState({})
    const [widget, setwidget] = useState([initialwidget.categories[0]])
    const handlewidgetList = (id) => {
        let widgetlist = initialwidget.categories.filter((item) => item.id === id)
        setwidget(widgetlist)
    }

    const handleUncheck = (id) => {
        setCheck(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }

    return (
        <div className='h-full w-1/2 bg-white absolute top-0 right-0 '>
            <div className="nav bg-blue-800 text-white h-8 flex justify-between px-5 py-2 items-center">
                <div>Add Widget</div>
                <Link to={'/'} className='cursor-pointer'>X</Link>
            </div>
            <div className='px-5 pt-2'>
                <p>Personalise your dashboard by adding the following widget</p>
            </div>
            <div className='px-5 pt-4 flex gap-x-5  w-56 ml-5 cursor-pointer '>
                {initialwidget.categories.map((item) => {
                    let names = item.name.split(" ")
                    return <div className='hover:border-b-2 border-rose-700 w-fit ' onClick={() => handlewidgetList(item.id)} >{names[0]}</div>
                })}
            </div>
            <div className='px-5 ml-5 mt-10' >
                {widget[0].widgets.map((item) => <div className='border-2 my-2 flex items-center gap-x-4 cursor-pointer' key={item.id} onClick={() => handleUncheck(item.id)} >
                    {check[item.id] ? <FaRegCircle /> : <FaCheckCircle />}
                    <div>{item.name}</div>
                </div>)}
            </div>
            <div className="relative top-1/2 left-96 w-fit flex gap-x-5 ">
                <button className=' border-2 py-2 px-4 border-blue-800 rounded-lg  font-bold'>Cancel</button>
                <button className='bg-blue-800 py-2 px-4 rounded-lg text-white font-bold'  >Confirm</button>
            </div>
        </div>
    )
}

export default Addwidget
