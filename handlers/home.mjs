function homeHandler(request, response) {
    response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>Hello</h1>");
  }
   function goodbyeHandler(request, response) {
    response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>GoodBye</h1>");
  }
   function missingHandler(request, response) {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>Not found</h1>");
  }
  function redirectHandler(request,response){
    response.writeHead(404, { location: "/" });
    response.end();
  }

  export {homeHandler,goodbyeHandler,missingHandler,redirectHandler};
  
