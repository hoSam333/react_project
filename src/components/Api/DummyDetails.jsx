import React, { useState } from 'react'
import img from "../../assets/images/product-5-DGM0St3L.jpg"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./Api.css"

export default function DummyDetails() {

    let {id} = useParams()
    console.log( id );

    let url = `https://dummyjson.com/products/${id}`
    const [details , setDetails ] = useState({})

   async function getDummyDetails(){
        let {data} = await axios.get(url)
        console.log(data);
        setDetails(data)
    }
    getDummyDetails()

    console.log( details )

  return (

    <div className='container my-5 p-5 api_details'>

    <div className="row">


            <div className="col-lg-5 col-sm-12">
                <div className='img_pro w-100 d-flex align-items-center justify-content-center p-3'>
                    <img className='w-50' style={{ height:"300px" }} src={details.thumbnail} alt="" />
                </div>
            </div>

            <div className="col-lg-7 col-sm-12">
                <div className='pro_details p-3 d-flex flex-column gap-3'>
                    <strong className='fs-3'>{details.category}</strong>
                    <b className='fs-3'>{details.title}</b>
                    <div className='stars'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <p className='text-muted fs-5 description'>{details.description}</p>
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
