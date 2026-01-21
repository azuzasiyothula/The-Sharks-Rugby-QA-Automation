export class ShopPage {
    constructor(page) {
        this.page = page;
        this.acceptCookiesBtn = page.getByRole('button', { name: 'Accept All Cookies|Agree/i' });
        this.sortingDropdown = page.getByLabel('Shop order');
        this.ladiesCategoryLink = page.getByRole('link', { name: 'Ladies', exact: true });
        this.sizeDropdown = page.locator('select[id*="size"], select[name*="attribute_pa_shirt-sizes"]');
        this.addToBasketBtn = page.getByRole('button', { name: '/Add to basket|Add to cart/i'});
        this.viewBasketLink = page.getByRole('link', { name: 'View basket' });
    
    }

    async navigate() {
        await this.page.goto('/shop/');

        try {
            await this.acceptCookiesBtn.waitFor({state: 'visible', timeout: 5000});
            await this.acceptCookiesBtn.click();
        } catch (e) {
            console.log('Cookie banner did not appear, proceeding...');
        }
    }

    async selectLadiesCategory() {
        await this.ladiesCategoryLink.click({ force: true });
        await this.page.waitForURL(/.*product-category\/ladies/, {waitUntil: 'domcontentloaded'});
    }

    async addLadiesJerseyToCart(size) {
        await this.page.getByRole('link', { name: /Ladies.*Jersey/i }).first().click();

        await this.sizeDropdown.waitFor({state: 'visible'});
        await this.sizeDropdown.selectOption({label: size.toUpperCase()});

        await this.addToBasketBtn.click();

        await this.viewBasketLink.waitFor({state: 'visible'});
    }
}