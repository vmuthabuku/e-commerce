import React,{useState, useEffect}from 'react';
import './allproducts.css'
import { ProductsList } from './ProductList'
import Product from './Product'
import Wrapper from '../Header/Wrapper'


const Products = () => {

    return (
       
        <div className="wrapper">
        <div className="sidebar">Sidebar</div>
        <div className="content">
             {
              ProductsList.map(featuredProduct => (
                  <div>
                        <Product  {...featuredProduct} />            
                    </div>

            ))

        }
        </div>       
        </div>
       
      
    );
}

export default Products;
