import React from 'react'
import styles from '../style'
import { StoreContext } from '../context/StoreContext'

export default function PlaceOrder(){

    const {getTotalCartAmount}= React.useContext(StoreContext)

    return(
        <form className={`${styles.boxWidth} flex sm:flex-row flex-col sm:items-start items-center  justify-between gap-[50px] sm:mt-[100px] mt-[40px]`}>
            <div className='orderLeft w-full max-w-[max(30%,500px)]'>
                <p className='text-[30px] font-semibold mb-[50px]' >Delivery Information</p>
                <div className='multiField'>
                    <input type="text" placeholder='First name'/>
                    <input type="text" placeholder='Last name'/>
                </div>
                <input type="text" placeholder='Email address'/>
                <input type="text" placeholder='Street'/>
                <div className='multiField'>
                    <input type="text" placeholder='City'/>
                    <input type="text" placeholder='State'/>
                </div>
                <div className='multiField'>
                    <input type="text" placeholder='Zip code'/>
                    <input type="text" placeholder='Country'/>
                </div>
                <input type="text" placeholder='Phone'/>
            </div>
            <div className='w-full max-w-[max(40%,500px)]'>
                <section className='flex flex-[1] flex-col gap-5'>
                    <h2 className='text-[24px] font-bold'>Cart Totals</h2>
                    <div>
                        <div className='cartTotleDetail'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr className='h-[1px] bg-hr border-none my-2.5'/>
                        <div className='cartTotleDetail'>
                            <p>Delivery Fee</p>
                            <p>${!getTotalCartAmount()? 0 : 2}</p>
                        </div>
                        <hr className='h-[1px] bg-hr border-none my-2.5'/>
                        <div className='cartTotleDetail'> 
                            <b>Total</b>
                            <b>${!getTotalCartAmount()? 0 : getTotalCartAmount()+2}</b>
                        </div>
                    </div>
                    <div>
                        <button 
                            className='border-none text-white bg-tomato w-[15vw,200px] py-3 px-7 mt-[30px] rounded-[4px] cursor-pointer'
                        >
                            PROCEED TO PAYMENT
                        </button>
                    </div>                   
                </section>
            </div>
        </form>
    )
}