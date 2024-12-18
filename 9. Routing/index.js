import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end(`
        <html>
            <head>
                <title>Node js Routing</title>
            </head>
            <body>
                <h1>Home</h1>
                <a href='/contact'>Contact Page</a>
                </br>
                <a href='/about'>About Page</a>
            </body>
        </html>
    `);
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end(`
        <html>
            <head>
                <title>Node js Routing</title>
            </head>
            <body>
                <h1>About Pge</h1>
                <a href='/'>Home Page</a>
                </br>
                <a href='/contact'>Contact Page</a>
            </body>
        </html>
    `);
  } else if (req.url === "/contact") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end(`
        <html>
            <head>
                <title>Node js Routing</title>
            </head>
            <body>
                <h1>Contact Page</h1>
                <a href='/'>Home Page</a>
                </br>
                <a href='/about'>About Page</a>
            </body>
        </html>
    `);
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    res.end(`
        <html>
            <head>
                <title>Node js Routing</title>
            </head>
            <body>
                <h1>404 not found :(</h1>
                <a href='/'>Home Page</a>
                </br>
                <a href='/about'>About Page</a>
                </br>
                <a href='/contact'>Contact Page</a>
            </body>
        </html>
    `);
  }
});

const PORT = 8000;
server.listen(PORT, () => console.log(`Server running on PORT no ${PORT}`));
