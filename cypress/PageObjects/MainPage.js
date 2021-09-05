export class MainPage {

    addProductToCart(productNumber){
        cy.get(`#homefeatured li:nth-of-type(${productNumber})`).trigger('mouseover')
        cy.get("[data-id-product='1']:visible").click()
        cy.contains("Product successfully added to your shopping cart").should("be.visible")
        return this
    }

    clickProceedToCheckoutButton(){
        cy.get(".btn.btn-default.button.button-medium").click()
        cy.contains("Shopping-cart summary").should("be.visible")
        return this
    }

    logout(){
        cy.get("[title='Log me out']").click()
        cy.contains("Create an account").should("be.visible")
    }
}