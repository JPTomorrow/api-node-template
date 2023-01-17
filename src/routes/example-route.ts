import fastify from "fastify";
import { FastifyPluginAsyncJsonSchemaToTs } from "@fastify/type-provider-json-schema-to-ts";

const exampleRoute: FastifyPluginAsyncJsonSchemaToTs = async (
  server,
  options
) => {
  server.get("/", async (request, reply) => {
    return { hello: "Welcome to the template API!" };
  });
};

export default exampleRoute;
