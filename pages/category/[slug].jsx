import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
const Category = () => {
    const router = useRouter()
    const { slug } = router.query
    console.log(slug);
    const [getProduct, setProduct] = useState([])

    useEffect(() => {
        const getdata = () => {
            axios.request("https://fakestoreapi.com/products/category/" + slug).then(function (response) {
                console.log(response.data);
                setProduct(response.data)
            }).catch(function (error) {
                console.error(error);
            });
        }
        getdata()
    }, [slug])

    return (
        <div>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4 justify-evenly  ">

                            {getProduct.map((data, ind) => <div key={ind} className="lg:w-1/4 md:w-1/2 p-4 m-2 w-full border card shadow-2xl ">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <Image width={400} height={200} alt="ecommerce" className="object-cover object-center  block" src={data.image} />
                                </a>
                                <div className="mt-4">
                                    <Link href={"/product/" + data.id}>
                                        <a >
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{data.title}</h2>
                                            <h3 className="text-success text-xs tracking-widest title-font mb-1">{data.description}</h3>
                                            <h3 className="text-error text-xs tracking-widest title-font mb-1">Category - {data.category}</h3>
                                            <p className="mt-1 text-success">₹{data.price}</p>
                                        </a>
                                    </Link>
                                </div>
                            </div>)}

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Category