import React, {Component} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { productIs1 } from '../redux/actions/product_actions';
import Link from 'next/link';


function Product(this_product) {
	// const this_product = useSelector(state => state.products.products)
	const dispatch = useDispatch();
	// console.log(this_product)

	return (
		<div className="Product">
			Product: <Link href={"product/"+ this_product.this_product.title}>
				<a>{this_product.this_product.title}</a>
			</Link>
			<div>{this_product.this_product.title}</div>
			<div>
      			{(() => {
        			switch (this_product.this_product.availableForSale) {
          				case true:   return "Available";
			          	case false: return "Not available";
        			}
      			})()}
    		</div>
			<button onClick={() => dispatch({type: 'ADD_TO_CART', payload: this_product.this_product})}>Add to cart</button>
		</div>	
	)

}

export default Product;
