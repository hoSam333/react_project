import React, { useEffect, useState } from "react"
import { BrowserRouter , Routes , Route, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Shop from "./components/Shop/Shop"
import Fake from "./components/Api/Fake"
import Dummy from "./components/Api/Dummy"
import axios from "axios"
import FakeDetails from "./components/Api/FakeDetails"
import DummmyDetails from "./components/Api/DummyDetails"
import Contact from "./components/Contact/Contact"
import Cart from "./components/Cart/Cart"
import Swal from 'sweetalert2'


function App() {
  

  const fakeApi = "https://fakestoreapi.com/products"
  const dummyApi = "https://dummyjson.com/products"

  const  [ fakeProducts , setFakeProducts ] = useState([])
  const  [ dummyProducts , setDummyProducts ] = useState([])

async function getFakeProducts(){
  let {data} = await axios.get(fakeApi)
  setFakeProducts( data )
} 

async function getDummyProducts(){
  let {data} = await axios.get(dummyApi)
  setDummyProducts( data.products )
} 
useEffect(()=>{
  getFakeProducts()
  getDummyProducts()
} , [])



let [ cartItems , setCartItems ] = useState([])

let chekPro = JSON.parse(localStorage.getItem("product"))

useEffect(()=>{
  if(chekPro){
    setCartItems(chekPro)
  }else{
    setCartItems([])
  }
} , [])


function addToCart(pro){


  let selectedProduct = cartItems.find( item =>  item.title === pro.title  )
  if(selectedProduct){
    Swal.fire({
      title: "this product is already add !",
      text: "That thing is still around?",
      icon: "info"
    });
  }else{
    Swal.fire({
      title: `Your Product (<span class="text-primary">${pro.title ? pro.title : pro.name}</span>) add successfully!`,
      text: "You clicked the button!",
      icon: "success" ,
      showConfirmButton : false ,
      timer : 1500
    });
  
    setCartItems([...cartItems , { ...pro ,amount : 1 }])

  }


}

function increamnt(pro){
  ++pro.amount
  setCartItems([...cartItems])
}

function decremnet(pro){
  if(pro.amount > 1){
    --pro.amount
  }else{
    removeFromCart()
  }
  setCartItems([...cartItems])
}

function removeFromCart(key){
  Swal.fire({
    title: "Are you sure to Delete product ?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success" ,
        showConfirmButton: false ,
        timer:1500
      });
      cartItems.splice( key , 1 )
      setCartItems([...cartItems])
    }

  });

}
useEffect(()=>{
  localStorage.setItem( "product" , JSON.stringify( cartItems ) )
} , [cartItems] )


let [ dark , setDark ] = useState(false)
function isDark(){
  setDark(!dark)
}

  return (
 <div className={dark ? "dark BODY" : " BODY"} >




 <BrowserRouter>
    <Navbar cartItems={cartItems} dark={dark}  isDark={isDark}/>

 <Routes>

    <Route path="/"  element={<Home addToCart={addToCart} />}  />
    <Route path="/about" element={ <About/> } />
    <Route path="/shop" element={ <Shop/> } />
    <Route path="/fake" element={ <Outlet/> } >
      <Route path="" element={ <Fake fakeProducts={fakeProducts} getFakeProducts={getFakeProducts} addToCart={addToCart} /> } />
      <Route path="products/:id" element={ <FakeDetails/>  } />
    </Route>
    <Route path="/dummy" element={ <Outlet/> } >
      <Route path="" element={ <Dummy  dummyProducts={dummyProducts} getDummyProducts={getDummyProducts}  addToCart={addToCart} /> } />
      <Route path="products/:id" element={ <DummmyDetails/>  } />
    </Route>

    <Route path="/contact" element={ <Contact/> } />
    <Route path="/cart" element={ <Cart cartItems={cartItems} removeFromCart={removeFromCart} increamnt={increamnt} decremnet={decremnet} /> } />
 </Routes>
 
   <Footer/>
 </BrowserRouter>

 
 
 </div>
  )
}

export default App
