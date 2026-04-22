import { config } from "dotenv";
import { z } from "zod";

config();

const schema = z.object({
  API_PORT: z.coerce.number().default(3001),
  WEB_ORIGIN: z.string().default("http://localhost:3000"),
});

export const env = schema.parse(process.env);
