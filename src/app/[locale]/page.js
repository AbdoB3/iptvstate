import Hero from "@/components/Hero";
import ChannelLogos from '../../../components/Channels';
import Films from '../../../components/Films';
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import CtaBanner from '@/components/CtaBanner'
import FAQ from "@/components/FAQ";
import Stats from "@/components/stats";
import HowItWorks from "@/components/Steps";

export default function Home() {

  return (
   <>
   <Hero/>
   <ChannelLogos/>
   <Features/>
   <Pricing/> 
   <Films/>
   <CtaBanner/>
   <HowItWorks/>
   <Stats/>

   <FAQ/>
   </>

  );
}
