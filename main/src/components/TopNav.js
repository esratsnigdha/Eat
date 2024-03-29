import React from 'react'
import {BsFillCartFill} from 'react-icons/bs'



const TopNav = ({showCart}) => {

  return (
    <>
    <div className='max-w-[1520px] mx-auto flex justify-between items-center p-3'>
        <div className='flex items-center'>
            <h1 className='text-4xl font-bold font-serif pr-[230px] text-red-800'>EATS</h1>
            <a href='#home' className='text-xl pl-44 pr-4 text-c' onclick="toggleMenu()">Home </a>
            <a href='#food' className='text-xl pr-4'>Menu</a> 
            <a href='#location'className='text-xl px-4'>Location</a>
            <a href='#login' className='text-xl px-4'>LogIn</a> 
            <a href='profile' className='text-xl px-4'>Profile</a>
            <div className='pl-[350px]'>
             <button onClick={()=> showCart(true)} 
             className='bg-red-700 
                text-white rounded-full 
                md:flex items-center p-2 
                cursor-pointer'>
                    <BsFillCartFill size={20}/>Cart
                </button>
            </div>
        </div>
    </div>
    </>
  )
}
export default TopNav;