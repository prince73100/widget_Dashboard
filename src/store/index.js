import { configureStore, createSlice } from '@reduxjs/toolkit'

// data which are stored in local storage
const widget = {
    categories: [
        {
            id: 'cspm_executive_dashboard',
            name: 'CSPM Executive Dashboard',
            widgets: [
                { id: 'widget_1', name: 'Widget 1', text: 'Random text for Widget 1' },
                { id: 'widget_2', name: 'Widget 2', text: 'Random text for Widget 2' },
            ]
        },
        {
            id: 'security_dashboard',
            name: 'Security Dashboard',
            widgets: [
                { id: 'widget_3', name: 'Widget 3', text: 'Random text for Widget 3' },
                { id: 'widget_4', name: 'Widget 4', text: 'Random text for Widget 4' }
            ]
        },
        {
            id: 'CWPP_dashboard',
            name: 'Security Dashboard',
            widgets: [
                { id: 'widget_5', name: 'Widget 5', text: 'Random text for Widget 3' },
                { id: 'widget_6', name: 'Widget 6', text: 'Random text for Widget 4' }
            ]
        }
    ]
};




const widgetSlice = createSlice({
    name: 'widgets',
    initialState: {
        initialwidget: widget,
        item:""
    },
    reducers: {
        addWidget: (state, actions) => {
            state.initialwidget.categories.filter((item) => item.id === actions.payload.cate_id)[0].widgets.push({
                id:Math.random()*100,
                name:actions.payload.widget_name,
                text:actions.payload.widget_text
            })
        },
        removeWidget: (state, actions) => {
            state.initialwidget.categories.forEach(category => {
                category.widgets = category.widgets.filter(widget => widget.id !== actions.payload.id);
            })
        },
        selectItem:(state,actions)=>{
            state.item = actions.payload
        }
    }
})


const widgetStore = configureStore({
    reducer: {
        widgets: widgetSlice.reducer
    }
})

export const widgetActions = widgetSlice.actions

export default widgetStore