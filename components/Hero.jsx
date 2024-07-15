import Image from 'next/image'
import Button from './Button'
import heroImg from "@/public/Right-hero.jpg"
import {useTranslations} from 'next-intl';


const Hero = () => {
  const t = useTranslations('HomePage');

    return (
        <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <div className="hero-map" />

            {/*removing flex-1 */}
            <div className=" relative z-20 flex  flex-col xl:w-1/2">
                <Image
                    src="/logo.png"
                    alt="iptvstate"
                    width={40}
                    height={40}
                    className="absolute left-[-5px] top-[-45px] w-10 lg:w-[50px]"
                />
                <h1 className="bold-52 ">{t('title')}</h1>

                <h1 className="bold-52 lg:bold-64">Experience TV Like Never Before!</h1>
                <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
                    Experience unlimited entertainment with our IPTV service. Stream live TV, movies, and shows from around the world in 4K quality on any device, anytime, anywhere.
                </p>

                <div className="my-11 flex flex-wrap gap-5">
                    <div className="flex items-center gap-2">
                        {Array(5).fill(1).map((_, index) => (
                            <Image
                                src="/star.svg"
                                key={index}
                                alt="star"
                                width={24}
                                height={24}
                            />
                        ))}
                    </div>

                    <p className="bold-16 lg:bold-20 text-blue-70">
                        8k
                        <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
                    </p>
                </div>

                <div className="flex items-center flex-col w-full gap-3 sm:flex-row">
                    <Button
                        type="button"
                        title="One year only for 49€"
                        variant="btn_primary"
                        href="https://api.whatsapp.com/send/?phone=447376949419"
                    />
                    <Button
                        type="button"
                        title="How it works?"
                        icon="/play.svg"
                        variant="btn_white_text"
                    />
                </div>
            </div>

            <div className="hidden xl:flex relative flex-1 ">
                <Image
                    src={heroImg}
                    alt="Hero Section image"
                    width={1267}
                    height={1601}
                />


            </div>

        </section>
    )
}

export default Hero