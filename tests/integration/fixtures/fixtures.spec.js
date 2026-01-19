import { test, expect } from '@playwright/test';
import { ResultsPage } from '../../../page-objects/ResultsPage';
import matches from '../fixtures/matches.json';

test.describe('Fixtures & Tournament Log Integration Suite', () => {
    let results;

    test.beforeEach(async ({ page }) => {
        results = new ResultsPage(page);
    });

    test('should render match cards from mock fixture data', async ({ page }) => {
        await results.navigate();
        await results.navigateToFixtures();

        //locating the first match row
        const firstMatch = page.locator('tr.sp-row, .sp-event-row').first();

        //assertions
        //verify the row is visible
        await expect(firstMatch).toBeVisible();
        //verify it contains a date by checking for month names
        await expect(firstMatch).toContainText(/(January|February|March|April|May|June|July|August|September|October|November|December)/);
        //verify it contains a score or 'vs' (match indicator)
        const matchInfo = await firstMatch.innerText();
        const hasScoreOrVs = matchInfo.includes('-') || matchInfo.toLocaleLowerCase().includes('vs');
        expect(hasScoreOrVs).toBe(true);

        //verify the 'sharks' are mentioned in the match card
        await expect(firstMatch).toContainText('Sharks', { ignoreCase: true });
    });
});