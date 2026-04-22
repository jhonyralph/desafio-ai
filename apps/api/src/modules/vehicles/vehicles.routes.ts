import { Router } from "express";
import {
  createVehicleSchema,
  updateVehicleSchema,
} from "./vehicles.contracts.js";
import {
  createVehicle,
  deleteVehicle,
  listVehicles,
  updateVehicle,
} from "./vehicles.service.js";

export const vehiclesRouter = Router();

vehiclesRouter.get("/", (_request, response) => {
  const data = listVehicles();
  return response.json({ data, meta: { total: data.length } });
});

vehiclesRouter.post("/", (request, response) => {
  const parsed = createVehicleSchema.safeParse(request.body);
  if (!parsed.success) {
    return response.status(400).json({
      error: "INVALID_PAYLOAD",
      details: parsed.error.flatten(),
    });
  }

  const result = createVehicle(parsed.data);
  if ("error" in result) {
    return response.status(409).json({ error: result.error });
  }

  return response.status(201).json({ data: result.data });
});

vehiclesRouter.patch("/:id", (request, response) => {
  const parsed = updateVehicleSchema.safeParse(request.body);
  if (!parsed.success) {
    return response.status(400).json({
      error: "INVALID_PAYLOAD",
      details: parsed.error.flatten(),
    });
  }

  const result = updateVehicle(request.params.id, parsed.data);
  if ("error" in result) {
    if (result.error === "NOT_FOUND") {
      return response.status(404).json({ error: result.error });
    }
    return response.status(409).json({ error: result.error });
  }

  return response.json({ data: result.data });
});

vehiclesRouter.delete("/:id", (request, response) => {
  const result = deleteVehicle(request.params.id);
  if ("error" in result) {
    return response.status(404).json({ error: result.error });
  }

  return response.status(204).send();
});
