const PORT = process.env.PORT || 3000;
const http = require("http");
const router = require("./router");

const server = http.createServer(router);
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

