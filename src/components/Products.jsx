import React from "react";
import ProductItem from "./ProductItem";
import Counter from "./Counter";

function Products(props) {
  let { productData } = props;
  return (
    <div className="container mt-5">
      <div className="row">
        {productData.map((veri, index) => {
          return (
            <div key={index} className="col-4">
              <ProductItem productData={veri} />
              <Counter />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
