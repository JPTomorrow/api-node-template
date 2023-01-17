///
/// HTTP SERVER REST API
///

import HTTP from "http";
import { store } from "./db";

const requestListener = (req: any, res: any) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to the API!");
      break;
    case "/":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(store));
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end(JSON.stringify({ error: "Not Found" }));
  }
};

const startServer = () => {
  const server = HTTP.createServer(requestListener);

  server.listen(3000, "localhost", () => {
    console.log("listening on port 3000, go to http://localhost:3000");
  });

  server.close();
};

export { startServer };
