"use client"
import Image from 'next/image'

import React,{useState} from 'react';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { FILMS } from "@/constants/films"

const Films = () => {
    const [autoplay, setAutoplay] = useState(true);

  const responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    }
  ];

  const itemTemplate = (product) => {
    return (
      <div className="product-item border-y">
        <div className="product-item-content">
        <div className="flex justify-center items-center p-4 box-border hover:opacity-80 transition-opacity duration-300 ease-in-out">
        <Image
              src={product.img}
              alt={product.name}
              title={product.name}
              width={300}
              height={300}
              className="product-image rounded-xl shadow-2xl w-75 h-80 "

            />
          </div>
        </div>
      </div>
    );
  };

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };
  return (
    <div className='mt-11' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Carousel 
        value={FILMS}
        numVisible={4}
        numScroll={1}
        className="custom-carousel"
        circular
        autoplayInterval={autoplay ? 2500 : 0} 
        itemTemplate={itemTemplate} 
        responsiveOptions={responsiveOptions}  
      />
    </div>
  );
};

export default Films;
