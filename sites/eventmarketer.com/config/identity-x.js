const configureIdentityX = require('@access-intelligence/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: '62a20b7a6ca6062a1307c290',
  requiredServerFields: [
    'givenName',
    'familyName',
    'countryCode',
    'postalCode',
  ],
});
