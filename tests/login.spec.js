const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {

    await page.goto('https://example.com');

    console.log("Login Successful");

});
