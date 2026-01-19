export class ShopPage {
    constructor(page) {
        this.page = page;
        this.acceptCookiesBtn = page.getByRole('button', { name: 'Accept All Cookies' });
        this.sortingDropdown = page.getByLabel('Shop order');
        this.ladiesCategoryBtn = page.locator('span.elementor-button-text', { hasText: 'Ladies' });
        this.sizeDropdown = page.locator('select[id*="size"], select[name*="attribute_pa_shirt-sizes"]');
        this.addToBasketBtn = page.getByRole('button', { name: 'Add to basket'});
        this.viewBasketLink = page.getByRole('link', { name: 'View basket' });
    
    }

    async navigate() {
        await this.page.goto('/shop/');

        if (await this.acceptCookiesBtn.count() > 0) {
            if (await this.acceptCookiesBtn.isVisible()) {
                await this.acceptCookiesBtn.click();
            }
            
        }
    }

    async sortByPriceDescending() {
        await this.sortingDropdown.selectOption('price-desc');
    }

    async selectLadiesCategory() {
        await this.ladiesCategoryBtn.click({ force: true });
        await this.page.waitForURL(/.*product-category\/ladies/);
    }

    async addLadiesJerseyToCart(size) {
        await this.page.getByRole('link', { name: /Ladies.*Jersey/ }).first().click();
        await this.sizeDropdown.selectOption(size);
        await this.addToBasketBtn.click();
    }
}