import React from 'react'
import {Footer, LoginPopup, Navbar} from './component'
import styles from './style'
import {Routes, Route } from 'react-router-dom'
import {Cart, Home, PlaceOrder} from './pages'


export default function App(){

  const [showLogin,setShowLogin] = React.useState(false)

  return(
   <div className='w-full font-Outfit bg-white overflow-hidden scroll-smooth'>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
          <Navbar setShowLogin={setShowLogin}/>
      <div className={`${styles.paddingX} ${styles.flexCenter}  sm:mt-[86.2px] mt-[79.2px]`}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
          </Routes>
      </div>
          <Footer/>
   </div>
  )
}
