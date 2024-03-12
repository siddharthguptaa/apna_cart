import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import Additem from "./Components/Additem";

let Plist = [
  {
    price: 10,
    name: "Iphone10",
    quantity: 0,
  },
  {
    price: 10,
    name: "MI10",
    quantity: 0,
  },
];
function App() {
  

  let [productList, setProductList] = useState(Plist);
  let [totalAmount, setTotalAmount] = useState(0);
  //console.log(productList);
  const iQuantity = (index) => {
    debugger;
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    newProductList[index].quantity = newProductList[index].quantity + 1;
    newTotalAmount += newProductList[index].price;

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
  const dQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const reset = () => {
    let newProductList = [...productList];

    newProductList.forEach((element) => {
      element.quantity = 0;
    });

    setProductList(newProductList);
    setTotalAmount(0);
  };

  let removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    newTotalAmount =
      newTotalAmount -
      newProductList[index].quantity * newProductList[index].price;
    Plist.splice(index, 1);

    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  let addProd = (name, price) => {
    
    let newProductList = [...productList];
    Plist.push({ price: price, name: name, quantity: 0 });
    newProductList.push({ price: price, name: name, quantity: 0 });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar></Navbar>
      <main className="container mt-5">
        <Additem addProd={addProd}></Additem>
        <ProductList
          products={Plist}
          iQuantity={iQuantity}
          dQuantity={dQuantity}
          removeItem={removeItem}
        ></ProductList>
      </main>

      <Footer totalAmount={totalAmount} reset={reset}></Footer>
    </>
  );
}

export default App;
