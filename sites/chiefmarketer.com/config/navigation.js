const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  { href: '/consumer-marketing', label: 'Consumer Marketing' },
  { href: '/b2b-marketing', label: 'B2B Marketing' },
  { href: '/martech', label: 'Martech' },
  { href: '/events-honors', label: 'Events & Honors' },
  { href: '/directories', label: 'Directories' },
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
  // contexts: [
  //   {
  //     when: ['/consumer-marketing'],
  //     primary: { topics },
  //     secondary: {
  //       items: [
  //         { href: '/consumer-marketing/acquisition', label: 'Acquisition' },
  //         { href: '/consumer-marketing/retention', label: 'Retention' },
  //         { href: '/consumer-marketing/data-analytics', label: 'Data Analytics' },
  //       ],
  //     },
  //   },
  //   {
  //     when: ['/b2b-marketing'],
  //     primary: { topics },
  //     secondary: {
  //       items: [
  //         { href: '/b2b-marketing/aquisition', label: 'Aquisition' },
  //         { href: '/b2b-marketing/retention', label: 'Retention' },
  //         { href: '/b2b-marketing/data-analytics', label: 'Data Analytics' },
  //       ],
  //     },
  //   },
  //   {
  //     when: ['/martech'],
  //     primary: { topics },
  //     secondary: {
  //       items: [
  //         { href: '/martech/cmo-corner', label: 'CMO Corner' },
  //         { href: '/martech/technology', label: 'Technology' },
  //         { href: '/martech/roi-metrics', label: 'ROI Metrics' },
  //         { href: '/martech/agencies', label: 'Agencies' },
  //         { href: '/martech/research', label: 'Research' },
  //       ],
  //     },
  //   },
  // ],

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
