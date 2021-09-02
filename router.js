const homeHandler = require("./handlers/home.js");
const publicHandler = require("./handlers/public.js");
const missingHandler = require("./handlers/missing.js");
const getDataHandler = require("./handlers/getData.js");

 function router(request, response) {
  // console.log("in Router");
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("public")) {
 
    publicHandler(request, response);
  } else if(url==="/data"){
      getDataHandler(request,response);
  }
  else {
    missingHandler(request, response);
  }
}

module.exports = router;