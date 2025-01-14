'use client'
import { useState, useTransition, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { countries } from "@/constants";
import { useLocale } from "use-intl";
import Image from 'next/image'

export default function FilterDemo() {
    const [selectedCountry, setSelectedCountry] = useState(countries[1]); // Default to "EN"
    const [isPending, startTransition] = useTransition();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const localActive = useLocale();

    useEffect(() => {
        const activeCountry = countries.find(country => country.code === localActive) || countries[1];
        setSelectedCountry(activeCountry);
    }, [localActive]);

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        const nextLocale = country.code;

        startTransition(() => {
            const path = pathname.split("/").slice(2).join("/");
            router.replace(`/${nextLocale}/${path}`);
        });
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left ">
            <div>
                <button
                    type="button"
                    className="inline-flex items-center mr-3 p-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:ring-offset-2"
                    onClick={() => setIsOpen(!isOpen)}
                    disabled={isPending}
                >
                    <Image alt={selectedCountry.name} src={selectedCountry.flag} className="mr-2"  width= {18}  height= {14} />
                    {selectedCountry.name}
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-28 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-1">
                        {countries.map((country) => (
                            <button
                                key={country.code}
                                onClick={() => handleCountryChange(country)}
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <Image alt={country.name} src={country.flag} className="mr-2" width={18} height={14} />
                                {country.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
