import React from 'react'
import Widget from './Widget'
import { CiSquareRemove } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';

function WidgetBox({ itemname, widget, cat_id }) {

    return (
        <div className='py-4 px-4'>
            <h1 className='font-bold'>{itemname}</h1>
            <div className='flex gap-x-5 flex-wrap gap-y-4'>
                {widget.map((item) => < Widget  id={item.id} name={item.name} text={item.text} cat_id={cat_id} />)}
                <div className="widget w-96 bg-white h-48 p-2 rounded-xl">
                    <div className='w-fit '>
                        <div className='flex relative top-16 left-28 bg-slate-100 px-2 py-1'>
                            <Link to={`/addwidgets/${cat_id}`} >Add Widget</Link>
                            <IoMdAdd />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WidgetBox
