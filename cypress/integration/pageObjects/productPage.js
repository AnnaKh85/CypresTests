class ProductPage{

    getCheckoutBtn(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    getCheckoutBtnOnAnotherPage(){
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }
    getCountryText(){
        return cy.get('#country')
    }
    getCountryOption(){
        return cy.get('.suggestions > ul > li > a')
    }
    getCheckBox(){
        return cy.get("[for='checkbox2']")
    }
    getPurchaseBtn(){
        return cy.get("input[type='submit']")
    }
    getSuccessMsg(){
        return cy.get('.alert')
    }
    getTotalAmount(){
        return cy.get('.text-right strong')
    }

}

export default ProductPage