import { test, expect } from '@playwright/test';
import { ShopPage } from '../../page-objects/ShopPage';

test.describe('Shop Component - Functional & Visual Suite', () => {
    let shop;

    test.beforeEach(async ({ page }) => {
        shop = new ShopPage(page);
        await shop.navigate();
    });

    test('Verify category filter logic: Ladies Category', async ({ page }) => {
        await shop.selectLadiesCategory();

        await expect(page).toHaveURL(/.*product-category\/ladies/);
        
        const titles = await page.locator('.woocommerce-loop-product__title').allTextContents();
        expect(titles.length).toBeGreaterThan(0);
        for (const title of titles) {
            expect(title.toLowerCase()).toContain('ladies');
        }
    });

    test('Verify "Price Low to High" sorting accuracy', async ({ page }) => {
            
        await shop.sortingDropdown.selectOption('price'); 
        await page.waitForURL(/.*orderby=price/);

        const priceElements = page.locator('.price .amount bdi');
        await priceElements.first().waitFor();

        const priceStrings = await priceElements.allInnerTexts();
        const prices = priceStrings.map(p => parseFloat(p.replace(/[^\d.]/g, '')));

        console.log('Scraped Price Sequence:', prices);
        
        const isSorted = prices.every((val, i, arr) => !i || val >= arr[i - 1]);

        expect(isSorted, `LOGIC ERROR: Backend sorting returned an unsorted list: ${prices}`).toBe(true);
    });

    test('Visual Regression: Shop Sidebar Baseline', async ({ page }) => {
        const sidebar = page.locator('div.elementor-widget-container:has-text("FILTER BY CATEGORY")').first(); 
        
        await sidebar.waitFor({ state:'visible'});
        await expect(sidebar).toHaveScreenshot('shop-sidebar.png', {
            maxDiffPixelRatio: 0.2, //allowance for minor font rendering variations
            animations: 'disabled'
        });
    });

    test('Full Journey: Add sized jersey to basket', async ({ page }) => {
        await shop.selectLadiesCategory();
        await shop.addLadiesJerseyToCart('m');

        const viewBasket = page.getByRole('link', {name: 'View basket'}).first();
        await viewBasket.waitFor({state: 'visible'});
        await shop.viewBasket.click();

        await expect(page).toHaveURL(/.*basket/);
        await expect(page.locator('.product-name')).toContainText('Ladies', {ignoreCase: true});
    });
});