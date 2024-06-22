import React from 'react'
import { play_store, app_store } from '../assets'

export default function AppDownload(){
    return(
        <section id='mobile-app' className='m-auto mt-[100px] text-center font-medium xl:text-[51px] md:text-[3vw] text-[24px]'>
            <p>For Better Experience Download <br /> Tomato App</p>
            <div className='flex justify-center gap-[20px] mt-[40px]'>
                <img className='max-w-[180px] w-{120px] cursor-pointer hover:scale-105' src={play_store} alt='playStore' />
                <img className='max-w-[180px] w-{120px] cursor-pointer hover:scale-105'  src={app_store} alt='appStore' />
            </div>
        </section>
    )
}