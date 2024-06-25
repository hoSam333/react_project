import React from 'react'
import "./Home.css"
import Header from "./../Header/Header"
import Services from "../Services/Services"
import Category from "./../Category/Category"
import Product from "./../Product/Product"
import Slider2 from "../Slider2/Slider2"

function Home({addToCart}) {


  return (
    <div className='Home'>
      
      <Header/>
      <Services/>
      <Category/>
      <Product addToCart={addToCart} />
      <Slider2/>

    </div>
  )
}

export default Home
