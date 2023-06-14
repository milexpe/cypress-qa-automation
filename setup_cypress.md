# Cypress Setup

1. Follow all the steps from setup.md to start the application

There are 2 ways to execute cypress script:

UI:
2. At the root directory of the repo using the terminal, type 'npx cypress open'
3. A cypress window will appear, click E2E testing (If its first time you will see a configuration files next, just click Continue), choose chrome and click Start E2E Testing in Chrome
4. A new chrome window will appear, go to specs on the left menu and click on searchRepo.cy.js (this is the script)

Terminal:
2. At the root directory of the repo using the terminal, type 'npx cypress run --spec 'cypress\e2e\searchRepo.cy.js'
