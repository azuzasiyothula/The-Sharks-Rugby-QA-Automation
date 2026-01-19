export class ResultsPage {
    constructor(page) {
        this.page = page;
        //locator for the cookies button
        this.acceptCookiesBtn = page.getByRole('button', { name: /Accept|Allow|Agree/i });

        //sportspress specific selectors
        this.viewFixturesBtn = page.getByRole('link', { name: 'VIEW FIXTURES' });
        this.logTab = page.getByRole('tab', { name: 'LOG' });
        this.fixturesTable = page.getByRole('table');

        this.firstOpponent = page.locator('td.column-opponents a').first();
    }

    async navigate() {
        await this.page.goto('/'); //go to home first to trigger the fixtures link
        //dismiss the cookie banner is it appears
        if (await this.acceptCookiesBtn.isVisible()) {
            await this.acceptCookiesBtn.click();
        }
    }

    async navigateToFixtures() {
        await this.viewFixturesBtn.first().click({ force: true });
        await this.page.waitForLoadState('networkidle');
    }

    async switchToLogTab() {
        await this.logTab.click();
    }
}