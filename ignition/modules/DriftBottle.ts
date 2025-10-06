import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DriftBottleModule = buildModule("DriftBottleModule", (m) => {
  const driftBottle = m.contract("DriftBottle");
  return { driftBottle };
});

export default DriftBottleModule;
