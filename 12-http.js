const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("Welcome to our about page");
  }

  res.end(`<h1>Oops no such page</h1> <a href="/">Back to home page</a>`);
});

server.listen(8080);
