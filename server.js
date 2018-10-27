const http = require("http");
const path = require("path");
const url = require("url");
// const fs = require("fs");
const next = require("next");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      const parsedUrl = url.parse(req.url, true);
      const { pathname } = parsedUrl;

      if (pathname === "/service-worker.js") {
        const filePath = path.join(__dirname, ".next", pathname);
        app.serveStatic(req, res, filePath);
        // res.setHeader("content-type", "text/javascript");
        // fs.createReadStream("./offline/service-worker.js").pipe(res);
      } else {
        handle(req, res, parsedUrl);
      }
    })
    .listen(port, err => {
      if (err) throw err;
      console.log(`Ready on PORT ${port}`);
    });
});
