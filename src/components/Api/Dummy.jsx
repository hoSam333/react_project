import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Api.css"


export default function Dummmy({dummyProducts , getDummyProducts , addToCart}) {

    useEffect(()=>{
      getDummyProducts()
      } , [])

  return (
    <div className='Api container my-5 p-5'>

        <h3>Dummy Products</h3>

        <p className='w-75 fs-5 text-center text-muted mx-auto my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint dicta provident corporis hic esse porro accusantium ullam. Consectetur id mollitia ipsa tenetur sequi exercitationem facere rem itaque error! Velit!</p>

        <div className="row g-3">

            {dummyProducts.map( ( val , key )=>{
                return(
            <div className="col-lg-3 col-md-6 col-sm-12" key={key}>
                <div className='one p-3 rounded-3 d-flex align-items-center justify-content-center flex-column gap-3'>
                    <Link to={`products/${val.id}`} className='w-100 d-flex align-items-center justify-content-center'>
                        <img className='w-50' style={{height:"180px"}} src={val.thumbnail} alt="" />
                    </Link>
                    <b className='fs-4 text-muted'>{val.title.slice(0 , 10)}</b>
                    <div className='process w-100 d-flex align-items-center justify-content-between'>
                      <i className="fa-solid fa-heart"></i>
                      <i onClick={ ()=>{ addToCart(val) } } className="fa-solid fa-cart-shopping"></i>
                  </div>
                </div>
            </div>
                )
            } )}

        </div>
      
    </div>
  )
}
