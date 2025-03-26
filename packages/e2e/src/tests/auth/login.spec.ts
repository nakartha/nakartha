import { test, expect } from "@playwright/test";

test.describe("Login Form", () => {
  test("should show error for short password", async ({ page }) => {
    await page.goto("/auth/login");

    await page.fill('input[id="email"]', "user@example.com");
    await page.fill('input[id="password"]', "123");
    await page.click('button[type="submit"]');

    // Expect an error message for short password
    await expect(
      page.locator('p:text("Password must be at least 6 characters")')
    ).toBeVisible();
  });
});
