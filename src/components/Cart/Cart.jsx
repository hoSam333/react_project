import React from 'react'
import "./Cart.css"

function Cart({cartItems , removeFromCart , increamnt , decremnet}) {

 console.log( cartItems );

 let totall = 0
  return (
    <div className='Cart container my-5 p-5'>
      
      {cartItems.length > 0?

       <div className="row g-3 ">

      
      {  cartItems.map( (value  , index)=>{
        return(

        <div className="col-lg-12" key={index}>
            <span style={{display:"none"}}>  { totall += value.price * value.amount  } </span>
            <div className='product p-3 d-flex align-items-center justify-content-around '>
              <img src={value.img ? value.img : value.image ? value.image : value.thumbnail   } alt="" />
              <div>
                <b className='fs-5' style={{display : "block"}}>${value.price}</b>
                <b className='fs-5' style={{display : "block"}}>${ value.price * value.amount }</b>
              </div>
              <div className='d-flex align-items-center justify-content-center gap-2 process'>
                <button onClick={ ()=>{ increamnt(value) } }>+</button>
                <span>{value.amount}</span>
                <button onClick={()=>{ decremnet(value) }}>-</button>
              </div>
              <button onClick={ ()=>{ removeFromCart(index) } } className='btn btn-danger'>Remove From Cart</button>
            </div>

        </div>
        )

      } )}

        <div className='col-lg-8 mx-auto'>
          <div className='totall p-3 d-flex align-items-center justify-content-around rounded-3 border border-3 border-dark'>
            <b className='fs-4'>Totall</b>
            <b className='fs-4'>${totall.toFixed(1)}</b>
          </div>
        </div>

       </div>
       :
       <div className='fs-1 text-danger text-center'> Your Cart Is Empty </div>
    }
    </div>
  )
}

export default Cart
