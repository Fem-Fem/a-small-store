import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

function ProductDetails() {
  const this_product = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  console.log(this_product);

  return <div className="Product">{this_product.this_product.title}</div>;
}

export default ProductDetails;
