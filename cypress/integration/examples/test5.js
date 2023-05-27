//cypress - Spec
/// <reference types="Cypress" />

describe('My 5th - working with tables', () => {
    
  it('tables', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
    
    cy.get('tr td:nth-child(2)').each(($el, index, $list) =>{
      var text = $el.text()
      if (text.includes('python')) {
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
          var priceText = price.text();
          expect(priceText).to.equal('25');
        });
      }
    })

  })

})