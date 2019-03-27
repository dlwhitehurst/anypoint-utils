// tmp.js

const AnypointUtils = require('./main');
require('console-stamp')(console, { pattern: 'dd/mm/yyyy HH:MM:ss.l' });

const s = new AnypointUtils('dlw-ms3-2', 'Patty4Me2Cherish');

async function main() {
  const authtoken = await s.getToken();
  console.info(`token: ${authtoken}`);

  // const orgId = await AnypointUtils.getOrganizationId(authtoken);
  // console.info(`orgId: ${orgId}`);

  // const stuff = await AnypointUtils.createApiManagerInstance(authtoken, 'emp-xapi', '1.0.0',
  // orgId, 'Sandbox2');
  // console.info(`This id is used for API auto-discovery. Id:${stuff}`);

  // create a client app for test
  await AnypointUtils.createClientApplication(authtoken, 'emp-xapi-int');

  const data = await AnypointUtils.createContractWithAsset(authtoken, 'emp-xapi-int', 'emp-sapi');
  console.log(data);
}

main();
