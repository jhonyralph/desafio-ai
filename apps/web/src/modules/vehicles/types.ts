export type Vehicle = {
  id: string;
  plate: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  active: boolean;
  updatedAt: string;
};

export type VehicleListResponse = {
  data: Vehicle[];
  meta: { total: number };
};

export type CreateVehicleInput = {
  plate: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  active: boolean;
};

export type UpdateVehicleInput = Partial<CreateVehicleInput>;
