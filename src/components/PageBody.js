import React from 'react'
import SideBar from './SideBar'
import MainBody from './MainBody'
import Footer from './Footer'

const PageBody = () => {
  return (
    <div className='bodycontent'>
      <div className='row'>
        <SideBar/>
      <MainBody/>
      </div>
      <Footer/>
    </div>
  )
}

export default PageBody
