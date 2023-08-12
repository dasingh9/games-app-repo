import React from 'react'
import ReactDOM from 'react-dom/client'
import GamesApp from './components/GamesApp.jsx'
import SiteHeader from './components/SiteHeader.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SiteHeader></SiteHeader>
    <div style={{marginTop:"10px"}}></div>
    <div className='container' style={{width:"1024px", margin:"auto"}}>
      <GamesApp></GamesApp>
    </div>
  </React.StrictMode>,
)