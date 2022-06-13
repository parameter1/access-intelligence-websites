const configureIdentityX = require('@access-intelligence/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: '62a20aad39347c4830862983',
  requiredServerFields: [
    'givenName',
    'familyName',
    'countryCode',
    'postalCode',
  ],
});
