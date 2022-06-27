// import React from "react";
// import Product from "./Product.js";

// export default function ProductList(props) {
//   //console.log(props);
//   //traverse the productList array
//   // but for loop is not supported in jsx so we use map to traverse the product
//   return props.productList.map((product, i) => {
//     return (
//       <Product
//         product={product}
//         key={i}
//         incrementQuantity={props.incrementQuantity}
//         decrementQuantity={props.decrementQuantity}
//         index={i}
//       />
//     );
//   });
// }



import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          incrementQuantity={props.incrementQuantity}
          index={i}
          decrementQuantity={props.decrementQuantity}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <h1>No Products Exists in the Carts</h1>
  );
}