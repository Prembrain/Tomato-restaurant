import React from 'react'
import { menuList } from '../constants'

export default function ExploreMenu({category, setCategory}){
    return(
        <section id='menu' >
            <h1 className='text-h1 font-Outfit font-semibold md:text-[34px] text-[24px] mb-4'>Explore our menu</h1>
            <p className='md:max-w-[60%] max-w-full text-text1 text-[16px]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className='flex justify-between items-center gap-[40px] text-center my-5 overflow-x-scroll exploreMenu'>
                {menuList.map((menu) => (
                    <div 
                        key={menu.name}
                        className='cursor-pointer'
                        onClick={()=> setCategory(prev => prev === menu.name ? "All" : menu.name)}
                    >
                        <img  
                            className={`${category === menu.name ? "activeMenu" : ""} w-7.5vw min-w-[80px]  rounded-[50%] transition duration-200`}
                            src={menu.image} 
                            alt={menu.name} 
                        />
                        <p className='mt-2.5 text-text2 text-[16px]'>
                            {menu.name}
                        </p>
                    </div>
                ))}
            </div>
            <hr className='my-2.5 h-0.5 bg-hr border-none'/>
        </section>
    )
}