"use client"
import Image from 'next/image'
import React from 'react';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { CHANNELS } from "@/constants"

const Channels = () => {
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
      <div className="product-item">
        <div className="product-item-content">
          <div className="flex justify-center items-center p-4 box-border">
            <Image
              src={product.img}
              alt={product.name}
              width={120}
              height={120}
              className="product-image"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='mt-6'>
      <Carousel value={CHANNELS} numVisible={6} numScroll={1} className="custom-carousel" circular
        autoplayInterval={2000} itemTemplate={itemTemplate} responsiveOptions={responsiveOptions}  />
    </div>
  );
};

export default Channels;
