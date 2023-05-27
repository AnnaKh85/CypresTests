//cypress - Spec
/// <reference types="Cypress" />

describe('My 4th test Suite - alerts', () => {
    
  it('Window events', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
    cy.get("input#alertbtn").click();
    cy.get("[value='Confirm']").click();

    cy.on('window:alert', (str) => {
      expect(str).to.be.equal('Hello , share this practice page and share your knowledge');
    }
    )

    cy.on('window:confirm', (str) => {
      expect(str).to.be.equal('Hello , Are you sure you want to confirm?');
    }
    )

    //handling child tabs with combination of cypress and JQuery
    //cy.get('#opentab').invoke('removeAttr','target').click()
 
    //cy.url().should('include','qaclickacademy')

    //navigating brower controls
    //cy.go('back');

  })


})