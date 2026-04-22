import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { VehiclesPage } from "./vehicles-page";

const createVehicleMock = vi.fn();
const updateVehicleMock = vi.fn();
const deleteVehicleMock = vi.fn();

vi.mock("../api", () => ({
  createVehicle: (...args: unknown[]) => createVehicleMock(...args),
  updateVehicle: (...args: unknown[]) => updateVehicleMock(...args),
  deleteVehicle: (...args: unknown[]) => deleteVehicleMock(...args),
}));

describe("VehiclesPage", () => {
  it("calls update and delete actions", async () => {
    updateVehicleMock.mockResolvedValue({
      data: {
        id: "veh_1",
        plate: "ABC1234",
        brand: "Toyota",
        model: "Corolla",
        year: 2022,
        color: "Black",
        active: true,
        updatedAt: new Date().toISOString(),
      },
    });
    deleteVehicleMock.mockResolvedValue(undefined);

    render(
      <VehiclesPage
        initialVehicles={[
          {
            id: "veh_1",
            plate: "ABC1234",
            brand: "Toyota",
            model: "Corolla",
            year: 2022,
            color: "Silver",
            active: true,
            updatedAt: new Date().toISOString(),
          },
        ]}
      />,
    );

    fireEvent.click(screen.getByText("Editar"));
    fireEvent.click(screen.getByText("Salvar"));

    await waitFor(() => {
      expect(updateVehicleMock).toHaveBeenCalledWith(
        "veh_1",
        expect.objectContaining({ plate: "ABC1234" }),
      );
    });

    fireEvent.click(screen.getByText("Remover"));

    await waitFor(() => {
      expect(deleteVehicleMock).toHaveBeenCalledWith("veh_1");
    });
  });
});
