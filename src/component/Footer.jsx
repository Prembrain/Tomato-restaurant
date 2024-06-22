import React from 'react'
import {logo, facebook_icon, twitter_icon, linkedin_icon } from '../assets'

export default function Footer(){
    return(
        <footer id='contact us' className='text-footer bg-bgFooter flex flex-col items-center gap-[20px] pt-[80px] pb-[20px] px-[2vw] mt-[100px]'>
            <div className='max-w-[1280px] flex flex-col gap-[35px] sm:w-full sm:grid sm:grid-cols-[2fr_1fr_1fr] sm:gap-[80px]'>
                <div className='flex flex-col items-start gap-[20px]'>
                    <img src={logo} alt='logo' />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknows printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='flex'>
                        <img  className='mr-[15px] w-[40px]' src={facebook_icon} alt='facebookIcon' />
                        <img  className='mr-[15px] w-[40px]' src={twitter_icon} alt='twitterIcon' />
                        <img className='w-[40px] ' src={linkedin_icon} alt='linkedinIcon' />
                    </div>
                </div>
                <div className='flex flex-col items-start gap-[20px]'>
                    <h2 className='text-white uppercase text-[20px] font-semibold'>company</h2>
                    <ul className='list-none mb-2.5'> 
                        <li className='mb-2.5'>Home</li>
                        <li className='mb-2.5'>About us</li>
                        <li className='mb-2.5'>Delivery</li>
                        <li className='mb-2.5'>Privacy policy</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start gap-[20px]'>
                    <h2 className='text-white text-[20px] font-semibold'>GET IN TOUCH</h2>
                    <ul className='list-none'>
                        <li className='mb-2.5'>+1-212-456-7890</li>
                        <li className='mb-2.5'>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr className='w-full h-[2px] my-[20px] bg-gray-300 border-none'/>
            <p className='text-center'>Copyright 2024 © Tomato.com - All Right Reserved.</p>
        </footer>
    )
}