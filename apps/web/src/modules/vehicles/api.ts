import type {
  CreateVehicleInput,
  UpdateVehicleInput,
  Vehicle,
  VehicleListResponse,
} from "./types";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3001";

export async function fetchVehicles() {
  const response = await fetch(`${apiBaseUrl}/v1/vehicles`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Failed to fetch vehicles");
  }
  return (await response.json()) as VehicleListResponse;
}

export async function createVehicle(payload: CreateVehicleInput) {
  const response = await fetch(`${apiBaseUrl}/v1/vehicles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to create vehicle");
  }

  return (await response.json()) as { data: Vehicle };
}

export async function updateVehicle(id: string, payload: UpdateVehicleInput) {
  const response = await fetch(`${apiBaseUrl}/v1/vehicles/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to update vehicle");
  }

  return (await response.json()) as { data: Vehicle };
}

export async function deleteVehicle(id: string) {
  const response = await fetch(`${apiBaseUrl}/v1/vehicles/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete vehicle");
  }
}
