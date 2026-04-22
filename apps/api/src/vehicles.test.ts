import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "./app.js";
import { resetVehiclesForTesting } from "./modules/vehicles/vehicles.service.js";

describe("vehicles routes", () => {
  beforeEach(() => {
    resetVehiclesForTesting();
  });

  it("creates and lists vehicles", async () => {
    const app = createApp();
    const createResponse = await request(app).post("/v1/vehicles").send({
      plate: "ABC1234",
      brand: "Toyota",
      model: "Corolla",
      year: 2022,
      color: "Silver",
      active: true,
    });

    expect(createResponse.status).toBe(201);
    expect(createResponse.body.data.plate).toBe("ABC1234");

    const listResponse = await request(app).get("/v1/vehicles");
    expect(listResponse.status).toBe(200);
    expect(listResponse.body.meta.total).toBe(1);
  });

  it("returns 400 for invalid payload", async () => {
    const app = createApp();
    const response = await request(app).post("/v1/vehicles").send({
      plate: "",
      brand: "Toyota",
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("INVALID_PAYLOAD");
  });
});
