class HomePage {
    getEditBox(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBlinding(){
        return cy.get(':nth-child(4) > .ng-pristine')
    }

    getGender(){
        return cy.get("select")
    }
    getEntrepreneur(){
        return cy.get('#inlineRadio3')
    }
    getPriceText(){
        return cy.get('td:nth-of-type(4) > strong')
    }
    getShopBtn(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage