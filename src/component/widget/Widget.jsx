import React from 'react'
import { CiSquareRemove } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { widgetActions } from '../../store';
function Widget({name,text,id,cat_id}) {
    
    const {item}  = useSelector(store=>store.widgets)
     const dispatch=  useDispatch()

    const handleRemoveWidget=(id,cat_id)=>{
        dispatch(widgetActions.removeWidget({id,cat_id}))
    }

    return (
        <div className={` ${name === item ? "bg-blue-500 text-slate-50": "bg-white"} widget w-96  p-2 h-fit rounded-xl`}>
            <div className="cursor-pointer w-8" style={{marginTop:'-8px', position:"relative", left:"346px"}} onClick={()=>handleRemoveWidget(id,cat_id)} ><CiSquareRemove  size={'30px'}/></div>
            <div className='w-60'>
                <p className='font-bold'>{name}</p>
                <p className='py-5'>{text}</p>
                <p className='font-bold  py-4'> widget caegory</p>
                <p></p>
            </div>
        </div>
    )
}

export default Widget
