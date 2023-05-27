//cypress - Spec
/// <reference types="Cypress" />

describe('My third test Suite', () => {
    it('Checkboxes', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

      cy.get('input[type="checkbox"]').check(['option3', 'option2']);
    })

    it('DropdownList static and dynamic', () =>{
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
      cy.get('[name="dropdown-class-example"]').select('Option2').should('have.value', 'option2');
    })
    it('dynamic dropdownList', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

      cy.get('input#autocomplete').type('rus')

      cy.get('.ui-menu-item div').each(($el, index, $list) => {
        if ($el.text() === 'Russian Federation'){
          $el.click()
        }
      }
    )
    cy.get('#autocomplete').should('have.value', 'Russian Federation');
  })

  it('Visible and unvisible elements', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('input#displayed-text').should('be.visible');
    cy.get('input#hide-textbox').click();
    cy.get('input#displayed-text').should('not.be.visible');
  })

  it('Radio buttons', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('[for="radio2"] > .radioButton').click().should('be.checked');
  })

  })