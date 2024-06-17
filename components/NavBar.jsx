"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"
import Hour from "@/public/24-hours.svg"


const Navbar = () => {

    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <nav className="sticky-navbar flexBetween max-container padding-container z-30 py-5">
            <Link href="/">
                <Image src="/logo2.png" alt="logo" width={120} height={80} />
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="lg:flexCenter hidden">
               
                <Button
                    type="button"
                    title="Free trial"
                    variant="btn_dark_green"
                    icon= {Hour}

                />
            </div>
            <div className='lg:hidden flex relative'>
                <div className='flex'>
                    <Image
                        src="/menu.svg"
                        alt="menu"
                        width={32}
                        height={32}
                        className="inline-block cursor-pointer lg:hidden"
                        onClick={() => setToggleDropdown(!toggleDropdown)}
                    />

                    <div className={`dropdown ${toggleDropdown ? "dropdown_show" : ""}`}>
                        {NAV_LINKS.map((link) => (
                            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                                onClick={() => {
                                    setToggleDropdown(false);
                                }}>
                                {link.label}
                            </Link>
                        ))}
                        <Button
                            type="button"
                            title="Free trial"
                            variant="btn_dark_green"

                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar