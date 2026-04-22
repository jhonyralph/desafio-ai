import cors from "cors";
import express from "express";
import { env } from "./config/env.js";

export function createApp() {
  const app = express();

  app.use(cors({ origin: env.WEB_ORIGIN }));
  app.use(express.json());

  app.get("/health", (_request, response) => {
    response.json({ status: "ok", service: "api" });
  });

  return app;
}
