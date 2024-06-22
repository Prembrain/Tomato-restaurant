import React from 'react'
import { rating_starts, add_icon_green, add_icon_white, remove_icon_red } from '../assets'
import { StoreContext } from '../context/StoreContext'

export default function FoodItem({id, name, image, price, description, category}){
    
    const {cartItems, addToCart, removeFromCart} = React.useContext(StoreContext)

    return(
        <div className='w-full m-auto rounded-[15px] shadow-foodItem animate-fadeIn'>
            <div className='relative'>
                <img
                    className='w-full rounded-t-[15px]' 
                    src={image} alt={name} 
                />
                {!cartItems[id]
                    ? <img
                        className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]'
                        onClick={() => addToCart(id)} 
                        src={add_icon_white} 
                        alt='addIconW'
                      />
                    
                    : <div className='absolute bottom-[15px] right-[15px] flex items-center gap-2.5 p-1.5 rounded-[50px] bg-white'>
                        <img
                            className='w-[30px]' 
                            onClick={() => removeFromCart(id)} 
                            src={remove_icon_red} 
                            alt='removeIconR' 
                        />
                        <p>{cartItems[id]}</p>
                        <img
                            className='w-[30px]'
                            onClick={() => addToCart(id)} 
                            src= {add_icon_green} 
                            alt='addIconGreen' 
                        />
                      </div>
                }
            </div>
            <div className='p-5'>
                <div className='flex justify-between items-center mb-2.5'>
                    <p className='text-[20px] font-medium'>{name}</p>
                    <img className='w-[70px]' src={rating_starts} alt={rating_starts} />
                </div>
                <p className='text-text3 text-[12px]'>{description}</p>
                <p className='text-tomato text-[22px] font-medium my-2.5'>${price}</p>
            </div>
        </div>
    )
}