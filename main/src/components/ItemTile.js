import React from 'react'
import { FaBangladeshiTakaSign } from "react-icons/fa6"
import { GrAdd } from "react-icons/gr";


export default function ItemTile({ item, addToCart, cartItems }) {

    return (
        <div className='max-w-[300px] m-auto px-4 py-4 border border-gray-400 rounded-lg shadow-md hover:shadow-2xl transition duration-300'>
          <p className='text-lg font-bold mb-2'>{item.title}</p>
          <img
            className='w-full h-[200px] object-cover rounded-t-lg mb-2'
            src={item.img}
            alt={item.title}
          />
          <div className='flex justify-between items-center'>
            <p className='flex items-center bg-red-600 h-10 w-20 rounded-full text-white py-2 px-3 font-bold'>
              <FaBangladeshiTakaSign size={18} className='mr-1' />
              {item.price}
            </p>
            <button
              id={'btn-' + item.id}
              onClick={(e) => {addToCart(item.id)}}
              disabled={cartItems[item.id] > 0 ? true : false}
              className='h-10 w-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-orange-500 disabled:bg-gray-400 font-bold'
            >
              <GrAdd size={18}/>
            </button>
          </div>
        </div>
      )
}
