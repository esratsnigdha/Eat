import TopNav from "./components/TopNav"
import Food from "./components/Food"
import { useState } from "react";

function App() {
  const [Cart,showCart]= useState(false);
  return (
    <div className="App">
      <TopNav showCart={showCart}/>
      <Food showCart={showCart} Cart={Cart}/>
     
    </div>
  );
}

export default App;
