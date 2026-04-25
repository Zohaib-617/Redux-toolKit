import React from 'react'
import { fetchApi, fetchvideos } from './api/mediaApi'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Collectionpage from './pages/Collectionpage'


const App = () => {

  return (
    <div className='min-h-screen w-full bg-gray-950 text-white'>
     <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/collection' element={<Collectionpage/>} />
      </Routes>   
     
    </div>
  )
}

export default App
