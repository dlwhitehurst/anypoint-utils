# anypoint-utils

[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![Build Status](https://travis-ci.org/dlwhitehurst/anypoint-utils.svg?branch=master)](https://travis-ci.org/dlwhitehurst/anypoint-utils)
[npm-image]: https://img.shields.io/npm/v/anypoint-utils.svg?style=flat-square
[npm-url]: https://npmjs.org/package/anypoint-utils
[downloads-image]: https://img.shields.io/npm/dm/anypoint-utils.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/anypoint-utils

This npm package provides utility methods that can be used within
your CI/CD environment and MuleSoft API release management strategy.
MuleSoft provides REST API resources for managing your Mule products
and hostings on Cloudhub or On-Premise. 

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

  const stuff = await AnypointUtils.createApiManagerInstance(authtoken, 'emp-xapi', '1.0.0', orgId, 'Sandbox2');
  console.info(`This id is used for API auto-discovery. Id:${stuff}`);
}

main();
```
### Functions

These are the current functions that have been coded so far. A listing is given here with comments for your reference.

__getOrganizationId(token)__

This function takes an active bearer token and returns an organization id in the same form/syntax of the token.

__getDefaultEnvironmentId(token)__

This function returns the environment id that is set as default by the user that supplied the credentials for the bearer token (authenticated).

__getEnvironments(token)__

This function returns a JSON array of environments that are associated to the authenticated user.

__getApplications(token)__

This function returns a JSON array of client applications that are associated to the authenticated user.

__getApis(token)__

This function returns a JSON array of APIs (needs closer review).

__getEnvApis(token)__

This function returns a JSON array of "instanced" APIs that are associated to the authenticated user. 

__getExchangeGroups(token)__

This function returns the organization id and business group ids from Exchange that are associated to the authenticated user.

__getExchangeAssetById(token, groupId, assetId)__

This function returns an Exchange asset by giving the group id and the asset id (name).

__getExchangeAssets(token)__

This function returns all Exchange assets visible to the authenticated user. This function is not very useful. Needs a filter.

__createClientApplication(token, clientName)__

This function creates a new client application. This client application is a representational object of either an API or an external API consumer. The client application will be requesting access to registered (running) APIs. These API's should already be in Exchange as managed assets.

__deleteApplication(token, appId)__

This function will delete a client application (remember it's a representational object only) using a bearer token (authorization) and the client application's application id or primary key.

__createContractRequestingAccess(token, apiId, versionId, applicationId)__

This function creates a contract between the client application and the registered API it wants to consume. This contract supplies a client Id and a client Secret. These credentials are required before the client application can use or consume the API.

__getApplicationId(token, applicationName)__

This function gets the application id for client application name given, along with the bearer token (authorization) of course.

__getApiId(token, apiName)__

This function gets the API id for the API name or artifact id given.

__getApi(token, apiId)__

This function returns a JSON object representing the API for the API id given.

__getVersionId(token, apiId, productVersion)__

This function returns a version id for the API id and productVersion (e.g. v1) given.

__createApiManagerInstance(token, assetId, version, groupId)__

This function creates an unregistered API instance in API Manager. The function returns an API id for use with runtime API auto-discovery.

__createContractWithAsset(token, clientAppName, primeArtifactName)__

This function creates a contract between a client application and a registered API to be consumed. Refactoring is needed because this calls another function that really does the work.

__isClientApplicationByName(token, clientApplicationName)__

This function returns true if the named client application exists that's related to the authenticated user sending the bearer token (authorization) also.

__promoteApiCreatingNewInstance(token, organizationId, environmentId, originalApiId)__

This function essentially promotes an existing (registered) API into a new environment, specified by the environment id, and using the original API id. A new API id for runtime auto-discovery is returned by the function.

__getEnvironmentIdByName(token, environmentName)__

This function returns the id for the environment name given.

### Notes

As of version 1.0.18 there are still many additions needed to this, however they will be added as work 
requires them. The createContractWithAssetfunction requires refactoring. Updates will be noted with future
releases of this package. 
