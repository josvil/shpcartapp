import React from "react";

function ProductList(props) {
  const products = [
    { id: 1, name: "Product 1", price: 9.99 },
    { id: 2, name: "Product 2", price: 14.99 },
    { id: 3, name: "Product 3", price: 19.99 }
  ];
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
}
function Product(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
    </div>
  );
}
export default ProductList;
