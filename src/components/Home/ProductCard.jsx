import React from 'react'
import { Link } from 'react-router'

const ProductCard = ({data}) => {
  return (
    <>
        <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={data.image} />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">{data.title}</h2>
            <h3 className="text-gray-500 mb-3">{data.category}</h3>
            <p className="mb-4">{data.description.substring(0,100)}.</p>
            <div className="flex items-center justify-between px-4">
                    <h1 className='text-xl font-bold'> &#8377; {Math.floor(data.price)}/- </h1>
                    <Link to={'/product/'+data.id} className='px-3 py-2 bg-indigo-500 text-white rounded-sm shadow'>Add To Cart</Link>
            </div>
          </div>
        </div>
      </div>
       
    </>
  )
}

export default ProductCard