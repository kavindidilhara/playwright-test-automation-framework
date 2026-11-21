import { expect, test as base } from "@playwright/test";

const test = base.extend<{
  testData: { email: string; password: string };
}>({
  testData: async ({}, use) => {
    const data = { email: "test@example.com", password: "pass123" };
    await use(data);
  },
});

test("Should log in with test data", async ({ testData, page }) => {
  await page.goto("https://binaryville.com/account");
  const emailInput = page.getByRole("textbox", { name: "Email" });
  await emailInput.fill(testData.email);
  const passwordInput = page.getByRole("textbox", { name: "Password" });
  await passwordInput.fill(testData.password);

  const signInButton = page.getByRole("button", { name: "Sign in" });
  await signInButton.click();

  const url = page.url();
  expect(url).toContain(testData.password);
});
