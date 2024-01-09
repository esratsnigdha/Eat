import React from 'react'
import { FaBangladeshiTakaSign } from "react-icons/fa6";

export default function ItemTile({ item, addToCart, cartItems }) {

    return (
        <div className='border-bg-black'>
            <img className=' h-[200px] w-[200px] object-cover '
                src={item.img}
                alt={item.title} />
            <p>{item.title}</p>
            <p>BDT {item.price}</p>
            <button id={'btn-' + item.id} onClick={(e) => {addToCart(item.id)}}
                disabled={cartItems[item.id] > 0 ? true : false}
                className=' bg-red-300 drop-shadow-2xl p-1  
                hover:bg-red-500 text-center 
                disabled:bg-gray-300'>Add To Cart</button>
        </div>

    )
}
