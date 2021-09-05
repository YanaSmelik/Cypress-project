export class AddToCart{

    clickProcceedButtonInSummary(){
        cy.get(".button.btn.btn-default.standard-checkout.button-medium").click()
        return this
    }

    clickProceedButtonInAddress(){
        cy.get("[name='processAddress']").click()
        cy.contains("Choose a shipping option for this address").should("be.visible")
        return this
    }

    tickToScheckBox(){
        cy.get("#cgv").check()
        return this
    }

    clickProceedButtonInShipping(){
        cy.get(".button.btn.btn-default.standard-checkout.button-medium").click()
        cy.contains("Please choose your payment method").should("be.visible")
        return this
    }

    selectPayByBankWireOption(){
        cy.get("[title='Pay by bank wire']").click()
        cy.contains("You have chosen to pay by bank wire. Here is a short summary of your order:").should("be.visible")
        return this
    }

    selectPayByCheckOption(){
        cy.get("[title='Pay by check.']").click()
        cy.contains("You have chosen to pay by check. Here is a short summary of your order:").should("be.visible")
        return this
    }

    clickConfirmOrderButton(){
        cy.get(".button.btn.btn-default.button-medium[type='submit']").click()
        cy.contains("Your order on My Store is complete.").should("be.visible")
        return this
    }
}
