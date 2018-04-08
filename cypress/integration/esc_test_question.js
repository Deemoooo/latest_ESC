/*
This end-to-end test suite for our ESC project tests the following:
- Login for prof account
- Adding a quiz via prof account, then validating the visibility of the quiz in student account.

Important notes:
- A test quiz added by this test suite is *not deleted* since there is no deletion functionality.
  - Set REALLY_ADD_QUIZ to true or false to control whether a quiz is really created or not.
*/

//======================
// Config
//======================
const PROF_USER = 'profwn@gmail.com'
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
  // Add Question
  //======================
  context('Add Question', () => {

    it('Is on feature page', () => {
      cy.url().should('includes', '/feature')
    })

    it('Opens Ask Question interface', () => {
      cy.get('.btn').contains('Ask Questions').click()
    })

    it('Has 2 fields to fill', () => {
      cy.contains('Ask Questions').children('div').should('have.length', 2)
    })

    it('Fills in questions', () => {
      // NOTE: Use more identifiable classes in *source code*!
      cy.get(':nth-child(2) > #username').type('Post questions to professor test')
    })

    it('Clicks submit', () => {
      if (false) cy.contains('Submit').click()
    })

  })

  //======================
  // Verify Question
  //======================
  context('Verify question was added', () => {

    it('Logs in as professor', () => {
      cy.fullLogin(PROF_USER, PROF_PASS)
    })

    it('Is on feature page', () => {
      cy.url().should('includes', '/feature')
    })

    it('Opens Review Feedback interface', () => {
      cy.get('.btn').contains('Review Feedback').click()
    })

    // HACK: FIX THIS!!!
    // Bug: The quizzes don't show up until we exit and re-enter the quiz interface.
    it('Exit and reopen feedback interface', () => {
      cy.get('.btn').contains('Back').click()
      cy.get('.btn').contains('Review Feedback').click()
    })

    it('Has the newly added question', () => {
      cy.contains('Post questions to professor test')
      cy.contains('Page of slides: 1')
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