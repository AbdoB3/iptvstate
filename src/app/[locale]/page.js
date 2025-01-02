import Hero from "@/components/home/Hero";
import ChannelLogos from '../../../components/home/Channels';
import Films from '../../../components/home/Films';
import Pricing from "@/components/home/Pricing";
import Features from "@/components/home/Features";
import CtaBanner from '@/components/home/CtaBanner'
import Faq from "@/components/home/FAQ";
import Stats from "@/components/home/Stats";
// import HowItWorks from "@/components/home/Steps";
import Feedback from '@/components/home/Feedbacks';


export default function Home() {

  return (
   <>
   <Hero/>
   <ChannelLogos/>
   <Features/>
   <Pricing/> 
   <Films/>
   <Feedback/>
   <CtaBanner/>
   <Stats/>
   <Faq/>
   </>

  );
}
