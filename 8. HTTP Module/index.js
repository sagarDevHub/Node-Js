import http from "http";

// Creating server
const server = http.createServer((req, res) => {
  //   console.log(req);
  res.setHeader("Content-Type", "text/html");

  // status code setting
  // res.statusCode = 404;
  // res.statusMessage = "BAD";

  // or Shorthand method
  res.writeHead(404, "BAD", { "Content-Type": "text/html" });
  res.write("<h1>Hello from node js server</h1>");
});

const PORT = 8000;
server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
