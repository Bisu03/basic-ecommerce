/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 flex w-full justify-center">
          <div className="lg:w-2/6 md:w-1/2 bg-secondary rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 ">
            {/* <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2> */}
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
              <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Password</label>
              <input type="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-warning rounded text-lg">Register</button>
            <p className="text-xs text-gray-500 mt-3">Have an account?</p>
            <Link href="/login" className="text-xs text-primary mt-3">
              <a >
                Login
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register