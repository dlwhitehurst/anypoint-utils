// tmp.js
"use strict";

const anypoint_utils = require('./main');
const utils = new anypoint_utils('dlw-ms3-2','Leche4Moi2Consume');

async function main() {
  const bearer = await utils.getToken();
  console.log(bearer);
}


main();
