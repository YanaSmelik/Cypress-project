export class Catalog{

    clickOnDressesTab(){
        cy.get(".sf-menu.clearfix.menu-content.sf-js-enabled.sf-arrows .sf-with-ul[title='Dresses']:visible")
        .click()
        cy.contains("Find your favorites dresses from our wide choice of evening, casual or summer dresses!")
        .should("be.visible")
        return this
    }

    clickOnEveningDressesCategory(){
        cy.get("[title='Browse our different dresses to choose the perfect dress for an unforgettable evening!']:visible")
        .click()
        cy.contains("Browse our different dresses to choose the perfect dress for an unforgettable evening!")
        .should("be.visible")
        return this
    }

    clickAddToCartButton(){
        cy.get("[title='Add to cart']").click()
        cy.contains("Product successfully added to your shopping cart").should("be.visible")
        return this
    }

    clickProceedToCheckoutButton(){
        cy.get("[title='Proceed to checkout']").click()
        cy.get("#total_price").should("contain", "$52.99")
        return this 
    }

}