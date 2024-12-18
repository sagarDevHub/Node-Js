import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200, "Good", { "Content-Type": "text/html" });
  res.write("<h1>Hello from Node.js server</h1>");
});

const PORT = 8000;
server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
