import React from 'react'
import { cross_icon } from '../assets'

export default function LoginPopup({setShowLogin}){

    const [currState, setCurrState] = React.useState('Sign Up')

    return(
        <section className='absolute z-10 w-full h-full bg-[#00000090] grid'>
            <form className='place-self-center w-[max(23vw,330px)] text-text1 bg-white flex flex-col gap-[25px] p-[25px_30px] rounded-[8px] text-[14px] animate-[fadeIn_0.5s]'>
                <div className='flex justify-between items-center text-black'>
                    <h2 className='font-semibold md:text-[20px] text-[16px]'>{currState}</h2>
                    <img  
                        className='w-[16px] cursor-pointer'
                        onClick={() => setShowLogin(prev => !prev)} 
                        src={cross_icon} alt='crossIcon' />
                </div>
                <div className='flex flex-col gap-5'>
                    {currState === "Login" 
                        ?<></>
                        :<input
                            className='loginInput' 
                            type="text"    
                            placeholder='Your name' required />
                    }
                    <input
                        className='loginInput' 
                        type="email" 
                        placeholder='Your email' required />
                    <input
                        className='loginInput'
                        type="password" 
                        placeholder='Password' required />
                </div>
                <button
                    className='border-none p-2.5 rounded-[4px] text-white font-normal bg-tomato text-[15px] cursor-pointer'
                >
                    {currState ==='Sign Up' ? 'Create account': 'Login'}
                </button>
                <div className='flex items-start gap-2 mt-[-15px]'>
                    <input className='mt-[5px]' type="checkbox" required/>
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currState==='Login'
                    ?<p>Creat a new account? <span className='loginSpan' onClick={() => setCurrState('Sign Up')}>Click here</span></p>
                    :<p>Already have an account? <span className='loginSpan' onClick={() => setCurrState('Login')}>Login here</span></p>
                }
                
            </form>
        </section>
    )
}