import React from 'react'
import ProductCard from './ProductCard'

const ProductListing = () => {
  return (
    <div className="min-h-[90vh] bg-white px-4">
      <h1 className="kaushan-script-regular text-4xl text-center my-10 md:my-20">
        Most Popular
      </h1>
      <div className="flex justify-center flex-wrap gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default ProductListing