"use client";
import { useState } from "react"
import { PricingCard } from "@/components/ui/pricing-card";
import { Tab } from "@/components/ui/pricing-tab"
import { useTranslations } from 'next-intl';
import WordPullUp from "@/components/ui/word-pull-up";

export function PricingSection({
  title,
  subtitle,
  tiers,
  frequencies
}) {
  const [selectedFrequency, setSelectedFrequency] = useState(frequencies[0])
  const t = useTranslations('Pricing');

  return (
    (<section className="flex flex-col items-center gap-10 py-10">
      <div className="space-y-7 text-center">
        <div className="space-y-4">
          <WordPullUp className="text-4xl md:text-5xl font-bold">{title}</WordPullUp>
          <WordPullUp className="text-muted-foreground mt-2">{subtitle}</WordPullUp>
        </div>
        <div className="mx-auto flex w-fit rounded-full bg-muted p-1">
          {frequencies.map((freq) => (
            <Tab
              key={freq}
              text={freq}
              selected={selectedFrequency === freq}
              setSelected={setSelectedFrequency}
              discount={freq === t('devices.multiple')} />
          ))}
        </div>
      </div>
      <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {tiers.map((tier) => (
          <PricingCard t={t} key={tier.name} tier={tier} paymentFrequency={selectedFrequency} />
        ))}
      </div>
    </section>)
  );
}