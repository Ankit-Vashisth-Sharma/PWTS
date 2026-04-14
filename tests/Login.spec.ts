import { test, expect } from "@playwright/test";

test.describe("OrangeHRM Login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });

  test("Login page should load correctly", async ({ page }) => {
    await expect(page).toHaveURL(/auth\/login/);
    await expect(page).toHaveTitle(/OrangeHRM/);
    await expect(page.locator("h5.orangehrm-login-title")).toHaveText("Login");
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  });

  test("User should login successfully", async ({ page }) => {
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  });

  test("Should show validation for empty credentials", async ({ page }) => {
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByText("Required").first()).toBeVisible();
  });

  test("Should show error for invalid credentials", async ({ page }) => {
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("wrongpass");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByText(/Invalid credentials/i)).toBeVisible();
  });
});