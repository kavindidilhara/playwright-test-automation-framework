import { expect, test } from "@playwright/test";

test("Sign In Button is visible", async ({ page }) => {
  await page.goto("https://binaryville.com/account");
  const signUpButton = page.getByRole("button", { name: "Sign in" });
  await expect(signUpButton).toBeVisible();
});
