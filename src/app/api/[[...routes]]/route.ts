import cors, { HTTPMethod } from "@elysiajs/cors";
import Elysia from "elysia";
import swagger from "@elysiajs/swagger";
import { Logestic } from "logestic";

const appRoutes = new Elysia({ prefix: "/api" })
  .get("/locations", () => [
    { title: "work", location: "1455 Market St" },
    { title: "home", location: "903 Sunrose Terr" },
  ])
  .get("/suggestions", () => [
    { title: "ride", imgSrc: "./globe.svg" },
    { title: "reserve", imgSrc: "./globe.svg" },
    { title: "package", imgSrc: "./globe.svg" },
    { title: "rent", imgSrc: "./globe.svg" },
  ]);

const corsConfig = {
  origin: "*",
  methods: ["GET"] as HTTPMethod[],
  allowedHeaders: "*",
  exposedHeaders: "*",
  maxAge: 5,
  credentials: true,
};

const swaggerConfig = {
  documentation: {
    info: {
      title: "Avas Demo App API",
      description: "API documentation for Avas Demo App",
      version: "1.0.0",
    },
  },
};

const app = appRoutes
  .use(Logestic.preset("common"))
  .use(swagger(swaggerConfig))
  .use(cors(corsConfig));

export const GET = app.handle;

export type API = typeof appRoutes;
