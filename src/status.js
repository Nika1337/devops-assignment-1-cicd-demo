export function getPipelineMessage() {
  return "Code is tested on every push and pull request before any deployment can happen.";
}

export function getStrategyMessage(strategyName = "Blue-Green Simulation") {
  return `${strategyName} keeps the current live version stable while a new version is prepared and verified.`;
}
