import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Cart from '../Cart/Cart'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
    </Routes>
    </>
  )
}

export default Router