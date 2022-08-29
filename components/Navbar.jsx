import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ImCross } from "react-icons/im"
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import axios from 'axios'

const Navbar = ({ Cart, handleAddCart, removeCart, clearCart, subTotal }) => {

  const [getCategory, setSetCategory] = useState([])
  const [show, setshow] = useState(false)

  useEffect(() => {
    const getdata = () => {
      axios.request("https://fakestoreapi.com/products/categories").then(function (response) {
        // console.log(response.data);
        setSetCategory(response.data)
      }).catch(function (error) {
        console.error(error);
      });
    }
    getdata()
  }, [setSetCategory])


  return (
    <div>

      <div className="navbar fixed z-50 bg-secondary ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact text-secondary dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
            >
               <li>
                <Link href="/">
                  <a >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <a className="justify-between text-secondary">
                  Profile
                  {/* <span className="badge bg-primary">New</span> */}
                </a>
              </li>
              <li tabIndex="0">
                <span>Category</span>
                <ul className="rounded-box ml-3 bg-neutral p-2">

                  {
                    getCategory?.map((data, ind) =>
                      <Link href={'/category/' + data} key={ind}><li  > <a  >{data}</a> </li></Link>
                    )
                  }


                </ul>
              </li>
              <li>
                <Link href="/contact">
                  <a >
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a >
                    Login
                  </a>
                </Link>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/" >

            <a className="btn btn-ghost text-2xl text-accent">
              Big Mart
            </a>
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button onClick={() => setshow(!show)} className="btn btn-ghost btn-circle">
            <div className="indicator text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{Object.keys(Cart).length} </span>
            </div>
          </button>
          {show && <div className="fixed right-0 top-0 z-40 h-screen w-64 bg-info ">

            <label className="btn btn-ghost bg-primary btn-circle m-5 " onClick={() => setshow(false)}>
              <ImCross />
            </label>
            <p className='text-center text-lg font-bold ' >
              {Object.keys(Cart).length == 0 ? "Shoaping Cart is Empty" : "Shoaping Cart"}
            </p>
            {Object.keys(Cart).map((k) => <div className='relative w-full px-5 py-3 ' key={k} >

              <div className="flex flex-col  font-medium ">
                <div className="flex">
                  <p>1.</p>
                  <div className="flex flex-wrap justify-between w-full ml-2 ">
                    <p> {Cart[k].name} {Cart[k].varient} {Cart[k].size} </p>
                    <p>₹ {Cart[k].price}</p>
                  </div>
                </div>

                <div className="flex justify-center border-4 mt-2 bg-primary w-32 items-center  ">
                  <AiFillPlusCircle
                    onClick={() => handleAddCart(Cart[k].id, Cart[k].qty, Cart[k].price, Cart[k].name, Cart[k].size, Cart[k].varient)} className=' cursor-pointer hover:text-neutral  text-error h-full w-6 mr-3 ' />
                  <p>{Cart[k].qty}</p>
                  <AiFillMinusCircle
                    onClick={() => removeCart(Cart[k].id, Cart[k].qty, Cart[k].price, Cart[k].name, Cart[k].size, Cart[k].varient)} className='cursor-pointer  hover:text-neutral  text-error h-full w-6 ml-3 ' />
                </div>
              </div>
            </div>
            )}

            {Object.keys(Cart).length == 0 ? "" : <> <div className='relative flex justify-between w-full px-5 py-3 font-bold text-success ' >
              <h1  >Total:-</h1>
              <h1>{subTotal || 0}/-</h1>

            </div>
              <div className='relative flex justify-between w-full px-2 py-3 font-bold text-success ' >
                <button className="btn btn-flex">Check Out</button>
                <button onClick={clearCart} className="btn btn-flex">Clear Cart</button>
              </div></>}

          </div>}
        </div>
      </div>

    </div >
  )
}

export default Navbar
