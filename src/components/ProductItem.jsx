import React from "react";

function ProductItem(props) {
//   console.log(props);

let {productData} = props

  return (
    <div className="container mt-4">
      
          <div className="card">
            <img
              src={productData.imgUrl}
              className="card-img-top yükseklik"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{productData.productName}</h5>
              <p className="card-text">{productData.productPrice} ₺</p>
            </div>
          </div>
        
    </div>
  );
}

export default ProductItem;
