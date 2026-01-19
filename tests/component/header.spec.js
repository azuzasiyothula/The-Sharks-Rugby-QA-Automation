import { test, expect } from '@playwright/test';
import { Header } from '../../page-objects/Header';

test.describe('Header Componenet - Sharks Website', () => {
    test('should display the main menu and logo correctly', async ({ page, isMobile }) => {
        const header = new Header(page);
        await header.goToHomePage();

        //verify the logo is present (replaces nth(1) click)
        await expect(header.logoLink).toBeVisible();

        if (!isMobile) {
        //desktop specific check
            await header.verifyDesktopMenu();
        } else {
        //mobile specific: check that the menu is collapsed or behind a button
            await expect(header.navMenu).toBeVisible();
        }
    });
});