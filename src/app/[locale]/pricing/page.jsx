import React from 'react'
import { getMessages } from 'next-intl/server';
import Pricing from '@/components/home/Pricing';

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const title = messages.Navbar.pricing_page;
  return {
    title,
  };

}


export default function page() {

  return (
    <div>
      <Pricing />
     
    </div>
  )
}
