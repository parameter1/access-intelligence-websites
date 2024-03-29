const GAMConfiguration = require('@parameter1/base-cms-marko-web-gam/config');

module.exports = ({
  accountId = '6407152',
  basePath,
} = {}) => {
  const config = new GAMConfiguration(accountId, { basePath });

  config.lazyLoad = {
    enabled: true, // set to true to enable lazy loading
    fetchMarginPercent: 100, // fetch ad when one viewport away
    renderMarginPercent: 50, // render ad when half viewport away
    mobileScaling: 2, // double these on mobile
  };

  config
    .setTemplate('LEADERBOARD', {
      size: [
        [970, 90],
        [300, 100],
        [300, 250],
        [320, 50],
        [265, 149], // Featured Pushdown / Fluid Banner
      ],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 250], [265, 149]] },
        { viewport: [750, 0], size: [[265, 149]] },
        { viewport: [300, 0], size: [[300, 250], [265, 149]] },
      ],
    })
    .setTemplate('ROTATION', {
      size: [[300, 250]],
      sizeMapping: [
        { viewport: [300, 0], size: [300, 250] },
      ],
    })
    .setTemplate('INLINE-CONTENT-MOBILE', {
      size: [300, 250],
      sizeMapping: [
        { viewport: [300, 0], size: [300, 250] },
      ],
    })
    .setTemplate('INLINE-CONTENT-DESKTOP', {
      size: [300, 250],
      sizeMapping: [
        { viewport: [300, 0], size: [300, 250] },
      ],
    });

  return config;
};
