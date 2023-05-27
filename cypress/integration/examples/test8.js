//cypress - Spec
/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('My 8th - IFrames', () => {
    
  it('IFrames', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
    cy.frameLoaded('#courses-iframe')

    cy.iframe().find(".header-upper [href='mentorship']").click();
    //cy.iframe().find("").should()
  })

})