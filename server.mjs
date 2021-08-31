

// const http = require("http");
// const server = http.createServer();




//const PORT = 3000;
// const server = createServer((request,response)=>{
    /* stringify */
    // response.statusCode = 200;
    // response.setHeader("content-type", "text/plain");
    // response.end(JSON.stringify({ message: "Hello" }));

    /** log the request  */
    // response.statusCode = 200;
    // response.setHeader("content-type", "text/html");
    // console.log(request.method, request.url);
    // console.log("===========================================");
    //  response.end("<h1>Hello</h1>");

    /** writeHead*/
    // response.writeHead(200, { "content-type": "text/html" }); // istead of typing setHeader for each header
    // response.end("<h1>Hello</h1>");

/* redirect, 404  */
//     const url = request.url;
//   if (url === "/") {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.end("<h1>Hello</h1>");
//   } else if (url === "/goodbye") {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.end("<h1>Goodbye</h1>");
//   }else if (url === "/hello") {
//     response.writeHead(302, { location: "/" });
//     response.end();
// }else {
//     response.writeHead(404, { "content-type": "text/html" });
//     response.end("<h1>Not found</h1>");
//   }

/** Modularisation */
// const url = request.url;
// if (url === "/") {
//     homeHandler(request, response);
//   } else if (url === "/goodbye") {
//     goodbyeHandler(request, response);
//   } else {
//     missingHandler(request, response);
//   }

//});
const PORT = process.env.PORT || 3000;
import { createServer } from "http";
import {router} from "./router.mjs";
const server = createServer(router);
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));