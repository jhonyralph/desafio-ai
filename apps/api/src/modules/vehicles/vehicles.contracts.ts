import { z } from "zod";

export const vehicleStatusSchema = z.enum(["active", "inactive"]);

export const createVehicleSchema = z.object({
  plate: z.string().trim().min(1),
  brand: z.string().trim().min(1),
  model: z.string().trim().min(1),
  year: z.number().int().min(1950).max(2100),
  color: z.string().trim().min(1),
  active: z.boolean().default(true),
});

export const updateVehicleSchema = createVehicleSchema.partial().refine(
  (value) => Object.keys(value).length > 0,
  "At least one field is required",
);

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

export type CreateVehicleInput = z.infer<typeof createVehicleSchema>;
export type UpdateVehicleInput = z.infer<typeof updateVehicleSchema>;
