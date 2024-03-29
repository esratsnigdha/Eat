import React from 'react'


export default function ItemTile({ item, addToCart, cartItems }) {

    return (
        <div className='max-w-[1220px] m-auto px-4 py-2 gap-3'>
            <img className=' w-[200px] h-[150px] object-cover rounded-2xl '
                src={item.img}
                alt={item.title} />
                <div className='flex justify-between '>
                <p className='font-bold'>{item.title}</p>
                <p className='bg-red-600 h-15 w-15 rounded-full -mt-6 text-white py-4 px-2 font-bold'>BDT {item.price}</p>
                </div>
           
            <button id={'btn-' + item.id} onClick={(e) => {addToCart(item.id)}}
                disabled={cartItems[item.id] > 0 ? true : false}
                className=' rounded-xl bg-red-300 drop-shadow-2xl p-1  
                hover:bg-red-500 text-center 
                disabled:bg-gray-300'>Add To Cart</button>
        </div>

    )
}
