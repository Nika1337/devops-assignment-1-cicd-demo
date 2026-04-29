import { describe, expect, test } from "vitest";
import { getPipelineMessage, getStrategyMessage } from "../src/status.js";

describe("status helpers", () => {
  test("returns the pipeline message", () => {
    expect(getPipelineMessage()).toContain("tested");
    expect(getPipelineMessage()).toContain("deployment");
  });

  test("includes the strategy name in the strategy message", () => {
    expect(getStrategyMessage("Canary")).toContain("Canary");
  });
});
