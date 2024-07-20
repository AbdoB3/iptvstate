'use client'
import { useState, useTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "use-intl";
import { countries } from "@/constants";

export default function FilterDemo() {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default to "DE"
    const [isPending, startTransition] = useTransition();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const localActive = useLocale();

    useEffect(() => {
        const activeCountry = countries.find(country => country.code === localActive) || countries[0];
        setSelectedCountry(activeCountry);
    }, [localActive]);

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        const nextLocale = country.code;

        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left sm:mr-3">
            <div>
                <button
                    type="button"
                    className="inline-flex items-center p-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:ring-offset-2"
                    onClick={() => setIsOpen(!isOpen)}
                    disabled={isPending}
                >
                    <img alt={selectedCountry.name} src={selectedCountry.flag} className="mr-2" style={{ width: '18px', height: '14px' }} />
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
                                <img alt={country.name} src={country.flag} className="mr-2" style={{ width: '18px', height: '14px' }} />
                                {country.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
