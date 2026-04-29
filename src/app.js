import { getPipelineMessage, getStrategyMessage } from "./status.js";

const pipelineElement = document.querySelector("#pipeline-message");
const strategyElement = document.querySelector("#strategy-message");

if (pipelineElement) {
  pipelineElement.textContent = getPipelineMessage();
}

if (strategyElement) {
  strategyElement.textContent = getStrategyMessage();
}
