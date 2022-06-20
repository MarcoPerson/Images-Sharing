import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 10_000,
  retries : 1,
  use : {
    trace : "on-first-retry"
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "edge",
      use: { ...devices["Desktop Edge"] },
    },
    
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
};
export default config;
