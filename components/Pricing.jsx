import { PLANS } from "@/constants/plans"

export default function Pricing() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center md:gap-8">
                {PLANS.map((plan, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl border ${
                            plan.period === "1 Year"
                                ? 'border-[#EF4D48] p-6 shadow-sm ring-1 ring-[#EF4D48] sm:px-8 lg:p-12'
                                : 'border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12'
                        }`}
                    >
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-gray-900">
                                {plan.period} 
                            </h2> 
                            {plan.bonus && (
                                <span className="text-sm font-medium text-gray-700">{plan.bonus}</span>
                            )}


                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                    €{plan.price}
                                </strong>

                            </p>
                        </div>

                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-[#EF4D48]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700">{plan.support}</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-[#EF4D48]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700">{plan.server}</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-[#EF4D48]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700">{plan.channels}</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-[#EF4D48]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700">{plan.films}</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-[#EF4D48]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700">{plan.devices}</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-[#EF4D48]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700">{plan.update}</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-[#EF4D48]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700">{plan.best}</span>
                            </li>
                            {plan.bonus && (
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-[#EF4D48]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">{plan.bonus}</span>
                                </li>
                            )}
                        </ul>

                        <a
                        href="https://api.whatsapp.com/send/?phone=447376949419"
                        className={`mt-8 block rounded-full border ${
                                plan.period === "1 Year"
                                    ? 'border-[#EF4D48] bg-[#EF4D48] text-white hover:bg-[#f4514b] hover:ring-1 hover:ring-[#EF4D48]'
                                    : 'border-[#EF4D48] bg-white text-[#EF4D48] hover:ring-1 hover:ring-[#EF4D48]'
                            } px-12 py-3 text-center text-sm font-medium focus:outline-none focus:ring active:text-indigo-500`}
                        >
                            Get Started
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
