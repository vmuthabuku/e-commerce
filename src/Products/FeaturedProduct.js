import React from 'react'
import { FeaturedProductsList } from './FeaturedProductList'
import Product from './Product'
import './products.css'

export default function FeaturedProduct () {
    return (
        <div className="featured__container">
         <h1 className="title">
       <center>Featured Items</center> 
    </h1>

    <div className="product__list">
   
             {
              FeaturedProductsList.map(featuredProduct => (
                  <div>
                        <Product  {...featuredProduct} />            
                    </div>

            ))

        }
       
    </div>   
    <div className="button__shop">
          <button className="button is-grey-darker">
     SHOP NOW
     </button> 

    </div>  
   
       </div>
)}
