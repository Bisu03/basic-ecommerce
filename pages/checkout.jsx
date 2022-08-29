import React from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

const Checkout = ({ Cart, handleAddCart, removeCart, clearCart, subTotal }) => {

    console.log(Cart);

    return (
        <div className=' font-bold text-center text-xl ' >
            <section className="text-gray-600 body-font relative text-left">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">checkout</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Delivery Details</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative text-left">
                                    <label htmlFor="name" className=" leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative text-left">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative text-left">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Address</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>

                            <div className="p-2 w-1/2">
                                <div className="relative text-left">
                                    <label htmlFor="name" className=" leading-7 text-sm text-gray-600">Phone Number</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative text-left">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Pincode</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div className="p-2 w-1/2">
                                <div className="relative text-left">
                                    <label htmlFor="name" className=" leading-7 text-sm text-gray-600">State</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative text-left">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">District</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex flex-col text-center w-full mb-12">
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Review Cart</p>
            </div>

            <div className="flex justify-center w-full flex-row  h-auto bg-primary">
                {/* {Object.keys(Cart).length == 0 ? "Shoaping Cart is Empty" : "Shoaping Cart"}
                {Object.keys(Cart).map((k) => <div key={k} className="flex m-2 place-items-center w-full justify-around">
                    <p className=" text-base">.<p> {Cart[k].name} {Cart[k].varient} {Cart[k].size} </p>
                        <p>₹ {Cart[k].price}</p></p>
                    <div className="flex justify-center border-4 bg-primary w-32">
                        <AiFillPlusCircle
                            onClick={() => handleAddCart(Cart[k].id, Cart[k].qty, Cart[k].price, Cart[k].name, Cart[k].size, Cart[k].varient)} className=' cursor-pointer hover:text-neutral  text-error h-full w-6 mr-3 ' />
                        <p>{Cart[k].qty}</p>
                        <AiFillMinusCircle
                            onClick={() => removeCart(Cart[k].id, Cart[k].qty, Cart[k].price, Cart[k].name, Cart[k].size, Cart[k].varient)} className='cursor-pointer  hover:text-neutral  text-error h-full w-6 ml-3 ' />
                    </div>

                </div>)} */}
            </div>

            <div className='flex justify-center w-full my-2'>

                <div className="form-control w-max container ">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox border" />
                        <span className="label-text ml-1">I want to place a Cash on Delivery (COD) Order. I promise to pay the delivery partner on delivery</span>
                    </label>
                </div>
            </div>

            <div className='flex justify-around place-items-center ' >
                <div>
                    <div className="flex flex-wrap place-items-centre mt-10 ">
                        <div className="form-control w-60 flex ">
                            <input type="text" placeholder="Enter the Promocode" className="input input-bordered " />

                        </div>

                        <button className="flex ml-2 lg:mt-1 text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded">Apply</button>
                    </div>
                    <label className="label">< span className=" label-text-alt">Apply Promocode</span>
                    </label>
                </div>
                <button className="flex justify-center place-items-center text-white p-0 h-[40px] w-20 bg-primary rounded hover:bg-secondary ">Pay</button>
            </div>
        </div>
    )
}

export default Checkout