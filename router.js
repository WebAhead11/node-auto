const homeHandler = require("./handlers/home.js");
const publicHandler = require("./handlers/public.js");
const missingHandler = require("./handlers/missing.js");

 function router(request, response) {
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("public")) {
    console.log("url.includes('public')");
    publicHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;