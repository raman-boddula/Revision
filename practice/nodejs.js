const http = require("http");
const fs = require("fs");
const host = "localhost";
const PORT = 2345;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);
  if (req.url == "/") {
    res.end("<h1>Welcome to Homepage  </h1><button>Login</button>");
  } else if (req.url == "/about") {
    res.end("<h1>About Page</h1>");
  } else if (req.url == "/services") {
    res.end("<h1>Services Page</h1>");
  } else if (req.url == "/contact") {
    res.end("<h1>Contact Page</h1>");
  }
});
server.listen(PORT, host, () => {
  console.log(`listening on http://${host}:${PORT}/`);
});
