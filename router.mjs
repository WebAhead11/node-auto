import {homeHandler,goodbyeHandler,missingHandler,redirectHandler} from "./handlers/home.mjs";
import {submitHandler} from "./handlers/submit.mjs";

export const router = ((request,response)=>{
const url = request.url;
const method = request.method;
if (url === "/") {
    homeHandler(request, response);
  } else if (url === "/goodbye") {
    goodbyeHandler(request, response);
  }else if(url ==='/home'){
    redirectHandler(request,response);
  }
  else if (method === "POST" && url === "/submit") {
    console.log("we postin my man");
    submitHandler(request, response);
  } else {
    missingHandler(request, response);
  }

});