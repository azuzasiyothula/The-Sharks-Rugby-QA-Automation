<h1 align="center">🦈 Hollywoodbets Sharks - QA Automation Suite</h1> 
<h3 align="center">🎭 Professional Playwright Test Framework with JavaScript</h3>

<p>This repository contains the automated test suite for the Hollywoodbets Sharks official website and ticketing portal. This project was developed as part of a 1-week sprint to ensure the stability of the ticket purchasing flow and the Sharks Shop.</p>

<p align="center">
  <img src="https://img.shields.io/badge/Sprint_Status-Completed-success?style=for-the-badge" alt="Status"/>
  <img src="https://img.shields.io/badge/Maintained%3F-Yes-blue?style=for-the-badge" alt="Maintained"/>
  <img src="https://img.shields.io/badge/Framework-Playwright-orange?style=for-the-badge" alt="Framework"/>
</p>

---

<h3 align="left">📋 Sprint Overview</h3>

For this sprint, I focused on building a robust testing foundation for the **Hollywoodbets Sharks** website. The goal was to move beyond simple scripts and implement a maintainable architecture that is realiable.

⭐︎ **Trello Management:** Used for tracking high-level tasks and granular progress via technical checklists.
⭐︎ **Architecture:** Implemented the **Page Object Model (POM)** to separate test logic from selectors.
⭐︎ **Quality Gates:** Integrated **GitHub Actions** to ensure every commit is verified automatically.

---

<h3 align="left">🏗️ Testing Strategy: The Pyramid</h3>
This suite follows the Testing Pyramid to ensure a balance between execution speed and feature confidence:

I've structured this repository to provide the fastest feedback loops possible:
⭐︎ **E2E Layer:** Critical user journeys (Ticket selection to Checkout).
⭐︎ **Integration Layer:** Intercepting API calls for Match Results using fixtures to test UI edge cases.
⭐︎ **Component Layer:** Focused validation on the Sharks Shop filtering and mobile navigation.

---

<h3 align="left">👾 Tech Stack & Tools:</h3> <p align="left">
  <img src="https://img.shields.io/badge/Playwright-28A745?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white" alt="Trello" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
</p>

---

<h3 align="left">📂 Repository Structure</h3>
```text
├── .github/workflows/        # CI/CD pipeline configuration (GitHub Actions)
├── docs/manual/              # Manual test cases and documentation
│   └── TC_001_Ticketing_Flow.md
├── page-objects/             # Encapsulated Page Objects (POM pattern)
│   ├── Header.js
│   ├── ResultsPage.js
│   └── ShopPage.js
├── tests/
│   ├── component/            # UI/UX & Responsive tests
│   ├── e2e/                  # Full user journey flows
│   └── integration/          # API mocking & data-driven tests
│       └── fixtures/         # Mock JSON data for API testing
├── playwright.config.js      # Global configuration & viewport settings
└── README.md                 # Project documentation (You are here!)

---

<h3 align="left">🚀 Getting Started</h3>

<p>Prerequisites
⭐︎ Node.js (v18 or higher)
⭐︎ NPM</p>

Installation

1. Clone the repository:
   git clone https://github.com/[your-username]/sharks-rugby-qa-automation.git
   cd sharks-rugby-qa-automation

2. Install dependencies:
   npm install

3. Install Playwright Browsers:
   npx playwright install

Running Tests
Description,Command
Run all tests,npx playwright test
Run in UI Mode,npx playwright test --ui
Run specific suite,npx playwright test tests/e2e/
View Report,npx playwright show-report

<h3 align="left">📝 Reporting & Status</h3>

All test runs generate a detailed HTML report including screenshots and video traces of failures.

⭐︎ Trello Board Setup & Checklist Definition
⭐︎ Framework Initialization (JS + Playwright)
⭐︎ Implementation of POM for Shop and Tickets
⭐︎ API Mocking for Match Results
⭐︎ E2E Checkout Flow Scripting
⭐︎ CI/CD Pipeline Integration

<h3 align="left">🐞 Bug Discovery & Resolution:</h3>
<ul>
  <li><b>Issue:</b> Dynamic ID generation in WordPress menu.</li>
  <li><b>Impact:</b> Brittle tests that fail on page refresh.</li>
  <li><b>Resolution:</b> Implemented <b>Semantic Locators</b> (Role-based) to ensure test longevity.</li>
</ul>

<h3 align="left">🧪 Test Coverage Summary</h3>
<table width="100%">
  <tr>
    <th>Layer</th>
    <th>Method</th>
    <th>Result</th>
  </tr>
  <tr>
    <td><b>Header / Navigation</b></td>
    <td>Automated (Playwright)</td>
    <td>✅ Pass</td>
  </tr>
  <tr>
    <td><b>Shop Filtering</b></td>
    <td>Automated (Playwright)</td>
    <td>✅ Pass</td>
  </tr>
  <tr>
    <td><b>Match Results API</b></td>
    <td>Integration (Mocked)</td>
    <td>✅ Pass</td>
  </tr>
  <tr>
    <td><b>Ticketing Seat Selector</b></td>
    <td><b>Manual Validation</b></td>
    <td>✅ Pass (Verified stable)</td>
  </tr>
</table>

<h3 align="left">QA Engineer: Azuza Siyothula</h3>
<p>Project: Hollywoodbets Sharks Web Quality Assurance</p>
