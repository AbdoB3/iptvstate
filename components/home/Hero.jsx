import heroImg from "@/public/Right-hero.webp"
import Image from 'next/image'
import Button from './Button'
import { useTranslations } from 'next-intl';


const Hero = () => {
    const t = useTranslations('Hero');

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

                <h1 className="bold-52 lg:bold-58">{t('title')}</h1>
                <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
                    {t('description')}
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
                        <span className="regular-16 lg:regular-20 ml-1">{t('reviews')}</span>
                    </p>
                </div>

                <div className="flex items-center flex-col w-full gap-3 sm:flex-row">
                    <Button
                        type="button"
                        title={t('oneYear')}
                        variant="btn_primary"
                        href="https://api.whatsapp.com/send/?phone=447376949419"
                    />
                    <Button
                        type="button"
                        title={t('how')}
                        icon="/play.svg"
                        variant="btn_white_text"
                        href="https://api.whatsapp.com/send/?phone=447376949419"
                    />
                </div>
            </div>

            <div className="hidden xl:flex relative flex-1">
            <Image
                src={heroImg}
                alt="Hero Section image"
                width={500}  
                height={200}  // Adjust to the actual display size
                loading="eager"  // Image is loaded immediately
                priority={true}  // High-priority image for faster loading
                sizes="(max-width: 768px) 100vw, 50vw" // Adjust based on viewport width
            />
            </div>

        </section>
    )
}

export default Hero