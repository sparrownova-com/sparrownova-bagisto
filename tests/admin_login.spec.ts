import { test, expect } from '@playwright/test';

test('Admin Panel Login and Dashboard Check', async ({ page }) => {
    // Navigate to the admin login page
    await page.goto('http://localhost/admin/login');  // Update URL as needed

    // Enter admin credentials
    await page.fill('input[name="email"]', 'admin@example.com');  // Update email
    await page.fill('input[name="password"]', 'admin123');  // Update password

    // Click the login button
    await page.click('button[type="submit"]');

    // Verify successful login by checking dashboard heading
    await expect(page.locator('h1')).toHaveText('Dashboard');

    console.log('✅ Admin login successful, Dashboard loaded');
});

test('Check Product Listing Page', async ({ page }) => {
    // Login first
    await page.goto('http://localhost/admin/login');
    await page.fill('input[name="email"]', 'admin@example.com');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');

    // Navigate to the product listing
    await page.goto('http://localhost/admin/catalog/products');

    // Verify that the product list is visible
    await expect(page.locator('table')).toBeVisible();

    console.log('✅ Product Listing Page Loaded Successfully');
});
