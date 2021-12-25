import React, { useEffect, useState } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchProducts();
  });

  return (
    <div className="ui grid container">
      <ProductComponent products={products} />
    </div>
  );
};

export default ProductListing;
