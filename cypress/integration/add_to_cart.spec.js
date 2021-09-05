/// <reference types="Cypress"/>

import { AddToCart } from "../PageObjects/AddToCart"
import { MainPage } from "../PageObjects/MainPage"
import { Login } from "../pageObjects/Login"
import { CreateAccount } from "../pageObjects/CreateAccount"
import { Catalog } from "../PageObjects/Catalog"

const addToCart = new AddToCart
const mainPage = new MainPage
const login = new Login
const createAccount = new CreateAccount
const catalog = new Catalog

describe("Add to cart test suite", () => {

    var testLoginData
    var testCreateAccountData
    var testAddToCartData

    before(function () {
        cy.fixture("login").then(function (data){
            testLoginData = data
        })

        cy.fixture("account_creation").then(function (data){
            testCreateAccountData = data
        })

        cy.fixture("add_to_cart").then(function (data){
            testAddToCartData = data
        })
    })

    beforeEach(() => {
        cy.visit("/index.php")
    })

    it("Add a product to the cart without being logged in test", () => {
        mainPage.addProductToCart(testAddToCartData.productNumber)
        mainPage.clickProceedToCheckoutButton()
        addToCart.clickProcceedButtonInSummary()
        cy.contains("Create an account").should("be.visible")
        login.fullLogin(testLoginData.email, testLoginData.password)
        addToCart.clickProceedButtonInAddress()
        addToCart.tickToScheckBox()
        addToCart.clickProceedButtonInShipping()
        addToCart.selectPayByBankWireOption()
        addToCart.clickConfirmOrderButton()
    })

    it ("Add a product to the cart without having an account test", () => {
        mainPage.addProductToCart(testAddToCartData.productNumber)
        mainPage.clickProceedToCheckoutButton()
        addToCart.clickProcceedButtonInSummary()
        cy.contains("Create an account").should("be.visible")
        createAccount.createBasicAccount(testCreateAccountData.email, 
            testCreateAccountData.sexMr,
            testCreateAccountData.firstName, 
            testCreateAccountData.lastName, 
            testCreateAccountData.password,
            testCreateAccountData.address, 
            testCreateAccountData.city, 
            testCreateAccountData.state, 
            testCreateAccountData.postcode, 
            testCreateAccountData.mobilePhone)
        cy.contains("Shopping-cart summary").should("be.visible")
        addToCart.clickProcceedButtonInSummary()
        addToCart.clickProceedButtonInAddress()
        addToCart.tickToScheckBox()
        addToCart.clickProceedButtonInShipping()
        addToCart.selectPayByCheckOption()
        addToCart.clickConfirmOrderButton()
    })

    it("Add a product to the cart while being logged in test", () => {
        cy.visit("/index.php?controller=authentication&back=my-account")
        login.fullLogin(testLoginData.email, testLoginData.password)
        catalog.clickOnDressesTab()
        catalog.clickOnEveningDressesCategory()
        catalog.clickAddToCartButton()
        catalog.clickProceedToCheckoutButton()
        addToCart.clickProcceedButtonInSummary()
        addToCart.clickProceedButtonInAddress()
        addToCart.tickToScheckBox()
        addToCart.clickProceedButtonInShipping()
        addToCart.selectPayByBankWireOption()
        addToCart.clickConfirmOrderButton()
    })

    afterEach(() => {
        mainPage.logout()
    })
})