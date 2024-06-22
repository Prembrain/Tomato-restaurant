import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../style'
import { StoreContext } from '../context/StoreContext'

export default function Cart(){

    const {cartItems, foodList, removeFromCart, getTotalCartAmount}= React.useContext(StoreContext)

    const navigate = useNavigate();

    return(
        <main className= {`${styles.boxWidth} mt-[100px]`}>
            <article >
                <section className='cartTitle'>
                    <p>Item</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>total</p>
                    <p>Remove</p>
                </section>
            <br />
            <hr className='h-[1px] bg-hr border-none'/>
              {foodList.map((item, index) => {
                if(cartItems[item.id]>0){
                    return(
                        <section>
                            <div className= 'cartItem cartTitle'>
                                <img className='w-[50px]' src={item.image} alt={item.name} />
                                <p >{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItems[item.id]}</p>
                                <p>${item.price*cartItems[item.id]}</p>
                                <p 
                                    className='cursor-pointer'
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    x
                                </p>
                            </div>  
                            <hr className='h-[1px] bg-hr border-none'/>
                        </section>   
                    )
                }
              })}  
            </article>
            <article className='mt-[80px] flex sm:flex-row flex-col-reverse justify-between gap-[max(12vw,20px)]'>
                <section className='flex-1 flex flex-col gap-5'>
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
                        <button 
                            onClick={() => navigate('/order') }
                            className='border-none text-white bg-tomato w-[15vw,200px] py-3 rounded-[4px] cursor-pointer'
                        >
                            PROCEED TO CHECKOUT
                        </button>
                </section>
                <section className=' flex-1'>
                    <div>
                        <p className='text-[#555]'>If you have a promo code, Enter it here</p>
                        <div className='mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded-[4px]'>
                            <input
                                className='bg-transparent border-none outline-none pl-2.5' 
                                type="text"  
                                placeholder='promo code'/>
                            <button className='w-[max(10vw,150px)] py-3 px-[5px] bg-black border-none rounded-[4px] text-white'>Submit</button>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    )
}