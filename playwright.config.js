const {defineConfig} = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
    },
});