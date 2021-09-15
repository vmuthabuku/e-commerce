import React from 'react'
import { FeaturedProductsList } from './FeaturedProductList'
import Product from './Product'

export default function FeaturedProduct () {
    return (
        <>
             {
              FeaturedProductsList.map(featuredProduct => (
                  <div>
                        <Product {...featuredProduct} />            
                    </div>

            ))

        }
        </>

       
       
    )}
