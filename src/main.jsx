import React from 'react'
import ReactDOM from 'react-dom/client'
import DashBoard from './dashboard.jsx'
import NavBar from './navbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <DashBoard/>
  </React.StrictMode>,
)
