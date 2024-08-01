'use client';

import Error from 'next/error';
import Link from "next/link"
import "./[locale]/globals.css";


export default function NotFound() {
    return (
        <html>
            <body>
                <div >
                    <div className="gradient" />
                </div>
                <main >
                    {/* <Navbar />  */}
                    <Error statusCode={404} />
                </main>
            </body>
        </html>
    )
}