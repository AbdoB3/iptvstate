import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import WordPullUp from "../ui/word-pull-up";
import { useTranslations } from 'next-intl';


export default function Feedback() {
  const t = useTranslations('Feedbacks');

  const reviews = [
    {
      name: "Max",
      username: "@max",
      body: t('reviews.first.body'),
      img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Sophia",
      username: "@sophia",
      body: t('reviews.second.body'),
      img: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Lukas",
      username: "@lukas",
      body: t('reviews.third.body'),
      img: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Anna",
      username: "@anna",
      body: t('reviews.fourth.body'),
      img: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Leon",
      username: "@leon",
      body: t('reviews.fifth.body'),
      img: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Emma",
      username: "@emma",
      body: t('reviews.sixth.body'),
      img: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];



  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const ReviewCard = ({
    img,
    name,
    username,
    body,
  }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  };

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <WordPullUp
        className="text-3xl lg:text-5xl sm:text-4xl mx-4 font-bold mt-1"
      >
        {t('title')}
      </WordPullUp>
      <p className="text-muted-foreground mx-10 lg:mx-4 mt-2 mb-4">
        {t('description')}
      </p>

      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>

  );
}
