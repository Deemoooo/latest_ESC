/*
This end-to-end test suite for our ESC project tests the following:
- Login for student account
- adding feeback via student account, then checking feedback via prof account

Important notes:
- 
*/

//======================
// Config
//======================
const PROF_USER = 'wnprof@gmail.com'
const PROF_PASS = '123456'
const STUDENT_USER = 'teststu@gmail.com'
const STUDENT_PASS = '123456'

describe('ESC Tests', () => {

  it('Successfully loads', () => {
    cy.visit('localhost:3000')
  })

  //======================
  // Login
  //======================
  context('Login', () => {

    it('Is on the login page', () =>{
      cy.contains('Please login')
    })

    it('Has username and password fields', () => {
      cy.get('#username')
      cy.get('#password')
    })

    it('Logs into student account', () => {
      // Wait for React to be ready
      cy.wait(500)

      // Fill in username
      cy.get('#username').type(STUDENT_USER)
      
      // Fill in password
      cy.get('#password').type(STUDENT_PASS)

      // Click log in
      cy.get('.btn').click()
    })

    it('Is logged into student account', () => {
      // Check if URL has changed
      cy.url().should('includes', '/feature')
    })

  })

  //======================
  // Add Feedback
  //======================
  context('Add Feedback', () => {

    it('Is on feature page', () => {
      cy.url().should('includes', '/feature')
    })

    it('Opens Give Feedback interface', () => {
      cy.get('.btn').contains('Give Feedback').click()
    })

    it('Has Give Feedback Form', () => {
      cy.contains('Give Feedback!')
    })

    it('Fills in feedback form', () => {
      // NOTE: Use more identifiable classes in *source code*!
      cy.get([style="font-size: 16px; color: rgba(0, 0, 0, 0.6); padding: 0px 24px 24px; box-sizing: border-box; overflow-y: auto; border-top: 1px solid rgb(224, 224, 224); border-bottom: 1px solid rgb(224, 224, 224); max-height: 404px;"])
    })

    it('Clicks submit', () => {
      if (REALLY_ADD_QUIZ) cy.contains('Submit').click()
    })

  })

  //======================
  // Verify Feedback
  //======================
  context('Verify feedback was added', () => {

    it('Logs in as professor', () => {
      cy.fullLogin(PROF_USER, PROF_PASS)
    })

    it('Is on feature page', () => {
      cy.url().should('includes', '/feature')
    })

    it('Opens Review Feedback interface', () => {
      cy.get('.btn').contains('Review Feedback').click()
    })

    it('Exit and reopen feedback interface', () => {
      cy.get('.btn').contains('Back').click()
      cy.get('.btn').contains('Review Feedback').click()
    })

    it('Has the newly added feedback', () => {
      cy.contains('Other: testing feedback')
    })

    it('Exit the Get Feedback interface', () => {
      cy.get('.btn').contains('Back').click()
    })
    
  })

  //======================
  // Sign Out
  //======================
  context('Sign out', () => {
    it('Sign out of account', () => {
      cy.contains('Sign Out').click()
      cy.contains('Please login')
    })
  })

})