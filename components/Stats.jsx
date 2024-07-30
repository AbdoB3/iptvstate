'use client'
import { useEffect, useRef } from 'react';

export default function Stats() {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);
  const isVisible = useRef(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting && !isVisible.current) {
        isVisible.current = true;
        animateCounters();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateCounters = () => {
    statsRef.current.forEach((stat) => {
      const target = +stat.dataset.target;
      const increment = target / 200; // Adjust this value for speed
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          stat.innerText = Math.ceil(current) + '+';
          requestAnimationFrame(updateCounter);
        } else {
          stat.innerText = target + '+';
        }
      };

      updateCounter();
    });
  };

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by IPTV Enthusiasts</h2>
          <p className="mt-4 text-gray-500 sm:text-xl">
          Providing seamless streaming experiences with a vast array of channels and on-demand content.
          </p>
        </div>
        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Clients</dt>
              <dd ref={(el) => statsRef.current[0] = el} data-target="2900" className="text-4xl font-extrabold text-[#EF4D48] md:text-5xl">0+</dd>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Channels</dt>
              <dd ref={(el) => statsRef.current[1] = el} data-target="20500" className="text-4xl font-extrabold text-[#EF4D48] md:text-5xl">0+</dd>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Films & Series</dt>
              <dd ref={(el) => statsRef.current[2] = el} data-target="100000" className="text-4xl font-extrabold text-[#EF4D48] md:text-5xl">0+</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
