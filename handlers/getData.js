const fs = require("fs");
const path=  require("path");
function getDataHandler(request, response) {
 // console.log("Test: in getDataHandler");
const filePath = path.join(__dirname,"..", "states.json");
fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Not found</h1>");
    } else {
      response.writeHead(200, { "content-type": "application/json" });
      response.end(file);
    }
  });
}
module.exports = getDataHandler;