import HowItWorks from "@/components/home/Steps";
import PricingT from '@/components/pricing/PricingT';
import { getMessages } from 'next-intl/server';


export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const title = messages.Navbar.pricing_page;
  return {
    title,
  };
}


export default function Home() {
  return (
    <>
      <HowItWorks />
      <PricingT />
    </>

  );
}
