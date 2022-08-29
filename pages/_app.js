import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [Cart, setCart] = useState({})
  // const [saveCart, setSaveCart] = useState({})
  const [subTotal, setSubTotal] = useState()

  const calculateTotal = () => {
    let Total = 0
    let key = Object.keys(Cart)
    for (let index = 0; index < key.length; index++) {
      Total += Cart[key[index]].price * Cart[key[index]].qty
    }
    setSubTotal(Total)
  }

  useEffect(() => {
    console.log("useEffect run ");
    try {
      const getCart = JSON.parse(window.localStorage.getItem("cart"))
      if (getCart) {
        setCart(getCart)
      }
    } catch (error) {
      console.error(error);
      window.localStorage.clear("cart")
    }
    calculateTotal()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subTotal])


  const saveCart = (myCart) => {
    window.localStorage.setItem("cart", JSON.stringify(myCart))
  }

  const handleAddCart = (
    id,
    qty,
    price,
    name,
    size,
    varient,
  ) => {
    let newCart = Cart
    if (id in newCart) {
      newCart[id].qty = Cart[id].qty + 1
    } else {
      newCart[id] = {
        id,
        qty: 1,
        price,
        name,
        size,
        varient,
      }

    }
    setCart(newCart)
    saveCart(newCart)
    calculateTotal()
  }

  const clearCart = () => {
    setCart({})
    window.localStorage.clear("cart")

  }

  const removeCart = (
    id,
    qty,
    price,
    name,
    size,
    varient,
  ) => {
    console.log("delete cart");
    let newCart = Cart
    if (id in newCart) {
      newCart[id].qty = Cart[id].qty - 1
    }
    if (newCart[id].qty <= 0) {
      delete newCart[id]
    }
    setCart(newCart)
    saveCart(newCart)
    calculateTotal()
  }


  return <>
    <Navbar Cart={Cart} handleAddCart={handleAddCart} removeCart={removeCart} clearCart={clearCart} subTotal={subTotal} />

    <Component handleAddCart={handleAddCart} removeCart={removeCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />

    <Footer />
  </>
}

export default MyApp
