import React from 'react'
import styles from '../style'
import { Header,ExploreMenu,FoodDisplay,AppDownload } from '../component'

export default function Home(){
    const [category, setCategory] = React.useState('All')

    return(
        <div className={`${styles.boxWidth}`}>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <AppDownload />
        </div>
    )
}