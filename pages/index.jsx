import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";


export default function Home() {

  const [getProduct, setProduct] = useState([])

  useEffect(() => {
    const getdata = () => {
      axios.request("https://fakestoreapi.com/products").then(function (response) {
        console.log(response.data);
        setProduct(response.data)
      }).catch(function (error) {
        console.error(error);
      });
    }
    getdata()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/banner1.jpg" className='object-cover' height={1000} width={5000} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/banner2.jpg" className='object-cover' height={1000} width={5000} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/banner3.jpg" className='object-cover' height={1000} width={5000} />
        </SwiperSlide>
      </Swiper>


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-4 justify-evenly  ">

            {getProduct.map((data) => <div key={data._id} className="lg:w-1/4 md:w-1/2 p-4 m-2 w-full border card shadow-2xl ">
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
  )
}
