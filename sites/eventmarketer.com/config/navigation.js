const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  { href: '/b-to-c-events', label: 'B-to-C Events' },
  { href: '/lists', label: 'Lists' },
  { href: '/b-to-b-events', label: 'B-to-B Events' },
  { href: '/awards', label: 'Awards' },
  { href: '/our-events', label: 'Our Events' },
];

const resources = [];

const utilities = [
  { href: '/page/advertise', label: 'Advertise' },
  { href: '/page/contact-us', label: 'Contact Us' },
];

const mobileMenu = {
  user: [],
  primary: [
    ...topics,
  ],
  secondary: [
    ...resources,
    subscribe,
    { href: '/page/advertise', label: 'Advertise' },
  ],
};

const desktopMenu = {
  about: [...utilities],
  user: [],
  sections: [
    ...topics,
  ],
};

module.exports = {
  type: 'navbar2',
  promos: [
    {
      title: subscribe.label,
      callToAction: subscribe.label,
      link: subscribe.href,
    },
  ],
  desktopMenu,
  mobileMenu,
  topics,
  primary: {
    items: topics,
  },
  secondary: {
    items: [],
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      privacyPolicy,
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: topics.primary,
    more: [
      ...utilities,
    ],
  },
};
