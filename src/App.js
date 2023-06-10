import Home from "./components/Home";
import { useState } from "react";
import Order from "./components/Order";




function App() {
  const[content,setContent]=useState("home");



  
  return (
    <div className="App">
      <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
                <a class="navbar-brand" href="h">ŞİRVAN</a>
                <button onClick={()=> setContent("order")} class="bg-info rounded-pill" type="button">
                    Sipariş Ver
                </button>              
            </nav>
      </div>
      <div>
          {content==="home"&& <Home/>}
          {content==="order"&& <Order/>}

      </div>
      
          
          
        

      
    </div>
  );
}


/*
          <Navbar/>
          <Home/>
          <Info/>
          <Foods/>
          <Drinks/>
          <Desserts/>
*/
export default App;
