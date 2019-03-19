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
 * @file   apiService.js
 * @author David L. Whitehurst.
 * @since  1.0.0
 */

/* jshint strict:false */

const request = require('request-promise');

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

async function getToken(username, password) {
  const posting = `{ "username": ${versionId},"password":${apiId} }`;
  const options = {
    method: 'POST',
    uri: 'https://anypoint.mulesoft.com/accounts/login',
    body: JSON.parse(posting),
    headers: { 'Content-Type': 'application/json' },
    json: true,
  };

  const data = await request(options)
    .then(response => response)
    .catch(err => err);

  return data.access_token;
}


/**
 * Node Module Exports
 */

module.exports = {
  getToken,
};
