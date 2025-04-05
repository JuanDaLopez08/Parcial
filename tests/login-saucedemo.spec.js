const {test, expect} = require('@playwright/test');

test('login exitoso SauceDemo', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('#shopping_cart_container > a');
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await page.click('#remove-sauce-labs-backpack');
    await expect(page.locator('.cart_item')).toHaveCount(0);
});    