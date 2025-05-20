import Elysia from "elysia";
import cors, { HTTPMethod } from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Logestic } from "logestic";
import { getLocations, getSuggestions } from "./controllers";

const appRoutes = new Elysia({ prefix: "/api" })
  .get("/locations", () => getLocations)
  .get("/suggestions", () => getSuggestions);

const swaggerConfig = {
  documentation: {
    info: {
      title: "Avas Demo App API",
      description: "API documentation for Avas Demo App",
      version: "1.0.0",
    },
  },
};

const corsConfig = {
  origin: "*",
  methods: ["GET"] as HTTPMethod[],
  allowedHeaders: "*",
  exposedHeaders: "*",
  maxAge: 5,
  credentials: true,
};

const app = appRoutes
  .use(Logestic.preset("common"))
  .use(swagger(swaggerConfig))
  .use(cors(corsConfig));

export const GET = app.handle;

export type API = typeof appRoutes;
