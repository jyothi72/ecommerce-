import React, { useState} from "react";
import Headers from "../page/header";
import Navbar1 from "../page/navbar";
import Footer from "../page/footer";
import Cart from "../cart/cart";
import CartProvider from "../context/context provider";
import Items from "./imagesgn";

function Store() {
  const [cartshow, setCartShow] = useState(false);
 

  const productsArr = [

  
    {
      title: "𝕻𝖆𝖙𝖙𝖊𝖗𝖓 𝖘𝖍𝖎𝖗𝖙",

      price: 339,

    id:3,

      imageUrl:
        "https://raw.githubusercontent.com/jyothi72/ecommerce-/196fffc895b87c504d58f2188913318189afe24d/src/assets/product1of1.jpg",
    },

    {
      title: "𝖘𝖑𝖎𝖒 𝖋𝖎𝖙 𝖘𝖍𝖎𝖗𝖙",

      price: 500,
      id:6,

      imageUrl:"https://raw.githubusercontent.com/jyothi72/ecommerce-/196fffc895b87c504d58f2188913318189afe24d/src/assets/product2of1.jpg"
    },

    {
      title: "𝖆𝖓𝖆𝖗𝖐𝖆𝖑𝖎 𝖐𝖚𝖗𝖙𝖎",

      price: 700,
      id:4,

      imageUrl:
        " https://raw.githubusercontent.com/jyothi72/ecommerce-/196fffc895b87c504d58f2188913318189afe24d/src/assets/product3of1.jpg",
    },

    {
      title: "𝕲𝖎𝖗𝖑𝖘 𝖋𝖗𝖔𝖈𝖐",

      price: 900,
      id:5,

      imageUrl:
        "https://raw.githubusercontent.com/jyothi72/ecommerce-/196fffc895b87c504d58f2188913318189afe24d/src/assets/product4of1.jpg ",
    },
  ];

  const CartshowHandler = () => {
    setCartShow(true);
  };
  const CartHideHandler = () => {
    setCartShow(false);
  };
  return (
    
      <CartProvider>
        {cartshow && <Cart onclosebutton={CartHideHandler}></Cart>}
        <Navbar1 onOpenButton={CartshowHandler}></Navbar1>
        <Headers></Headers>
        <Items Item={productsArr}> </Items>
        <Footer></Footer>
      </CartProvider>
  );
}

export default Store;
