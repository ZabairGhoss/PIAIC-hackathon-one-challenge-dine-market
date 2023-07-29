"use client"

import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Products } from '@/utils/mocks';
import { StaticImageData } from 'next/image';
import ProductCard from '@/components/ProductCard';

type Props = {};

const ProductsSlider = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <section className="w-full py-20">
      <div className="flex flex-col gap-5 mb-[32px]">
        <h3 className="uppercase text-center font-bold text-blue-700">
          products
        </h3>
        <h2 className="capitalize text-center font-bold text-4xl">
          checkout what we have
        </h2>
      </div>
      <div>
        <Slider {...settings}>
        {Products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              imgURL={product.img as StaticImageData}
              title={product.title}
              price={product.price}
              category={product.category}
              id={product.id}
            />
          );
        })}
        </Slider>
      </div>
    </section>
  );
};

export default ProductsSlider;
