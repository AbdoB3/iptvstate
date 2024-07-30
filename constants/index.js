// NAVIGATION
export const getNavLinks = (t) => [
  { href: '/', key: 'home', label: t('home') },
  { href: `/${t('about')}`, key: 'about', label: t('about') },
  { href: `/${t('services')}`, key: 'services', label: t('services') },
  { href: `/${t('pricing')}`, key: 'pricing', label: t('pricing') },
  { href: `/${t('contact')}`, key: 'contact_us', label: t('contact') },
];
  
  // CAMP SECTION
  export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
  ];
  
  // FEATURES SECTION
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About Hilink',
        'Press Releases',
        'Environment',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    {
      title: 'Our Community',
      links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890' },
      { label: 'Email Officer', value: 'hilink@akinthil.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };

  export const CHANNELS = [
    {
      img: "https://res.cloudinary.com/dyzdrbivf/image/upload/v1719484606/1_iqhnll.png",
      name: "Bein sport",
    },
    {
      img: "https://res.cloudinary.com/dyzdrbivf/image/upload/v1719484606/2_d7ihd3.png",
      name: "RMC Sport", 
    },
    {
      img: "https://res.cloudinary.com/dyzdrbivf/image/upload/v1719484607/3_vwz6xq.png",
      name: "Canal plus",
    },
    {
      img: "https://res.cloudinary.com/dyzdrbivf/image/upload/v1719484607/4_xfgue4.png",
      name: "Sky sport",
    }
  ];

  export const countries = [
    { name: 'DE', code: 'de', flag: 'https://www.worldometers.info/img/flags/gm-flag.gif' },
    { name: 'EN', code: 'en', flag: 'https://www.worldometers.info/img/flags/us-flag.gif' },
    // Add more countries as needed
];
  
  