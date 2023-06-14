# Start application
1. At the root directory of the repo using the terminal, type **npm install**
2. Once again at the root directory of the repo using the terminal, type **yarn start**

# How to execute Cypress

**UI:**

1. At the root directory of the repo using the terminal, type **npx cypress open**
2. A cypress window will appear, click **E2E testing** (If its first time, you will see a configuration files next, just click Continue), choose chrome and click **Start E2E Testing in Chrome**
3. A new chrome window will appear, go to specs on the left menu and click on **searchRepo**.cy.js

**Terminal:**

1. At the root directory of the repo using the terminal, type **npx cypress run --spec 'cypress\e2e\searchRepo.cy.js**
