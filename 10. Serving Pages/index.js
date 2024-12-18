import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, "ok", { "Content-Type": "text/html" });
    fs.readFile("./public/home.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else if (req.url === "/about") {
    res.writeHead(200, "ok", { "Content-Type": "text/html" });
    fs.readFile("./public/about.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    fs.readFile("./public/notFound.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  }
});

const PORT = 8000;
server.listen(PORT, () => console.log(`Server running on PORT no ${PORT}`));
