const navigation = require('./navigation');
const contentMeter = require('./content-meter');
const gam = require('./gam');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const newsletter = require('./newsletter');
const search = require('./search');

module.exports = {
  navigation,
  contentMeter,
  gam,
  nativeX,
  identityX,
  idxNavItems: {
    enable: process.env.IDX_NAV_ENABLE || false,
  },
  newsletter,
  search,
  company: 'Access Intelligence',
  p1events: {
    tenant: 'accessintel_all',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'cynopsis.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://p1-cms-assets.imgix.net/files/base/accessintel/all/image/static/cynopsis/cynopsis-logo.png?h=50&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/accessintel/all/image/static/cynopsis/cynopsis-logo.png?h=50&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/accessintel/all/image/static/cynopsis/cynopsis-logo.png?h=50&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/accessintel/all/image/static/cynopsis/cynopsis-logo.png?h=50&auto=format,compress&dpr=2 2x',
      ],
    },
    corporate: {
      alt: 'Access Intelligence Logo',
      href: 'https://www.accessintelligence.com',
      src: 'https://p1-cms-assets.imgix.net/files/base/accessintel/all/image/static/ai-logo.svg?w=200&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/accessintel/all/image/static/ai-logo.svg?w=200&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/CynopsisMedia/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/CynopsisMedia', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/cynopsis-media/', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/cynopsismedia/', target: '_blank' },
  ],
  podcastLinks: [],
  gcse: {
    id: 'NOT_SET',
  },
  gtm: {
    containerId: 'NOT_SET',
  },
  // wufoo: {
  //   userName: 'accessintel',
  // },
  inquiry: {
    enabled: false,
    directSend: false,
    sendTo: 'support@parameter1.com',
    sendFrom: 'Cynopsis.com <noreply@parameter1.com>',
    logo: 'https://p1-cms-assets.imgix.net/files/base/accessintel/all/image/static/cynopsis/cynopsis-logo.png?h=45&auto=format,compress&bg=000000&pad=5',
    bgColor: '#000000',
  },
  setSearchSortFieldToScore: true,
};
