/**
 * Anypoint Platform Javascript Library
 *
 * This module is used to provide constants for the Anypoint Platform Javascript
 * Library using NodeJS.
 *
 * @link https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/
 * @file   constants.js
 * @author David L. Whitehurst.
 * @since  1.0.15
 */

// constants.js

const clientAppPostPart1 = '{"redirectUri": ["http://localhost"], "apiEndpoints": false, "name":"';
const clientAppPostPart2 = '","description": "Client API Application", "url":"http://localhost/api/';
const clientAppPostPart3 = '/v1"}';

module.exports = {
  clientAppPostPart1,
  clientAppPostPart2,
  clientAppPostPart3,
};
