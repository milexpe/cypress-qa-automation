import homePage from '../pages/homePage'

describe('Search Repos', () => {
  beforeEach(function() {
   homePage.visit()
  })

  it('Repos Found', () => {
    homePage.validateElements()
    homePage.typeGithubUsername('test')
    homePage.searchRepoButton()
    homePage.getMessage().should('eq', 'Success!')
    homePage.validateRepoSearchResult()
    homePage.searchRepoEnter()
    homePage.getMessage().should('eq', 'Success!')
    homePage.validateRepoSearchResult()
    homePage.clickRepoURL()
  })

  it("No Repos Found", () => {
    homePage.validateElements()
    homePage.searchRepoButton()
    homePage.getMessage().should('eq', 'Github user not found')
    homePage.getNoRepoLabelText().should('eq', 'No repos')
    homePage.searchRepoEnter()
    homePage.getMessage().should('eq', 'Github user not found')
    homePage.getNoRepoLabelText().should('eq', 'No repos')
  })
})