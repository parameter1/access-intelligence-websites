const configureIdentityX = require('@access-intelligence/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: '62a2061f39347c4c60862969',
  requiredServerFields: [
    'givenName',
    'familyName',
    'countryCode',
    'postalCode',
  ],
});
