import React from 'react'

export default function ItemTile({ item, addToCart, cartItems }) {

    return (
        <div>
            <img className=' h-[200px] w-[200px] object-cover '
                src={item.img}
                alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button id={'btn-' + item.id} onClick={(e) => {addToCart(item.id)}}
                disabled={cartItems[item.id] > 0 ? true : false}
                className=' bg-red-800 drop-shadow-2xl p-1  
                hover:bg-red-400 text-center 
                disabled:bg-yellow-300'>Add To Cart</button>
        </div>

    )
}
