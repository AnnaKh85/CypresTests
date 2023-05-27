//cypress - Spec
/// <reference types="Cypress" />

describe('My 6th - Mouse hover and popus menu', () => {
    
  it('Mouse hover', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
    //cy.get('div.mouse-hover-content').invoke('show'); // can be used IQuerry method invore()
    cy.contains('Top').click({force: true}); //or this 
    cy.url().should('include', 'top');
  })

})