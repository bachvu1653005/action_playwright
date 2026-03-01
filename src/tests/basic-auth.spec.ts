import { test, expect } from "@playwright/test";

// Basic Authentication test for "The Internet" site
// Credentials are encoded in the URL via `page.goto` options.

test.describe("Basic Auth page", () => {
  test("should allow access with valid credentials", async ({ page }) => {
    // Playwright supports specifying credentials in the goto options
    // credentials should come from environment variables for security
    const user = process.env.BASIC_AUTH_USER || "failed";
    const pass = process.env.BASIC_AUTH_PASS || "failed";
    // httpCredentials didn't work reliably for this application due to
    // an initial redirect; embed credentials in the URL instead.
    await page.goto(
      `https://${user}:${pass}@the-internet.herokuapp.com/basic_auth`,
    );

    // verify the success message is displayed
    const message = await page.locator(
      "text=Congratulations! You must have the proper credentials.",
    );
    await expect(message).toBeVisible();
  });
});
