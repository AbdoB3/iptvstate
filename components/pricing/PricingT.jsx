import { PricingSection } from "@/components/ui/pricing-section"
import { useTranslations } from 'next-intl';
import { plans } from '@/constants/plans';

export default function PricingT() {
    const t = useTranslations('Pricing');
    const TIERS = plans(t);
    const PAYMENT_FREQUENCIES = [t('devices.single'), t('devices.multiple')]
    return (
        <div>
            <PricingSection
                title={t('title')}
                subtitle={t('desc')}
                frequencies={PAYMENT_FREQUENCIES}
                tiers={TIERS}
            />
        </div>
    )
}
