import TopNav from "./components/TopNav";
import Food from "./components/Food"
import { useState } from "react";


function App() {
  const [Cart,showCart]= useState(false);
  return (
    <>
     <div className="bg-pink-200 bg-cover max-w-[1520px] " >
      <TopNav showCart={showCart} />
      <Food showCart={showCart} Cart={Cart}/>
     
    </div>
   
    </>
   
  );
}

export default App;
