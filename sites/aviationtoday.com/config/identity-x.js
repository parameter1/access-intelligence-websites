const configureIdentityX = require('@access-intelligence/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: '62a20b3d6ca606e3a507c28b',
  requiredServerFields: [
    'givenName',
    'familyName',
    'countryCode',
    'postalCode',
  ],
});
