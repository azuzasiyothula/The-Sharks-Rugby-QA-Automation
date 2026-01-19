import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: 'https://sharksrugby.co.za', 
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'Desktop-Chromium',
      use: {...devices['Desktop Chrome']},
    },
    {
      name: 'Desktop-Firefox',
      use: {...devices['Desktop Firefox']},
    },
    {
      name: 'Mobile-Safari',
      use: {
        ...devices['iPhone 14 Pro'],
        viewport: { width: 1080, height: 1920 }
      },
    },
  ],
});