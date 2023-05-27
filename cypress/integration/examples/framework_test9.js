//cypress - Spec
/// <reference types="Cypress" />
import HomePage from "../pageObjects/homePage"
import ProductPage from "../pageObjects/productPage"

describe('My 9th - framework', () => {

  before(function(){
    cy.fixture('example').then((data) => {
      this.data = data
    })
  })
    
  it('framework', function () {
    const homePage = new HomePage()
    const productPage = new ProductPage()

    cy.visit(Cypress.env('url')+'/angularpractice/')
    //expect(this.data.name).to.equal("Anna")
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
    

    productPage.getCheckoutBtnOnAnotherPage().click()
    productPage.getCountryText().type('Russia')
    Cypress.config('defaultCommandTimeout', 8000)
    productPage.getCountryOption().click()
    productPage.getCheckBox().click()
    productPage.getPurchaseBtn().click()
    //productPage.getSuccessMsg().contains('Success! Thank you! Your order will be delivered in next few weeks :-).')

    productPage.getSuccessMsg().then(function(element){
      const actualText = element.text()
      expect(actualText.includes('Success')).to.be.true
    })
  })

})