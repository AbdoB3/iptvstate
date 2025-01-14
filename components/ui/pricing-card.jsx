"use client";
import { BadgeCheck, ArrowRight } from "lucide-react"
import NumberFlow from "@number-flow/react"


import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function PricingCard({
  t,
  tier,
  paymentFrequency
}) {
  const price = tier.price[paymentFrequency]
  const year = tier.months && tier.months[paymentFrequency]
  const isHighlighted = tier.highlighted
  const isPopular = tier.popular
  // console.log("object ", typeof year === "number");
  return (
    (<Card
      className={cn("relative flex flex-col gap-8 overflow-hidden p-6", isHighlighted
        ? "bg-foreground text-background"
        : "bg-background text-foreground", isPopular && "ring-1 ring-[#EF4D48] border-[#EF4D48]")}>
      {isHighlighted && <HighlightedBackground />}
      {isPopular && <PopularBackground />}
      <h2 className="flex items-center gap-3 text-xl font-medium capitalize">
        {
          <div className="flex items-center -mb-4 gap-2">
            <NumberFlow
              format={{
                style: "decimal",
                trailingZeroDisplay: "stripIfInteger",
              }}
              value={year}
            />
            <span>{year < 2 ? tier.name : t('months')}</span>
          </div>

        }
        {isPopular && (
          <Badge variant="outline" className="mt-1 z-10">
            {t('popular')}
          </Badge>
        )}
      </h2>
      <div className="flex items-center gap-2 capitalize">

        {paymentFrequency === t("devices.multiple") ? <Badge variant="destructive" className="mt-1 z-10">
          {tier.devices}
        </Badge> : ""}

        {paymentFrequency === t("devices.multiple") ? <Badge variant="default" className="mt-1 z-10">
          {tier.bonus}
        </Badge> : ""}
      </div>

      <div className="relative h-12">
        {typeof price === "number" ? (
          <>
            <NumberFlow
              format={{
                style: "currency",
                currency: "EUR",
                trailingZeroDisplay: "stripIfInteger",
              }}
              value={price}
              className="text-4xl font-medium" />
            <p className="-mt-2 text-xs text-muted-foreground">
              {t('guarantee')}
            </p>
          </>
        ) : (
          <h1 className="text-4xl font-medium">{price}</h1>
        )}
      </div>
      <div className="flex-1 space-y-2">

        <ul className="space-y-2">
          {tier.features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                "flex items-center gap-2 text-sm font-medium",
                isHighlighted ? "text-background" : "text-muted-foreground"
              )}>
              <BadgeCheck className="h-4 w-4" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Button variant="default" className="w-full">
        {tier.cta}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Card>)
  );
}

const HighlightedBackground = () => (
  <div
    className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
)

const PopularBackground = () => (
  <div
    className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] pointer-events-none" />
)