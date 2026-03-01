import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src/tests",
  timeout: 30_000,
  expect: { timeout: 5000 },

  /* Base URL and other shared settings */
  use: {
    baseURL: "https://the-internet.herokuapp.com/",
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    trace: "on-first-retry",
  },

  /* Reporter configuration */
  reporter: [
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["junit", { outputFile: "results/junit.xml" }],
    ["json", { outputFile: "results/results.json" }],
  ],

  /* Projects for different browsers if needed */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // additional projects can be added here
  ],
});
