// os module
const os = require('os');

// method to get user information
const userInfo = os.userInfo();
console.log(userInfo);
// method to return system running uptime in seconds
console.log(`the system is running from prev ${os.uptime()} seconds`)