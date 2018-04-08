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
const REALLY_ADD_QUIZ = false
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

    it('Logs into prof account', () => {
      // Wait for React to be ready
      cy.wait(500)

      // Fill in username
      cy.get('#username').type(PROF_USER)
      
      // Fill in password
      cy.get('#password').type(PROF_PASS)

      // Click log in
      cy.get('.btn').click()
    })

    it('Is logged into prof account', () => {
      // Check if URL has changed
      cy.url().should('includes', '/feature')
    })

  })

  //======================
  // Add Quiz
  //======================
  context('Add Quiz', () => {

    it('Is on feature page', () => {
      cy.url().should('includes', '/feature')
    })

    it('Opens Add Quiz interface', () => {
      cy.get('.btn').contains('Push Quizzes').click()
    })

    it('Has 6 fields to fill', () => {
      cy.contains('Enter Question Here').children('div').should('have.length', 6)
    })

    it('Fills in test quiz', () => {
      // NOTE: Use more identifiable classes in *source code*!
      cy.get(':nth-child(2) > #username').type('Test question')
      cy.get(':nth-child(5) > #username').type('Test option 1')
      cy.get(':nth-child(6) > #username').type('Test option 2')
      cy.get(':nth-child(9) > #username').type('Test option 3')
      cy.get(':nth-child(10) > #username').type('Test option 4')
      
    })

    it('Clicks submit', () => {
      if (REALLY_ADD_QUIZ) cy.contains('Submit').click()
    })

  })

  //======================
  // Verify Quiz
  //======================
  context('Verify quiz was added', () => {

    it('Logs in as student', () => {
      cy.fullLogin(STUDENT_USER, STUDENT_PASS)
    })

    it('Is on feature page', () => {
      cy.url().should('includes', '/feature')
    })

    it('Opens Get Quiz interface', () => {
      cy.get('.btn').contains('Get Quiz').click()
    })

    // HACK: FIX THIS!!!
    // Bug: The quizzes don't show up until we exit and re-enter the quiz interface.
    it('Exit and reopen quiz interface', () => {
      cy.get('.btn').contains('Back').click()
      cy.get('.btn').contains('Get Quiz').click()
    })

    it('Has the newly added quiz', () => {
      cy.contains('Option 1: Test option 1')
      cy.contains('Option 2: Test option 2')
      cy.contains('Option 3: Test option 3')
      cy.contains('Option 4: Test option 4')
    })

    it('Exit the Get Quiz interface', () => {
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