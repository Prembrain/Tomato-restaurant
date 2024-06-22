import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import {FoodItem} from '../component'

export default function FoodDisplay({category}){

    const {foodList} = useContext(StoreContext)

    return(
        <section className='mt-[30px]'>
            <h2 className='md:text-[34px] text-[24px] font-Outfit font-semibold'>Top dishes near your</h2>
            <div className='grid grid-cols-foodDisplay mt-[30px] gap-[30px] gap-y-[50px]'>
                {foodList.map((item)=>{
                    if(category==='All' || category===item.category){
                        return <FoodItem key={item.id} {...item}/>  
                    }
                })}
            </div>
        </section>
    )
}