// Product.tsx

import ProductSlider from '@/layouts/ProductSlider'
import { FC } from 'react'

interface ProductProps {
  data:Object[]
}

const Product: FC<ProductProps> = ({ data }) => {
  console.log(data)
  return (
    <div className="Products" id='Products'>
      <h2>
        Your <span className="bg-colorful-background">Products</span>
      </h2>
      <ProductSlider productData={data?.slice(0,8)} />
      <ProductSlider productData={data?.slice(9,15)} />
    </div>
  )
}


export default Product;

