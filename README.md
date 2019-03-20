# anypoint-utils

[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/anypoint-utils.svg?style=flat-square
[npm-url]: https://npmjs.org/package/anypoint-utils
[downloads-image]: https://img.shields.io/npm/dm/anypoint-utils.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/anypoint-utils

This npm package provides utility methods that can be used within
your CI/CD environment and MuleSoft API release management strategy.
MuleSoft provides REST API resources for managing your Mule products
and hostings on Cloudhub or On-Premise. 

### Implementation

Functions implemented are shown here:

- getToken
- getOrganizationid
- getDefaultEnvironmentId
- getEnvironments
- getApplications
- getApis
- getEnvApis
- deleteApplication
- getApplicationId
- getVersionId
- getApiId
- getApi
- getExchangeAssets
- getExchangeAssetById
- getExchangeGroup
- createClientApplication
- createContractRequestingAccess
- createApiManagerInstance

### Installation
```$ npm install anypoint-utils --save```

### Example Code

``` javascript
// tmp.js

const AnypointUtils = require('./main');
require('console-stamp')(console, { pattern: 'dd/mm/yyyy HH:MM:ss.l' });

const s = new AnypointUtils('user', 'password');

async function main() {
  const authtoken = await s.getToken();
  console.info(`token: ${authtoken}`);

  const orgId = await AnypointUtils.getOrganizationId(authtoken);
  console.info(`orgId: ${orgId}`);

  const envId = await AnypointUtils.getDefaultEnvironmentId(authtoken);
  console.info(`envId: ${envId}`);
}

main();
```
