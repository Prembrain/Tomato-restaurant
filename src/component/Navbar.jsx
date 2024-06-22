import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { navLinks } from '../constants'
import { logo, basket_icon } from '../assets'
import { StoreContext } from '../context/StoreContext';


export default function Navbar({setShowLogin}){

    const [menu, setMenu] = React.useState("home");
    // const [scroll, setScroll] = React.useState("false")

    const {getTotalCartAmount} = useContext(StoreContext)

    function getYOffset(){
        if(window.innerWidth <= 768){
            return -79.2
        }else{
            return -86.2
        }
    };

    function scrollWithOffset(el){
        const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
        const yOffset = getYOffset();
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
      };
      

    return(
        <nav className='fixed z-50 top-0 left-0 w-full bg-black '>
            <div className='w-full max-w-[1280px] mx-auto flex py-5 sm:px-10 px-6 justify-between items-center bg-black  text-white'>
                <Link to='/'><img src={logo} alt="logo" className='md:w-[140px] w-[120px]'/></Link>
                    <ul className='nav-li list-none justify-center items-center flex-1 sm:flex hidden'>
                        {navLinks.map((nav,index) => (
                            <li 
                            key={nav.id}
                                onClick={() => setMenu(() => nav.id)}
                                className={`${ menu === nav.id ? "active" : ""} font-normal cursor-pointer md:text-[18px] text-[16px] ${index ===  navLinks.length-1 ? 'mr-0' : 'md:mr-10 mr-5'}`}
                                >
                                {nav.id === 'home' 
                                    ? <Link to='/' >{nav.title}</Link>
                                    : < HashLink to={`/#${nav.id}`} scroll={scrollWithOffset}>{nav.title}</HashLink>
                                }
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-center items-center'>
                        <div className='relative'>
                            <Link to='/cart'>
                                <img 
                                    className='md:w-[29px] w-[22px] md:mr-[30px] mr-[15px]'
                                    src={basket_icon} alt="basket_icon" 
                                    />
                            </Link>
                            <div className={!getTotalCartAmount() ? "" :'dot md:right-[25px]'}></div>
                        </div>
                        <button 
                            onClick={() => setShowLogin(() => true)}
                            type='button'
                            className='bg-transparent  hover:bg-red-50 md:text-[18px] text-[16px] font-normal md:py-2 py-1.5 md:px-[30px] px-[20px] text-chambray capitalize border-solid border-2 border-chambray hover:border-tomato rounded-[50px] transition duration-300'>
                            sign in
                        </button>
                    </div>   
            </div>
        </nav>
    )
}