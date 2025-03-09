import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProducts } from './redux/Products.slice'
import SingleProductPage from './pages/SingleProductPage'
import Loader from './components/Loader'
import CartPage from './pages/CartPage'
const IndexPage = () => {

  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)

  const fetchProducts = async()=>{
    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      const data = await response.data
      dispatch(addProducts(data))
      
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    fetchProducts()
  },[])
  if(loading){
    return <div className='min-h-screen flex items-center justify-center'>
      <Loader/>
    </div>
  }


  return (
    <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<SingleProductPage/>}/>
          <Route path='/cart' Component={CartPage}/>
          <Route path='*' Component={ErrorPage}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}

export default IndexPage