const http = require("http");
const customModule = require("./src/utils/customModule");

const PORT = 8300;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`Ana Səhifə
        <h1>${customModule.palindrome("amma")}</h1>
        <h1>${customModule.fibonacci(14)}</h1>
    `);
  } else if (req.url === "/contact" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Contact");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Haqqımızda");
  } else {
    res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ status: "Failed", message: "Not FOUND" }));
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
