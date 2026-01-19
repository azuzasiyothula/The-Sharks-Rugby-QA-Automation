## Test Case ID: TC_SHARKS_E2E_001

# Title: Manual Validation of Ticket Purchase Flow.

## Priority: High

## Preconditions: Browser is open, user in on the Sharks Rugby Homepage.

### Steps:

1. Navigate to https://sharksrugby.co.za/.
2. Click "TICKETS" dropdown.
3. Click "MATCH DAY TICKETS", A new tab opens: https://tickets.thesharks.co.za/.
4. Navigate to & click on desired match.
5. On the selected match, click "BUY TICKETS".
6. Click on the interactive stadium map to select seat.
7. Click "Details & Pay".
8. Fill out details and click "Proceed to Payment".

### Expected Result:

- Homepage laods correctly.
- Ticketing portal opens in a new tab.
- Interactive map should load within 3 seconds.
- Selected seat should change to 'Selected' state.
- User is redirected to the checkout page.
- Order summary should accurately reflect the seat price.

### Actual Result:

- All steps passed. No UI/UX or funtional glitches observed.

**Status:** Passed ✅
**Date:** 10/01/2025
**Environment:** Production (https://sharksrugby.co.za/)
