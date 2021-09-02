const types = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    jpg:"image/jpg",
    ico:"image/x-icon"
  };
  const fs = require("fs");
  const path = require("path");
  function publicHandler(request, response) { 
 //   console.log("Test: in publicHandler");
   // console.log("our request: ",request.url);
    const urlArray = request.url.split("."); // e.g. "/style.css" -> ["/style", "css"]
    const extension = urlArray[1]; // e.g. "css"
    const type = types[extension]; // e.g. "text/css"
    const filePath = path.join(__dirname, "..", request.url);
    console.log("dirname: ",__dirname);
    console.log("request.url: ",request.url);
    fs.readFile(filePath, (error, file) => {
      if (error) {
        response.writeHead(404, { "content-type": "text/html" });
        response.end("<h1>Not found</h1>");
      } else {
        response.writeHead(200, { "content-type": type });
        response.end(file);
      }
    });
  }  

  module.exports = publicHandler;