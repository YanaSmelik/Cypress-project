export class CreateAccount{

    enterEmailToCreateAccount(email){
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.get("#email_create").type(email)
        cy.get("#SubmitCreate").click()
        return this;
    }

    enterDateOfBirth(day, month, year){
        cy.get("#days").select(day)
        cy.get("#months").select(month)
        cy.get("#years").select(year)
        return this
    }

    selectTitle(sex){
        cy.get("[name='id_gender']").check(sex) 
        return this;
    }

    enterFirstName(firstName){
        cy.get("#customer_firstname").type(firstName)
        return this
    }

    enterLastName(lastName){
        cy.get("#customer_lastname").type(lastName)
        return this
    }

    enterPassword(password){
        cy.get("#passwd").type(password)
        return this
    }

    selectDayOfBirth(day){
        cy.get("#days").select(day)
        return this
    }

    selectMonthOfBirth(month){
        cy.get("#months").select(month)
        return this
    }

    selectYearOfBirth(year){
        cy.get("#years").select(year)
        return this
    }

    signUpForNewsletter(){
        cy.get("#newsletter").check()
        return this
    }

    checkReceiveSpecialOffers(){
        cy.get("#optin").check()
        return this
    }

    enterCompany(company){
        cy.get("#company").type(company)
        return this
    }

    enterAddress1(address1){
        cy.get("#address1").type(address1)
        return this
    }

    enterAddress2(address2){
        cy.get("#address2").type(address2)
        return this
    }

    enterCity(city){
        cy.get("#city").type(city)
        return this
    }

    selectState(state){
        cy.get("#id_state").select(state)
        return this
    }

    enterPostcode(postcode){
        cy.get("#postcode").type(postcode)
        return this
    }

    selectCountry(conutry){
        cy.get("#id_country").select(conutry)
        return this
    }

    enterAddtionalInfo(additionalInfo){
        cy.get("#other").type(additionalInfo)
        return this
    }

    enterHomePhone(homePhone){
        cy.get("#phone").type(homePhone)
        return this
    }

    enterMobilePhone(mobilePhone){
        cy.get("#phone_mobile").type(mobilePhone)
        return this
    }

    enterAddressAlias(addressAlias){
        cy.get("#alias").type(addressAlias)
        return this
    }

    clickRegisterButton(){
        cy.get("#submitAccount").click()
        return this
    }

    clearEmailField(){
        cy.get("#email").clear()
        return this
    }

    clearFirstNameInAddress(){
        cy.get("#firstname").clear()
        return this 
    }

    clearLastNameInAddress(){
        cy.get("#lastname").clear()
        return this
    }

    createBasicAccount(email, sex, firstName, lastName, password, address, city, state, postcode, mobilePhone){
        this.enterEmailToCreateAccount(email)
        this.selectTitle(sex)
        this.enterFirstName(firstName)
        this.enterLastName(lastName)
        this.enterPassword(password)
        this.enterAddress1(address)
        this.enterCity(city)
        this.selectState(state)
        this.enterPostcode(postcode)
        this.enterMobilePhone(mobilePhone)
        this.clickRegisterButton()
        cy.get("[title='Log me out']").should("be.visible")
        return this
    }
}