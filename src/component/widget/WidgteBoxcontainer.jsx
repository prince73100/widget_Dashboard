import React from 'react'
import WidgetBox from './WidgetBox'
import { useSelector } from 'react-redux'

function WidgteBoxcontainer() {
  const {initialwidget} = useSelector(store => store.widgets)

  return (
    <div className='flex flex-col items-center'>
      {initialwidget.categories.map((item)=><WidgetBox key={item.id} cat_id={item.id} itemname={item.name} widget={item.widgets} />)}
    </div>
  )
}

export default WidgteBoxcontainer
