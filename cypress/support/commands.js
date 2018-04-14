// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

 Cypress.Commands.add("fullLogin", (username, password) => {
    // Go to login page
    cy.visit('localhost:3000')

    // Wait for React to be ready
    cy.wait(500)

    // Fill in username
    cy.get('#username').type(username)
    
    // Fill in password
    cy.get('#password').type(password)

    // Click log in
    cy.get('.btn').click()
 })