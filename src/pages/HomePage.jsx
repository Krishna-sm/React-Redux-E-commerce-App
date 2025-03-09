import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ProductCard from '../components/Home/ProductCard'
import { useSelector } from 'react-redux'

const HomePage = () => {

  const products = useSelector((state)=>state.ProductSlice.products)
  // console.log(store)

  return (
    <div className=''>
            
            <HeroSection/>


         <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col text- w-full mb-20">
      <h1 className=" text-2xl xl:text-3xl 2xl:text-5xl font-medium title-font mb-4 text-gray-900">Products</h1>
      
    </div>
    <div className="flex flex-wrap -m-4">
     {
      products &&products.length>0 &&products.map((cur,i)=>{
        return  <ProductCard key={i} data={cur} />
      })
     }
    </div>
  </div>
</section>


    </div>
  )
}

export default HomePage