import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  //console.log(props.iQuantity);
  return (
    props.products.length>0?
    props.products.map((item, i) => {
      return (
        <Product
          product={item}
          key={i}
          iQuantity={props.iQuantity}
          dQuantity={props.dQuantity}
          removeItem={props.removeItem}
          index={i}
        ></Product>
      );
    }) : <h1>No Product left here, Thank you :)</h1>
  );
}
//   return (

//      //console.log('Code worked');
//     props.Plist?.map((item,i) => {
//         //console.log(i)
//         return <Product product = {item} Key={i}></Product>
//     });
//     );

// }
