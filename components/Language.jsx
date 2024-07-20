'use client'
import { useState, useTransition, useEffect } from "react";
import { Dropdown } from 'primereact/dropdown';
import { useRouter } from "next/navigation";
import { useLocale } from "use-intl";

export default function FilterDemo() {
    const countries = [
        { name: 'DE', code: 'de', flag: 'https://www.worldometers.info/img/flags/gm-flag.gif' },
        { name: 'EN', code: 'en', flag: 'https://www.worldometers.info/img/flags/us-flag.gif' },
        // Add more countries as needed
    ];

    const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default to "DE"
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale(); 

    useEffect(() => {
        const activeCountry = countries.find(country => country.code === localActive) || countries[0];
        setSelectedCountry(activeCountry);
    }, [localActive]);

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex items-center">
                    <img alt={option.name} src={option.flag} className="mr-2" style={{ width: '18px', height: '14px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex items-center">
                <img alt={option.name} src={option.flag} className="mr-2" style={{ width: '18px', height: '14px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const handleCountryChange = (e) => {
        setSelectedCountry(e.value);
        const nextLocale = e.value.code;

        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };

    return (
        <div className="card flex justify-center bg-transparent">
            <Dropdown
                value={selectedCountry}
                onChange={handleCountryChange}
                options={countries}
                optionLabel="name"
                valueTemplate={selectedCountryTemplate}
                itemTemplate={countryOptionTemplate}
                className="w-full md:w-14rem"
                disabled={isPending}
            />
        </div>
    );
}
