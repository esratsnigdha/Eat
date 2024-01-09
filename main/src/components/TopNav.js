import React ,{useState }from 'react'
import { fastfood } from '../products/products'
import {BsFillCartFill} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { FaBangladeshiTakaSign } from "react-icons/fa6"


const TopNav = () => {
    const [sideNav, setSideNav]= useState(false)
    const [cartItems, setCartItems] = useState({1:0,2:0,3:0,4:0,5:0,6:0})
    const addToCart =(id) => {
        setCartItems(cartItems => ({...cartItems, [id]: cartItems[id]+1}))
      }
  
      const subFromCart =(id) =>{
        setCartItems(cartItems => ({...cartItems, [id]: cartItems[id]-1}));
        //$('#btn-2').backgroundColor = 'white';
      }
  
      const removeFromCart =(id) =>{
        setCartItems(cartItems => ({...cartItems, [id]: cartItems[id]=0}))
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
    <div className='max-w-[1520px] mx-auto flex justify-between items-center p-3'>
        <div className='flex items-center'>
            <h1 className='text-2xl pr-[256px] text-red-800'>EATS</h1>
            <h1 className='text-xl pl-44 pr-4'>Menu</h1> 
            <h1 className='text-xl px-4'>Location</h1>
            <h1 className='text-xl px-4'>LogIn</h1> 
            <h1 className='text-xl px-4'>Profile</h1>
            <div className='pl-[450px]'>
            <button onClick={()=> setSideNav(!sideNav)} className='bg-red-700 text-white rounded-full md:flex items-center p-2 cursor-pointer'>
                <BsFillCartFill size={20}/>Cart
                </button>
                {
                sideNav ? ( <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'
                onClick={() => setSideNav(!sideNav)}
                ></div>) :
                ("")
                }
                <div className= {sideNav ? "fixed top-0 right-0 w-[300px] h-screen bg-orange-800 z-10 duration-300"
                :"fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                    <h1 className='absolute left-2 top-4 font-bold text-2xl'>Your Cart</h1>
                     <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25}
                        className='absolute right-4 top-4 cursor-pointer'/>
                   {fastfood.map(item => {
                    if(cartItems[item.id] > 0){
                    return ( <div className='flex justify-between items-center'> 
                            <div className='flex items-center gap-1'>
                            <img className='w-[40px] h-[40px] my-3 rounded-2xl' src={item.img} alt=''/>
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
                       
                                    
     </div>
    </div>
                                
           
            
        
        </div>
    </div>
    </>
  )
}
export default TopNav