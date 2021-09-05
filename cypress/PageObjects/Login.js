export class Login{

    enterEmailAddress(email){
        cy.get("#email").type(email)
        return this
    }

    enterPassword(password){
        cy.get("#passwd").type(password)
        return this
    }

    submitLogin(){
        cy.get("#SubmitLogin").click()
        return this
    }

    fullLogin(email, password){
        this.enterEmailAddress(email)
        this.enterPassword(password)
        this.submitLogin()
        cy.get("[title='Log me out']").should("be.visible")
        return this
    }
}