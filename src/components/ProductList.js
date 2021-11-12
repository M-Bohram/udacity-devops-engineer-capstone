import { useEffect, useState } from "react";
import Product from "./Product";

import { getProducts } from "../services/product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const products = getProducts()
    setProducts(products)
  }, []);
  return (
    <div className="product-list-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
