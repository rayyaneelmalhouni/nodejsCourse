const os = require("os");

const user = os.userInfo();

console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totleMem: os.totalmem(),
  greeMem: os.freemem(),
};

console.log(currentOS);
