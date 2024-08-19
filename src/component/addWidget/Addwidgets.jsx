import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { widgetActions } from '../../store'
function Addwidgets() {
    const widgetNameref = useRef()
    const textRef = useRef()
    const dispatch = useDispatch()
    const handleSubmit=()=>{
        const widget_name = widgetNameref.current.value;
        const widget_text = textRef.current.value;
        if(widget_name==="" && widget_text===""){
            alert("Please Enter both Field")
            return
        }
        const cate_id = window.location.href.split('addwidgets/')[1]
        dispatch(widgetActions.addWidget({cate_id,widget_name,widget_text}))
    }
    return (
        <div className='h-80 w-1/3 bg-white shadow-lg shadow-indigo-500/50 absolute top-28 right-96 '>
            <div className="nav bg-blue-800 text-white h-8 flex justify-between px-5 py-2 items-center">
                <div>Add Widget</div>
                <Link to={'/'} className='cursor-pointer'>X</Link>
            </div>
            <div className="relative top-12 left-32 ">
                <div className='border-2 w-fit p-2 my-4'>
                    <input type="text" placeholder='Enter widget Name' style={{outline:"none", border:"none"}} ref={widgetNameref}/>
                </div>
                <div className='border-2 w-fit p-2'>
                    <input type="text" placeholder='Enter widget Text' style={{outline:"none", border:"none"}} ref={textRef}/>
                </div>
                <div className="button my-8">
                    <button className='bg-blue-800 py-2 px-4 rounded-lg text-white font-bold' onClick={handleSubmit}>ADD</button>
                </div>
            </div>
        </div>
    )
}

export default Addwidgets
