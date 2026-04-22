import type { CreateVehicleInput, UpdateVehicleInput, Vehicle } from "./vehicles.contracts.js";

const vehicles: Vehicle[] = [];

function createId() {
  return `veh_${Math.random().toString(36).slice(2, 10)}`;
}

export function listVehicles() {
  return [...vehicles].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export function createVehicle(input: CreateVehicleInput) {
  const duplicatedPlate = vehicles.some(
    (vehicle) => vehicle.plate.toLowerCase() === input.plate.toLowerCase(),
  );

  if (duplicatedPlate) {
    return { error: "DUPLICATED_PLATE" as const };
  }

  const created: Vehicle = {
    ...input,
    id: createId(),
    updatedAt: new Date().toISOString(),
  };
  vehicles.push(created);
  return { data: created };
}

export function updateVehicle(id: string, patch: UpdateVehicleInput) {
  const index = vehicles.findIndex((vehicle) => vehicle.id === id);
  if (index < 0) {
    return { error: "NOT_FOUND" as const };
  }

  if (patch.plate) {
    const duplicatedPlate = vehicles.some(
      (vehicle) =>
        vehicle.id !== id && vehicle.plate.toLowerCase() === patch.plate?.toLowerCase(),
    );

    if (duplicatedPlate) {
      return { error: "DUPLICATED_PLATE" as const };
    }
  }

  const updated: Vehicle = {
    ...vehicles[index],
    ...patch,
    updatedAt: new Date().toISOString(),
  };
  vehicles[index] = updated;
  return { data: updated };
}

export function deleteVehicle(id: string) {
  const index = vehicles.findIndex((vehicle) => vehicle.id === id);
  if (index < 0) {
    return { error: "NOT_FOUND" as const };
  }

  vehicles.splice(index, 1);
  return { data: true };
}

export function resetVehiclesForTesting() {
  vehicles.splice(0, vehicles.length);
}
