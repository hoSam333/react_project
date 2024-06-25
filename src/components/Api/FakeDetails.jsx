import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import img from "../../assets/images/product-1-Eqx8spQ9.jpg"
import axios from "axios"

export default function FakeDetails() {

    const [ productDetails , setProductDetails ] = useState({})

    let {id} = useParams()

    const url = `https://fakestoreapi.com/products/${id}`

  async  function getProductDetails(){
        let {data} = await axios.get(url)
        setProductDetails( data )
    }

    useEffect(()=>{
        getProductDetails()
    } , [])

    console.log( productDetails );


  return (
    <div className='container my-5 p-5 api_details'>

        <div className="row">


                <div className="col-lg-5 col-sm-12">
                    <div className='img_pro w-100 d-flex align-items-center justify-content-center p-3'>
                        <img className='w-50' style={{ height:"300px" }} src={productDetails.image} alt="" />
                    </div>
                </div>

                <div className="col-lg-7 col-sm-12">
                    <div className='pro_details p-3 d-flex flex-column gap-3'>
                        <strong className='fs-3'>{productDetails.category}</strong>
                        <b className='fs-3'>{productDetails.title}</b>
                        <div className='stars'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p className='text-muted fs-5 description'>{productDetails.description}</p>
                        <button>
                            <i class="fa-solid fa-cart-plus"></i>
                            <span>Add To Cart</span>
                        </button>
                    </div>
                </div>

        </div>
      
    </div>
  )
}
