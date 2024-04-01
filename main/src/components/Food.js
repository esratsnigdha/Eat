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
      <div className='flex flex-wrap justify-center items-center gap-10 p-8 px-20' >
        {fastfood.map((item)=>{
          return <ItemTile key={item.id} item={item} addToCart={addToCart} cartItems={cartItems}/>
        })}
        

        {Cart === true && <div className={Cart ? "fixed top-0 right-0 w-[250px] h-screen bg-orange-300 z-10 duration-300  overflow-y-auto"
          : "fixed top-0 left-[-100%] w-[250px] h-screen bg-orange-300 z-10 duration-300"}>

          <AiOutlineClose onClick={() => showCart(false)} size={25}
            className='left-3 top-1 cursor-pointer' />

        {fastfood.map(item => {
            if (cartItems[item.id] > 0) {
                return (
                    <div key={item.id} className="border border-black rounded-lg p-4 mt-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                                <img className="w-[40px] h-[30px] rounded-2xl" src={item.img} alt={item.title} />
                                <p> {cartItems[item.id]}</p>

                                <div>
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                </div>

                                <div className="px-10">
                                    <button onClick={() => { addToCart(item.id) }} className="pr-4">+</button>
                                    <button onClick={() => { subFromCart(item.id) }}className='pl-0.5'>-</button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 font-bold">
                                <MdDelete onClick={() => removeFromCart(item.id)} />
                            </div>
                        </div>
                    </div>
                );
            }
            return null;
        })}
          <li class='fixed text-xl mt-5 px-2 flex font-semibold bottom-0 p-2 w-full border-t border-black'>
            Total price: <span class="mt-1 text-black"><FaBangladeshiTakaSign size={20}/></span> 
            {totalAmount()}
          </li>

          
          <p className=' '></p>
        </div>}
      </div>
    </>
  )
}

export default Food