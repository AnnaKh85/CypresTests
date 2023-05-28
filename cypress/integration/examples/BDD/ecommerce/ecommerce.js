import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../pageObjects/homePage";
import ProductPage from "../../../pageObjects/productPage";

const homePage = new HomePage()
const productPage = new ProductPage()

Given("I open Ecommerce page", () => {
    cy.visit(Cypress.env('url')+'/angularpractice/')
})

When("I add items to the cart", () =>{
    homePage.getEditBox().type(this.data.name)

    homePage.getGender().select(this.data.gender)

    homePage.getTwoWayDataBlinding().should('have.value', this.data.name)

    homePage.getEditBox().should('have.attr', 'minlength', '2')

    homePage.getEntrepreneur().should('be.disabled')

    homePage.getShopBtn().click()

    this.data.productName.forEach(element => {
        cy.selectProduct(element)
      });
  
    productPage.getCheckoutBtn().click()
})

And("vilidate the total prices", ()=>{
    var totalResult = 0
    homePage.getPriceText().each(($el, index, $list)=>{
      const priceText = $el.text()
      const price = priceText.split(" ")
      const priceInt = price[1].trim()
      totalResult = Number(totalResult) + Number(priceInt)
      cy.log(totalResult)
    })

    productPage.getTotalAmount().then(function(element){
      var totalAmount = element.text().split(" ")
      totalAmount = totalAmount[1].trim()
      expect(totalResult).to.equal(Number(totalAmount))
    })
})

Then("select the country submit and verify the success message", ()=>{
    productPage.getCheckoutBtnOnAnotherPage().click()
    productPage.getCountryText().type('Russia')
    Cypress.config('defaultCommandTimeout', 8000)
    productPage.getCountryOption().click()
    productPage.getCheckBox().click()
    productPage.getPurchaseBtn().click()

    productPage.getSuccessMsg().then(function(element){
      const actualText = element.text()
      expect(actualText.includes('Success')).to.be.true
    })
})