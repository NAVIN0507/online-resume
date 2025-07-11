import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get portfolio link', async ({ page }) => {
  await page.goto('https://online-resume-navin.vercel.app/');


});
