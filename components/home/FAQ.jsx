'use client'
import { useRef, useState } from "react"
import { useTranslations } from 'next-intl';

const FaqsCard = ({ faqsList }) => {
    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function Faqs() {
    
    const t = useTranslations('Faq');
    const faqsList = [
        {
            q: t('content.first.title'),
            a: t('content.first.desc')
        },
        {
            q: t('content.second.title'),
            a: t('content.second.desc')
        },
        {
            q: t('content.third.title'),
            a: t('content.third.desc')
        },
        {
            q:  t('content.fourth.title'),
            a: t('content.fourth.desc')
        },
        {
            q:  t('content.fifth.title'),
            a: t('content.fifth.desc')
        }
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-4xl text-gray-800 font-bold">
                {t('title')}
                </h1>
                <p className="max-w-lg mx-auto text-muted-foreground">
                {t('description')} 
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            key={idx}  // Add key here
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}