// tmp.js

const AnypointUtils = require('./main');
require('console-stamp')(console, { pattern: 'dd/mm/yyyy HH:MM:ss.l' });

const s = new AnypointUtils('dlw-ms3-2', 'Leche4Moi2Consume');

async function main() {
  const authtoken = await s.getToken();
  console.info(`token: ${authtoken}`);

  const orgId = await AnypointUtils.getOrganizationId(authtoken);
  console.info(`orgId: ${orgId}`);

  const envId = await AnypointUtils.getDefaultEnvironmentId(authtoken);
  console.info(`envId: ${envId}`);
}

main();
