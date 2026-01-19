<h3 align="center"> QA Discovery Log - Sharks Website </h3>

### 1. Cookie Consent Overlay

- **Finding:** The "Accept All Cookies" modal blocks interaction with the Header on the first load.
- **Impact:** Any test starting from the Homepage will fail if it doesn't handle this modal.
- **Solution:** Added an automated check in `Header.goToHomePage()` to dismiss the modal if present.

### 2. Responsive Breakpoints

- **Finding:** The "Hamburger" menu appears at exactly 1024px.
- **Impact:** Standard "Tablet" viewports might still show the Desktop menu unless configured specifically.
- **Solution:** Updated `playwright.config.js` with explicit viewports for Mobile (1080x1920).
