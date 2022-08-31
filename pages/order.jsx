import Image from 'next/image'
import React from 'react'

const Order = () => {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">BIG MART</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order ID: #85734</h1>
                            <p className="leading-relaxed mb-4">Your order has been succesfully placed</p>
                            <div className="overflow-x-auto">
                                <table className="table table-compact w-full">
                                    <thead>
                                        <tr>
                                            <th className='w-5'>Name</th>
                                            <th>qty</th>
                                            <th>price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='w-5' >Silicon Power 256GB</td>
                                            <td>23</td>
                                            <td>₹499</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">Subtotal: ₹58.00</span>
                                <button className="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-warning rounded">Track Order</button>
                            </div>
                        </div>
                        <Image alt="ecommerce" width={500} height={400} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/order-confirmed.jpg" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Order