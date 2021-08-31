// export function submitHandler(request, response) {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.end("<h1>Thank you for submitting</h1>");
//   }

export function submitHandler(request, response) {
    let body = "";
    // callback runs every time the stream has the next bit of data
    request.on("data", chunk => {
      body += chunk;
    });
    // callback runs when request finishes and we have all the data
    request.on("end", () => {
      const data = new URLSearchParams(body);
      const name = data.get("name");
      console.log(data); // oli
  //    console.log(body); // we should have the whole request body now
      response.writeHead(200, { "content-type": "text/html" });
      response.end(`<h1>Thank you ${name}</h1>\n`);
    });
    request.on("error", error => { // When the hell does this happen?!!?!
      console.log(error + "noooo");
    });
  }