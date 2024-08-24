import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

/*import Footer from '../components/Footer'
import Products from '../components/Products'
import Categories from '../components/Categories'*/

const Homepage = () => {
  return (
    <>
    <Navbar />
    <Slider />
    <Categories/>
    <Products/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Homepage