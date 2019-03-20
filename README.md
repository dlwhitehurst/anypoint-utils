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

This package is under construction. Two functions are provided here
for testing. These are:

- getToken()
- getOrganizationId(token)

Example usage code is provided here for your reference.

```
// index.js
"use strict";

const anypoint_utils = require('anypoint-utils');
const utils = new anypoint_utils('anypointuser','somepassword');

async function main() {
  const authToken = await utils.getToken();
  console.log('token: ' + authToken);

  const orgId = await utils.getOrganizationId(authToken);
  console.log('orgId: ' + orgId);
}


main();
```
