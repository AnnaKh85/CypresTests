//cypress - Spec
/// <reference types="Cypress" />

describe('My 7th - how to grub attibutes', () => {
    
  it('grub attibute', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
    cy.get('#opentab').then(function(el){
      var url = el.prop('href')
      cy.visit(url)
      cy.origin(url, () =>{
        cy.get('.nav-item:nth-of-type(4) [bis_skin_checked]').click()
      })
      
    });
  })

})