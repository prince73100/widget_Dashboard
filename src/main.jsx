import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import widgetStore from './store/index.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Addwidget from './component/addWidget/Addwidget.jsx'
import Addwidgets from './component/addWidget/Addwidgets.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,children:[
      {path:'/addwidget',element:<Addwidget/>},
      {path:'/addwidgets/:id',element:<Addwidgets/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={widgetStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
