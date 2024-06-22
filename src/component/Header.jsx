import React from 'react'
import styles from '../style'
import { header_img } from '../assets'

export default function Header(){
    return(
        <header id = 'home' className='relative bg-white mb:my-10 my-7'>
                <img className='w-full' src={header_img} alt='header_img' />
                <div className={`${styles.flexStart} flex-col gap-[10px] absolute bottom-[14%] animate-fadeIn xl:left-[102px] left-[6vw] md:max-w-[45%] max-w-[55%]`}> 
                    <h2 className={`${styles.heading2}`}>Order your favorite food here</h2>
                    <p className={`${styles.paragraph} sm:block hidden`}>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                    <button className='border-none bg-white font-Outfit font-normal text-tomato rounded-full sm:py-2 py-1.5 sm:px-4 px-3 sm:text-[16px] text-[14px]' type='button'>View Menu</button>
                </div>
        </header>
    )
}