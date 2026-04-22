import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Home from "./page";

vi.mock("../modules/vehicles/api", () => ({
  fetchVehicles: vi.fn().mockResolvedValue({ data: [], meta: { total: 0 } }),
  createVehicle: vi.fn(),
}));

describe("Home page", () => {
  it("renders vehicles page title", async () => {
    const page = await Home();
    render(page);
    expect(screen.getByText("Gerenciamento de Veiculos")).toBeTruthy();
  });
});
