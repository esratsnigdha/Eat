import React ,{useState }from 'react'
import {BsFillCartFill} from 'react-icons/bs'



const TopNav = ({showCart}) => {

  return (
    <>
    <div className='max-w-[1520px] mx-auto flex justify-between items-center p-3'>
        <div className='flex items-center'>
            <h1 className='text-3xl font-bold font-serif pr-[230px] text-red-800'>EATS</h1>
            <h1 className='text-xl pl-44 pr-4'>Menu</h1> 
            <h1 className='text-xl px-4'>Location</h1>
            <h1 className='text-xl px-4'>LogIn</h1> 
            <h1 className='text-xl px-4'>Profile</h1>
            <div className='pl-[450px]'>
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