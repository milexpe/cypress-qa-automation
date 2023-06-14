class homePage {
    
    elements = {
        header : () => cy.get('header h1'),
        githubUsernameLabel : () => cy.get('div label'),
        usernameInput : () => cy.get('#username'),
        goButton : () => cy.get('button'),
        noReposLabel : () => cy.get('section p.output-status-text'),
        foundReposLabel : () => cy.get('section p.repo-amount'),
        messageLabel : () => cy.get('section.message-area p'),
        repoList : () => cy.get('div.repo-list-container'),
        repoURL : () => cy.get('div.repo-list-container a')
    }

    visit() {
        cy.visit('/')
    }

    searchRepoButton() {
        this.elements.goButton().click()
    }

    typeGithubUsername(text) {
        this.elements.usernameInput().type(text)
    }

    searchRepoEnter() {
        this.elements.usernameInput().type('{enter}')
    }

    getMessage() {
        return this.elements.messageLabel().invoke('text')
    }

    validateElements(){
       this.elements.header().should('be.visible').and('have.text', 'Get Github Repos')
       this.elements.githubUsernameLabel().should('be.visible').and('have.text', 'Github Username')
       this.elements.usernameInput().should('be.visible').and('be.enabled')
       this.elements.goButton().should('be.visible').and('be.enabled')
       this.elements.noReposLabel().should('be.visible')
    }

    getNoRepoLabelText(){
    return this.elements.noReposLabel().invoke('text')
    }

    validateRepoSearchResult(){
        this.elements.foundReposLabel().should('be.visible')
        this.elements.repoList().should('be.visible')
    }

    clickRepoURL(){
     this.elements.repoURL().first().click()
    }
}
module.exports = new homePage()
