/// <reference types="Cypress"/>
import { Login }  from "../pageObjects/Login";
import { MainPage } from "../PageObjects/MainPage";

const login = new Login;
const mainPage = new MainPage;

describe('Log in flows test suite', () => {

    var testData;
    before(function() {
        cy.fixture("login").then(function(data){
            testData = data
        })
    })

    beforeEach(() => {
        cy.visit("/index.php?controller=authentication&back=my-account")
    })

    it('Successful log in test', () => {
        login.enterEmailAddress(testData.email)
        login.enterPassword(testData.password)
        login.submitLogin()
        cy.contains(testData.successRegistrationText).should("be.visible")
        mainPage.logout()
    })

   it('Log in with wrong email test', () =>{
        login.enterEmailAddress(testData.wrongEmail)
        login.enterPassword(testData.password)
        login.submitLogin()
        cy.get(".alert.alert-danger").contains("Authentication failed").should("be.visible")
    })

   it('Log in with wrong password test', () => {
        login.enterEmailAddress(testData.email)
        login.enterPassword(testData.wrongPassword)
        login.submitLogin()
        cy.get(".alert.alert-danger").contains("Authentication failed").should("be.visible")
    })

    it('Log in without email test', () => {
        login.enterPassword(testData.password)
        login.submitLogin()
        cy.get(".alert.alert-danger").contains("An email address required").should("be.visible")
    })

    it('Log in without password test', () => {
        login.enterEmailAddress(testData.email)
        login.submitLogin()
        cy.get(".alert.alert-danger").contains("Password is required.").should("be.visible")
    })

    it('Log without email and password test', () => {
        login.submitLogin()
        cy.get(".alert.alert-danger").contains("An email address required").should("be.visible")
    })
})