//cypress - Spec
/// <reference types="Cypress" />

describe('My second test Suite', () => {
    it('My second test case', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/') // change URL to match your dev URL
      
      cy.get('.search-keyword').type("ca");
      cy.wait(2000);
      cy.get('.product:visible').should('have.length', 4)

      //parent child finding 
      cy.get('.products').as('prodLocator')

      cy.get('@prodLocator').find('.product').should('have.length', 4);
      cy.get('@prodLocator').find('.product').eq(1).contains('ADD TO CART').click();
      
      cy.get('@prodLocator').find('.product').each(($el, index, $list) => {
          const textVeg = $el.find('h4.product-name').text();
          
          if(textVeg.includes('Cashews')) {
            cy.wrap($el).find('button').click();
          }
        } 
        
      )
      cy.get('.cart-icon > img').click();
      cy.contains('PROCEED TO CHECKOUT').click();
      cy.contains('Place Order').click();

    })

  })