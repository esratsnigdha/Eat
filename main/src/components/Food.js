import React, {useState} from 'react'
import {fastfood } from '../products/products'

const Food = () => {

    const [cartItems, setCartItems] = useState({1:0,2:0,3:0,4:0,5:0,6:0})

    const addToCart =(id) => {
      setCartItems(cartItems => ({...cartItems, [id]: cartItems[id]+1}))
    }
    const subFromCart =(id) =>{
      setCartItems(cartItems => ({...cartItems, [id]: cartItems[id]-1}))
    }
    const totalAmount =() => {
      let amount = 0;
      for(const key in cartItems){
        if(cartItems[key] > 0){
          let productInfo = fastfood.find( item=> item.id === Number(key))
          amount += Math.floor(cartItems[key] * productInfo.price )
        }
      }
      return amount;
    }
  return (
   <>
    <h1 className='text-red-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
   <div className='flex flex-wrap justify-center items-center gap-20 p-10 pr-96' >
      {
        fastfood.map((item)=>{
          return(
            <div> 
               <img className='h-[200px] w-[200px] object-cover rounded-3xl'
                   src={item.img}
                   alt={item.title}/>
                   <p>{item.title}</p>
                   <p>{item.price}</p>
                   <button onClick={() => addToCart(item.id)}
                    className='border-2 drop-shadow-2xl p-1 rounded-xl hover:bg-gray-800'>Add To Cart</button>
            </div>
          )
        })
      }
   </div>
   <div className='fixed right-0 top-0 bg-orange-800 h-screen w-[200px]' >
    <h1 className='font-bold text-2xl'>Your Cart</h1>
  
    {fastfood.map(item => {
      if(cartItems[item.id] > 0){
        return ( <div className='flex justify-between items-center'> 
          <div className='flex items-center gap-1'>
          <img className='w-[80px] h-[80px] my-3 rounded-2xl' src={item.img} alt=''/>
          x <p>{cartItems[item.id]}</p>
          <div>
            <p className=''>{item.title}</p>
            <p>{item.price}</p>
          </div>
          </div>
          <div className='flex flex-col gap-2 font-bold' >

            <button onClick={()=> addToCart(item.id)}>+</button>
            <button onClick={()=> subFromCart(item.id)}>-</button>
          </div>
          
        </div>)
       
      }
    })}
      <p className='text-xl font-bold'>Total price: {totalAmount()}</p>
   </div>
   </>
  )
}

export default Food