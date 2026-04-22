import { fetchVehicles } from "../modules/vehicles/api";
import { VehiclesPage } from "../modules/vehicles/components/vehicles-page";

export default async function Home() {
  const response = await fetchVehicles();
  return <VehiclesPage initialVehicles={response.data} />;
}
