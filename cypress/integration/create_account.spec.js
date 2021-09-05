/// <reference types="Cypress"/>

import { CreateAccount } from "../pageObjects/CreateAccount"
import { MainPage } from "../PageObjects/MainPage";

const createAccount = new CreateAccount
const mainPage = new MainPage

describe("Create account test suite", () => {
  
    var testData;
    before(function() {
        cy.fixture("account_creation").then(function(data){
            testData = data
        })
    })

    beforeEach(() => {
        createAccount.enterEmailToCreateAccount(testData.email)
    })

    it('Create account without first name test', () => {
        createAccount.selectTitle(testData.sexMr) 
        createAccount.enterLastName(testData.lastName)
        createAccount.enterPassword(testData.password)
        createAccount.enterAddress1(testData.address)
        createAccount.enterCity(testData.city)
        createAccount.selectState(testData.state)
        createAccount.enterPostcode(testData.postcode)
        createAccount.enterMobilePhone(testData.mobilePhone)
        createAccount.clickRegisterButton()
        cy.get(".alert.alert-danger").contains("firstname").should("be.visible")
    })

    it('Create account without last name test', () => {
        createAccount.selectTitle(testData.sexMr)
        createAccount.enterFirstName(testData.firstName)
        createAccount.enterPassword(testData.password)
        createAccount.enterAddress1(testData.address)
        createAccount.enterCity(testData.city)
        createAccount.selectState(testData.state)
        createAccount.enterPostcode(testData.postcode)
        createAccount.enterMobilePhone(testData.mobilePhone)
        createAccount.clickRegisterButton()
        cy.get(".alert.alert-danger").contains("lastname").should("be.visible")
    })

    it('Create account witout email test', () => {
        createAccount.selectTitle(testData.sexMr)
        createAccount.enterFirstName(testData.firstName)
        createAccount.enterLastName(testData.lastName)
        createAccount.clearEmailField()
        createAccount.enterPassword(testData.password)
        createAccount.enterAddress1(testData.address)
        createAccount.enterCity(testData.city)
        createAccount.selectState(testData.state)
        createAccount.enterPostcode(testData.postcode)
        createAccount.enterMobilePhone(testData.mobilePhone)
        createAccount.clickRegisterButton()
        cy.get(".alert.alert-danger").contains("email").should("be.visible")
    })

    it('Create account witout password test', () => {
        createAccount.selectTitle(testData.sexMr)
        createAccount.enterFirstName(testData.firstName)
        createAccount.enterLastName(testData.lastName)
        createAccount.enterAddress1(testData.address)
        createAccount.enterCity(testData.city)
        createAccount.selectState(testData.state)
        createAccount.enterPostcode(testData.postcode)
        createAccount.enterMobilePhone(testData.mobilePhone)
        createAccount.clickRegisterButton()
        cy.get(".alert.alert-danger").contains("passwd").should("be.visible")
    })

    it('Create account with future date of birth test', () => {
        createAccount.selectTitle(testData.sexMr)
        createAccount.enterFirstName(testData.firstName)
        createAccount.enterLastName(testData.lastName)
        createAccount.enterPassword(testData.password)
        createAccount.selectDayOfBirth(testData.day)
        createAccount.selectMonthOfBirth(testData.month)
        createAccount.selectYearOfBirth(testData.futureDate)
        createAccount.enterAddress1(testData.address)
        createAccount.enterCity(testData.city)
        createAccount.selectState(testData.state)
        createAccount.enterPostcode(testData.postcode)
        createAccount.enterMobilePhone(testData.mobilePhone)
        createAccount.clickRegisterButton()
        cy.get(".alert.alert-danger").contains("date of birth").should("be.visible")
    })

    it('Create account with empty First name field in Address section test', () => {
        createAccount.selectTitle(testData.sexMr)
        createAccount.enterFirstName(testData.firstName)
        createAccount.enterLastName(testData.lastName)
        createAccount.enterPassword(testData.password)
        createAccount.clearFirstNameInAddress()
        createAccount.enterAddress1(testData.address)
        createAccount.enterCity(testData.city)
        createAccount.selectState(testData.state)
        createAccount.enterPostcode(testData.postcode)
        createAccount.enterMobilePhone(testData.mobilePhone)
        createAccount.clickRegisterButton()
        cy.get(".alert.alert-danger").contains("firstname").should("be.visible")
    })

    it('Create account with empty Last name field in Address section test', () => {
        createAccount.selectTitle(testData.sexMr)
        createAccount.enterFirstName(testData.firstName)
        createAccount.enterLastName(testData.lastName)
        createAccount.enterPassword(testData.password)
        createAccount.clearLastNameInAddress()
        createAccount.enterAddress1(testData.address)
        createAccount.enterCity(testData.city)
        createAccount.selectState(testData.state)
        createAccount.enterPostcode(testData.postcode)
        createAccount.enterMobilePhone(testData.mobilePhone)
        createAccount.clickRegisterButton()
        cy.get(".alert.alert-danger").contains("lastname").should("be.visible")
    })

    it('Create account without Address test', () => {
        createAccount.selectTitle(testData.sexMr)
        createAccount.enterFirstName(testData.firstName)
        createAccount.enterLastName(testData.lastName)
        createAccount.enterPassword(testData.password)
        createAccount.enterAddress2(testData.address2)
        createAccount.enterCity(testData.city)
        createAccount.selectState(testData.state)
        createAccount.enterPostcode(testData.postcode)
        createAccount.enterMobilePhone(testData.mobilePhone)
        createAccount.clickRegisterButton()
        cy.get(".alert.alert-danger").contains("address1").should("be.visible")
    })

    it('Create account without City test', () => {
        createAccount.selectTitle(testData.sexMr)
        createAccount.enterFirstName(testData.firstName)
        createAccount.enterLastName(testData.lastName)
        createAccount.enterPassword(testData.password)
        createAccount.enterAddress1(testData.address)
        createAccount.selectState(testData.state)
        createAccount.enterPostcode(testData.postcode)
        createAccount.enterHomePhone(testData.homePhone)
        createAccount.enterMobilePhone(testData.mobilePhone)
        createAccount.clickRegisterButton()
        cy.get(".alert.alert-danger").contains("city").should("be.visible")
    })

    it('Create account without State test', () => {
        createAccount.selectTitle(testData.sexMr)
        createAccount.enterFirstName(testData.firstName)
        createAccount.enterLastName(testData.lastName)
        createAccount.enterPassword(testData.password)
        createAccount.enterAddress1(testData.address)
        createAccount.enterCity(testData.city)
        createAccount.enterPostcode(testData.postcode)
        createAccount.enterMobilePhone(testData.mobilePhone)
        createAccount.clickRegisterButton()
        cy.get(".alert.alert-danger").contains("State").should("be.visible")
    })

    it('Create account without Post code test', () => {
        createAccount.selectTitle(testData.sexMr)
        createAccount.enterFirstName(testData.firstName)
        createAccount.enterLastName(testData.lastName)
        createAccount.enterPassword(testData.password)
        createAccount.enterAddress1(testData.address)
        createAccount.enterCity(testData.city)
        createAccount.selectState(testData.state)
        createAccount.enterMobilePhone(testData.mobilePhone)
        createAccount.clickRegisterButton()
        cy.get(".alert.alert-danger").contains("Zip/Postal code").should("be.visible")
    })

    it('Create account without country test', () => {
        createAccount.selectTitle(testData.sexMr)
        createAccount.enterFirstName(testData.firstName)
        createAccount.enterLastName(testData.lastName)
        createAccount.enterPassword(testData.password)
        createAccount.enterAddress1(testData.address)
        createAccount.enterCity(testData.city)
        createAccount.selectState(testData.state)
        createAccount.enterPostcode(testData.postcode)
        createAccount.selectCountry(testData.invalidCountry)
        createAccount.enterMobilePhone(testData.mobilePhone)
        createAccount.clickRegisterButton()
        cy.get(".alert.alert-danger").contains("Country is invalid").should("be.visible")
    })

    it('Create account without phone numbers test', () => {
        createAccount.selectTitle(testData.sexMr)
        createAccount.enterFirstName(testData.firstName)
        createAccount.enterLastName(testData.lastName)
        createAccount.enterPassword(testData.password)
        createAccount.enterCompany(testData.company)
        createAccount.enterAddress1(testData.address)
        createAccount.enterCity(testData.city)
        createAccount.selectState(testData.state)
        createAccount.enterPostcode(testData.postcode)
        createAccount.clickRegisterButton()
        cy.get(".alert.alert-danger").contains(" phone number").should("be.visible")
    })

    it('Successful account creation test', () => {
        createAccount.selectTitle(testData.sexMr)
        createAccount.enterFirstName(testData.firstName)
        createAccount.enterLastName(testData.lastName)
        createAccount.enterPassword(testData.password)
        createAccount.enterDateOfBirth(testData.day, testData.month, testData.year)
        createAccount.signUpForNewsletter()
        createAccount.checkReceiveSpecialOffers()
        createAccount.enterCompany(testData.company)
        createAccount.enterAddress1(testData.address)
        createAccount.enterAddress2(testData.address2)
        createAccount.enterCity(testData.city)
        createAccount.selectState(testData.state)
        createAccount.enterPostcode(testData.postcode)
        createAccount.enterAddtionalInfo(testData.additionalInfo)
        createAccount.enterHomePhone(testData.homePhone)
        createAccount.enterMobilePhone(testData.mobilePhone)
        createAccount.enterAddressAlias(testData.addressAlias)
        createAccount.clickRegisterButton()
        cy.contains(testData.successRegistrationText).should("be.visible")
        mainPage.logout()
    })

    it('Create account with already registred email test', () => {
        cy.contains(testData.accountAlreadyRegisteredText).should("be.visible")
    })
})