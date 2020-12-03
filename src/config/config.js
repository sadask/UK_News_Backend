const result = require("dotenv").config(); //instatiate environment variables

if (result.error) {
  throw result.error
}

let CONFIG = {}; //Make this global to use all over the application

CONFIG.port = result.parsed.PORT || "3000";
CONFIG.APIKEY = result.parsed.API_KEY;

// Whitelist URLS.
CONFIG.whitelistUrls = ['http://localhost:3000/'];


module.exports = CONFIG;


