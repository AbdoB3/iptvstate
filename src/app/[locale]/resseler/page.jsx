import { useTranslations } from 'next-intl';
import { getMessages } from 'next-intl/server';


export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const title = messages.resseler.title;
  return {
    title,
  };
}


export default function installation() {
    const t = useTranslations('resseler');

    return (
        <div style={{ display: 'flex', alignItems: '', justifyContent: 'center', minHeight: '100vh' }}>

            <h1 className='text-4xl font-bold text-center mt-8 mb-8'>
                {t('title')}
            </h1>

        </div>
    )
}
