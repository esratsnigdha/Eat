import React, {useState} from 'react'
import { MdDelete } from "react-icons/md";
import { fastfood } from '../products/products'


const Food = () => {

  
    const [cartItems, setCartItems] = useState({1:0,2:0,3:0,4:0,5:0,6:0}) // make it dyanmic

    const addToCart =(id) => {
      setCartItems(cartItems => ({...cartItems, [id]: cartItems[id]+1}))
    }

   
    
  return (
   <>
    <h1 className='text-red-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
   <div className='flex flex-wrap justify-center items-center gap-20 p-10 px-60' >

      {
        fastfood.map((item)=>{
          return(
            <div> 
               <img className=' h-[200px] w-[200px] object-cover '
                   src={item.img}
                   alt={item.title}/>
                   <p>{item.title}</p>
                   <p>{item.price}</p>
                   <button id={'btn-'+item.id} onClick={
                    (e) => {
                      
                      addToCart(item.id);
                      e.target.style.backgroundColor = 'yellow';
                      e.target.disabled = true;
                    } 
                  }
                    className=' bg-red-800 drop-shadow-2xl p-1  hover:bg-gray-800 text-center'>Add To Cart</button>
            </div>
            
          )
        })} 
        
  </div>
   </>
  )
}

export default Food