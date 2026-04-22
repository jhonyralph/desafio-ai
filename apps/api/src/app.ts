import cors from "cors";
import express from "express";
import { env } from "./config/env.js";
import { vehiclesRouter } from "./modules/vehicles/vehicles.routes.js";

export function createApp() {
  const app = express();

  app.use(cors({ origin: env.WEB_ORIGIN }));
  app.use(express.json());

  app.get("/health", (_request, response) => {
    response.json({ status: "ok", service: "api" });
  });

  app.use("/v1/vehicles", vehiclesRouter);

  return app;
}
