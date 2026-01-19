import { expect } from '@playwright/test';

export class Header {
    /**
     * @param {import('@playwright/test').Page} pageXOffset
     */
    constructor(page) {
        this.page = page;

        this.logoLink = page.locator('header').getByRole('link').first();
        this.navMenu = page.getByRole('navigation');

        this.cookieAcceptBtn = page.getByRole('button', { name: 'Accept All Cookies' });

        this.menuList = this.navMenu.getByRole('list');

    }

    async goToHomePage() {
        await this.page.goto('/');
        await this.page.waitForLoadState('networkidle');
    }

    async verifyDesktopMenu() {
        await expect(this.menuList).toBeVisible();
    }
}