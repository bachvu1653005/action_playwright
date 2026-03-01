import { test, expect } from "@playwright/test";

// Drag and drop test for the "The Internet" site

test.describe("Drag and Drop page", () => {
  test("should swap the two boxes when dragged", async ({ page }) => {
    await page.goto("/drag_and_drop");

    const columnA = page.locator("#column-a");
    const columnB = page.locator("#column-b");

    // initial labels
    await expect(columnA).toHaveText("A");
    await expect(columnB).toHaveText("B");

    // perform drag and drop using Playwright built-in helper
    await columnA.dragTo(columnB);

    // after drop, the texts should have swapped
    await expect(columnA).toHaveText("B");
    await expect(columnB).toHaveText("A");
  });
});
