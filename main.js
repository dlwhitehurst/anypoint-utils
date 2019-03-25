/**
 *  Anypoint Platform Service Module
 *
 * Copyright 2019 David L. Whitehurst
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * This module is used to perform Anypoint Platform API calls from a CI/CD Server
 * environment using NodeJS.
 *
 * @link   https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/
 * @file   main.js
 * @author David L. Whitehurst.
 * @since  1.0.0
 */

const request = require('request-promise');
const constants = require('./constants.js');

class AnypointUtils {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function makes an HTTP POST to:
   *    https://anypoint.mulesoft.com/accounts/login
   *
   * @author David L. Whitehurst.
   * @since  1.0.0
   *
   * @return {Promise} - returns a Promise, but resolves to a string
   * e.g. 5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb.
   */

  async getToken() {
    const options = {
      method: 'POST',
      uri: 'https://anypoint.mulesoft.com/accounts/login',
      body: { username: this.username, password: this.password },
      headers: { 'Content-Type': 'application/json' },
      json: true,
    };

    const data = await request(options)
      .then(response => response)
      .catch(err => err);

    return data.access_token;
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function makes an HTTP GET to:
   *    https://anypoint.mulesoft.com/accounts/api/me
   *
   * @author David L. Whitehurst.
   * @since  1.0.0
   *
   * @return {Promise} - returns a Promise, but resolves to a string
   * e.g. c72db99c-a5a7-4c89-9d53-66512523f678
   */

  static async getOrganizationId(token) {
    const options = {
      method: 'GET',
      uri: 'https://anypoint.mulesoft.com/accounts/api/me',
      headers: { Authorization: `bearer ${token}` },
      json: true,
    };

    const data = await request(options)
      .then(response => response)
      .catch(err => err);

    return data.user.organizationId;
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function makes an HTTP GET to:
   *    https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/{orgId}/environments/default
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return {Promise} - returns a Promise, but resolves to a string
   * e.g. ae58bace-7f16-4804-a53f-20acefe7d6ad.
   */

  static async getDefaultEnvironmentId(token) {
    const orgId = await AnypointUtils.getOrganizationId(token);
    const options = {
      method: 'GET',
      uri: `https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/${
        orgId}/environments/default`,
      headers: { Authorization: `bearer ${token}` },
      json: true,
    };

    const data = await request(options)
      .then(response => response)
      .catch(err => err);

    return data.id;
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function makes an HTTP GET to:
   *    https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/{orgId}/environments
   *
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return {Promise} - returns a Promise, but resolves to JSON array of environments.
   */

  static async getEnvironments(token) {
    const orgId = await AnypointUtils.getOrganizationId(token);
    const options = {
      method: 'GET',
      uri: `https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/${orgId}/environments`,
      headers: { Authorization: `bearer ${token}` },
      json: true,
    };

    const data = await request(options)
      .then(response => response)
      .catch(err => err);

    return data;
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function makes an HTTP GET to:
   *    https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/{orgId}/applications
   *
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return {Promise} - returns a Promise, but resolves to a JSON array of applications.
   */

  static async getApplications(token) {
    const orgId = await AnypointUtils.getOrganizationId(token);
    const options = {
      method: 'GET',
      uri: `https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/${orgId}/applications`,
      headers: { Authorization: `bearer ${token}` },
      json: true,
    };

    return request(options)
      .then(response => response)
      .catch(err => err);
  }


  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function makes an HTTP GET to:
   *    https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/{orgId}/apis
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return {Promise} - returns a Promise, but resolves to a JSON array of APIs.
   */

  static async getApis(token) {
    const orgId = await AnypointUtils.getOrganizationId(token);
    const options = {
      method: 'GET',
      uri: `https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/${
        orgId}/apis`,
      headers: { Authorization: `bearer ${token}` },
      json: true,
    };

    return request(options)
      .then(response => response)
      .catch(err => err);
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function makes an HTTP GET to:
   *    https://anypoint.mulesoft.com/apimanager/api/v1/organizations/{orgId}/environments/{envId}/apis
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return {Promise} - returns a Promise, but resolves to a JSON array of APIs.
   */

  static async getEnvApis(token) {
    const orgId = await AnypointUtils.getOrganizationId(token);
    const envId = await AnypointUtils.getDefaultEnvironmentId(token);
    const options = {
      method: 'GET',
      uri: `https://anypoint.mulesoft.com/apimanager/api/v1/organizations/${
        orgId}/environments/${envId}/apis`,
      headers: { Authorization: `bearer ${token}` },
      json: true,
    };

    return request(options)
      .then(response => response)
      .catch(err => err);
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function gets an array of business groups on Exchange.
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return {Promise} - returns a Promise, but resolves to a JSON array of business groups.
   */

  static async getExchangeGroups(token) {
    const orgId = await AnypointUtils.getOrganizationId(token);
    const options = {
      method: 'GET',
      uri: `https://anypoint.mulesoft.com/exchange/api/v1/organizations/${
        orgId}/groups`,
      headers: { Authorization: `bearer ${token}` },
      json: true,
    };

    return request(options)
      .then(response => response)
      .catch(err => err);
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function gets an Exchange asset using its groupId and assetId (name).
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return {Promise} - returns a Promise, but resolves to a JSON object for the asset.
   */

  static async getExchangeAssetById(token, groupId, assetId) {
    const options = {
      method: 'GET',
      uri: `https://anypoint.mulesoft.com/exchange/api/v1/assets/${groupId}/${assetId}`,
      headers: { Authorization: `bearer ${token}` },
      json: true,
    };

    return request(options)
      .then(response => response)
      .catch(err => err);
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function gets a huge array of Exchange assets. Query parameters could filter the
   * size of this array.
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return {Promise} - returns a Promise, but resolves to a JSON array of assets.
   */

  static async getExchangeAssets(token) {
    const options = {
      method: 'GET',
      uri: 'https://anypoint.mulesoft.com/exchange/api/v1/assets/',
      headers: { Authorization: `bearer ${token}` },
      json: true,
    };

    return request(options)
      .then(response => response)
      .catch(err => err);
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function makes an HTTP POST to:
   *    https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/{orgId}/applications
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return {Promise} - returns a Promise, but resolves to a JSON object, an application.
   */

  static async createClientApplication(token, clientName) {
    const posting = constants.clientAppPostPart1
      + clientName
      + constants.clientAppPostPart2
      + clientName
      + constants.clientAppPostPart3;
    const orgId = await AnypointUtils.getOrganizationId(token);
    const options = {
      method: 'POST',
      uri: `https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/${
        orgId}/applications`,
      body: JSON.parse(posting),
      headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
      json: true,
    };

    return request(options)
      .then(response => response)
      .catch(err => err);
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function makes an HTTP DELETE to:
   *    https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/{orgId}/
   *    applications/{appId}
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return {Promise} - returns a Promise, but resolves to undefined body, status 204 No Content.
   */

  static async deleteApplication(token, appId) {
    const orgId = await AnypointUtils.getOrganizationId(token);
    const options = {
      method: 'DELETE',
      uri: `https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/${
        orgId}/applications/${appId}`,
      headers: { Authorization: `bearer ${token}` },
      resolveWithFullResponse: true,
    };

    return request(options)
      .then(response => response)
      .catch(err => err);
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function creates a contract between a client application and a dependent API asset.
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return Promise - returns a Promise, but resolves to an array of credentials.
   */

  static async createContractRequestingAccess(token, apiId, versionId, applicationId) {
    const posting = `{"apiVersionId": ${versionId},"applicationId":${apiId},"partyId": "","partyName": "", "requestedTierId":null, "acceptedTerms": false}`;
    const orgId = await AnypointUtils.getOrganizationId(token);
    const options = {
      method: 'POST',
      uri: `https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/${
        orgId}/applications/${applicationId}/contracts`,
      body: JSON.parse(posting),
      headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
      json: true,
    };

    const data = await request(options)
      .then(response => response)
      .catch(err => err);

    return [data.application.clientId, data.application.clientSecret];
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function makes a call to local function getApplications to obtain an array of client
   * applications. The id is returned from the array element matching the applicationName.
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return Promise - returns a Promise (pending resolve() or reject()).
   */

  static async getApplicationId(token, applicationName) { // e.g. test-client
    let appId;
    const data = await AnypointUtils.getApplications(token);
    for (let i = 0; i < data.applications.length; i += 1) {
      const obj = data.applications[i];
      if (obj.name.valueOf() === applicationName) {
        appId = obj.id;
      }
    }
    return appId;
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function makes a call to local function getEnvApis to obtain an array of API assets.
   * The id is returned from the array element matching the apiName.
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return {Promise} - returns a Promise (pending resolve() or reject()).
   */

  static async getApiId(token, apiName) {
    let apiId;
    const data = await AnypointUtils.getEnvApis(token);
    for (let i = 0; i < data.assets.length; i += 1) {
      const obj = data.assets[i];
      if (obj.assetId.valueOf() === apiName) {
        apiId = obj.id;
      }
    }

    return apiId;
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function makes an HTTP GET to:
   *    https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/{orgId}/
   *    apis/{apiId}
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return Promise - returns a Promise (pending resolve() or reject()).
   */

  static async getApi(token, apiId) {
    const orgId = await AnypointUtils.getOrganizationId(token);
    const options = {
      method: 'GET',
      uri: `https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/${orgId}/apis/${apiId}`,
      headers: { Authorization: `bearer ${token}` },
      json: true,
    };

    return request(options)
      .then(response => response)
      .catch(err => err);
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function makes a call to local method getApi for an array of versions for the API
   * given. The function returns the id of the version specified by productVersion.
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return Promise - returns a Promise (pending resolve() or reject()).
   */

  static async getVersionId(token, apiId, productVersion) {
    let versionId;
    const data = await AnypointUtils.getApi(token, apiId);
    for (let i = 0; i < data.versions.length; i += 1) {
      const obj = data.versions[i];
      if (obj.productVersion.valueOf() === productVersion) {
        versionId = obj.id;
      }
    }

    return versionId;
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function makes a call to the API Manager API to POST a request to create a new API Manager
   * instance and return the appId. This new instance is created in the environment specified by
   * name in the argument.
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return Promise - returns a Promise, resolves to a string id.
   */

  static async createApiManagerInstance(token, assetId, version, groupId, environmentName) {
    const posting = `{"endpoint": { "type": "rest-api", "uri": "http://google.com", "proxyUri": null, "muleVersion4OrAbove": true, "isCloudHub": false }, "instanceLabel": "${assetId}","spec": { "assetId": "${assetId}", "version": "${version}", "groupId": "${groupId}" }}`;
    const orgId = await AnypointUtils.getOrganizationId(token);
    const envId = await AnypointUtils.getEnvironmentIdByName(token, environmentName);
    const options = {
      method: 'POST',
      uri: `https://anypoint.mulesoft.com/apimanager/api/v1/organizations/${orgId}/environments/${envId}/apis`,
      body: JSON.parse(posting),
      headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
      json: true,
    };

    const data = await request(options)
      .then(response => response)
      .catch(err => err);

    return data.id;
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function assumes that a client application has already been created. The function
   * will create a contract between the client application and the dependency asset. The
   * function will return an array of credentials i.e. clientId and clientSecret
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return {Promise} - returns a Promise but resolves to an array of credential values.
   */

  static async createContractWithAsset(token, clientAppName, primeArtifactName) {
    const appId = await AnypointUtils.getApplicationId(token, clientAppName);
    const apiId = await AnypointUtils.getApiId(token, primeArtifactName);
    const versionId = await AnypointUtils.getVersionId(token, apiId, 'v1');
    return AnypointUtils.createContractRequestingAccess(token, apiId, versionId, appId);
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function is used to get a boolean (true/false), or true if client application
   * exists by the name given in the arguments.
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return {Promise} - returns a Promise but resolves to an array of credential values.
   */

  static async isClientApplicationByName(token, clientApplicationName) {
    let retVal = false;
    const data = await AnypointUtils.getApplications(token);
    for (let i = 0; i < data.applications.length; i += 1) {
      const obj = data.applications[i];
      if (obj.name.valueOf() === clientApplicationName) {
        retVal = true;
      }
    }
    return retVal;
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function is used to get a boolean (true/false), or true if client application
   * exists by the name given in the arguments.
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return {Promise} - returns a Promise but resolves to a JSON object representing the instance.
   */

  static async promoteApiCreatingNewInstance(token, organizationId, environmentId, originalApiId) {
    const posting = `{"instanceLabel": "emp-sapi (promoted)", "promote": { "originApiId": ${originalApiId}, 
    "policies": { "allEntities": true }, "tiers": { "allEntities": true }, "alerts": { "allEntities": true }}}`;
    const options = {
      method: 'POST',
      uri: `https://anypoint.mulesoft.com/apimanager/api/v1/organizations/${organizationId}/environments/${environmentId}/apis`,
      body: JSON.parse(posting),
      headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
      json: true,
    };

    return request(options)
      .then(response => response)
      .catch(err => err);
  }

  /**
   * This asynchronous function is used to call the Anypoint Platform API for administration
   * and management.
   *
   * The function is used to get an environment id for the environment name given.
   *
   * @author David L. Whitehurst.
   * @since  1.0.15
   *
   * @return {Promise} - returns a Promise but resolves to a JSON object representing the instance.
   */

  static async getEnvironmentIdByName(token, environmentName) {
    let retVal;
    const data = await AnypointUtils.getEnvironments(token);
    console.log(data);
    for (let i = 0; i < data.length; i += 1) {
      const obj = data[i];
      if (obj.name.valueOf() === environmentName) {
        retVal = obj.id;
      }
    }
    return retVal;
  }
}

module.exports = AnypointUtils;
