import log from "@/logger";
import config from "@config/server.json";
import example from "@/routes/example-route";
import fastify from "fastify";

const port = config["appConfig"]["port"];
//const host = config["appConfig"]["host"];

const server = fastify({ logger: log });
server.register(example);

const start = async () => {
  try {
    await server.listen({ port: port });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
