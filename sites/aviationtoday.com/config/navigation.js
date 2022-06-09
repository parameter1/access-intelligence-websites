const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  { href: '/air-taxi', label: 'Air Taxi' },
  { href: '/commercial', label: 'Commercial' },
  { href: '/business-and-ga', label: 'Business & GA' },
  { href: '/atm-modernization', label: 'ATM Modernization' },
  { href: '/regulation', label: 'Regulation' },
  { href: '/connectivity', label: 'Connectivity' },
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
