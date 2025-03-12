import VehicleStatusCard from "./components/VehicleStatusCard/VehicleStatusCard";
import { vehicleData } from "./components/VehicleStatusCard/data/vehicleData";

function App() {
  return (
    <>
      {vehicleData.map((v) => (
        <VehicleStatusCard {...v} />
      ))}
    </>
  );
}

export default App;