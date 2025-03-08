import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Kpi from '../components/Kpi'

const Home = () => {
  return (
    <>
        <Header />
        <div className='flex flex-row'>
            <Sidebar />
            <Kpi />
        </div>
    </>
  )
}

export default Home