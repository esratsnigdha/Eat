import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { AiOutlineClose } from 'react-icons/ai'
import { fastfood } from '../products/products'
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import ItemTile from './ItemTile';

const Food = ({Cart,showCart}) => {
  const [cartItems, setCartItems] = useState({}) // make it dyanmic

  useEffect(()=>{
    const cartItems={}
    fastfood.map((item)=>{
      cartItems[item.id] = 0;
    })
    console.log(cartItems);
    setCartItems(cartItems);
  },[])

  // for +
  const addToCart = (id) => {
    setCartItems(cartItems => ({ ...cartItems, [id]: cartItems[id] + 1 }));
  }

  // for -
  const subFromCart = (id) => {
    setCartItems(cartItems => ({ ...cartItems, [id]: cartItems[id] - 1 }));

  }

  // for delete
  const removeFromCart = (id) => {
    setCartItems(cartItems => ({ ...cartItems, [id]: cartItems[id] = 0 }));
  }

  const totalAmount = () => {
    let amount = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        let productInfo = fastfood.find(item => item.id === Number(key))
        amount += Math.floor(cartItems[key] * productInfo.price)
      }
    }

    return amount;
  }
  return (
    <>
      <h1 className='text-red-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
      <p className='text-red-400 font-semibold text-xl text-center py-2'>Devour your taste with EATS</p>
      <div className='flex flex-wrap justify-center items-center gap-20 p-10 px-60' >
        {fastfood.map((item)=>{
          return <ItemTile key={item.id} item={item} addToCart={addToCart} cartItems={cartItems}/>
        })}
        

        {Cart == true && <div className={Cart ? "fixed top-0 right-0 w-[300px] h-screen bg-orange-300 z-10 duration-300"
          : "fixed top-0 left-[-100%] w-[300px] h-screen bg-orange-300 z-10 duration-300"}>

          <AiOutlineClose onClick={() => showCart(false)} size={25}
            className='absolute right-4 top-4 cursor-pointer' />


          {fastfood.map(item => {
            if (cartItems[item.id] > 0) {
              return (<div className='flex justify-between items-center mt-10'>
                <div className='flex items-center gap-1'>
                  <img className='w-[40px] h-[40px]  rounded-2xl' src={item.img} alt='' />
                  x <p>{cartItems[item.id]}</p>

                  <div className=' '>
                    <p className=''>{item.title}</p>
                    <p>{item.price}</p>

                  </div>
                  <div className='px-10'>
                    <button onClick={() => { addToCart(item.id)}} className='pr-4'>+</button>
                    <button onClick={() => {subFromCart(item.id)}}>-</button></div>
                </div>
                <div className='flex flex-col gap-1 font-bold ' >
                  <MdDelete onClick={() => removeFromCart(item.id)
                  
                  } />


                </div>

              </div>)

            }
          })}
          <li className='text-xl py-4 flex font-semibold '>
            Total price
            <FaBangladeshiTakaSign size={20}
              className=' text-black' />
            : {totalAmount()}
          </li>

          <p className=' '></p>
        </div>}
      </div>
    </>
  )
}

export default Food