class basePage {

  constructor() {
  }

  getText(selector){
    return element.invoke('text')
  }

  elementIsVisible(selector){
    element.should('be.visible')
  }

  elementIsEnabled(selector){
    element.should('be.enabled')
  }

  containsText(selector, text){
    element.should('have.text', text)
  }
}
export {basePage}