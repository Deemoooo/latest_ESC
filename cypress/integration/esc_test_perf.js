/*
This end-to-end test suite for our ESC project tests the following:
- Login for prof account
- checking the performance analysis of the students regarding quizzes
*/

//======================
// Config
//======================
const REALLY_ADD_QUIZ = false
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
  // Check Performance
  //======================
  context('Check Performance', () => {

    it('Is on feature page', () => {
      cy.url().should('includes', '/feature')
    })

    it('Opens Performance interface', () => {
      cy.get('.btn').contains('Student').click()
    })

  })

  //======================
  // Verify Performance
  //======================
  context('Verify performance data', () => {

    it('Exit and reopen performance interface', () => {
      cy.get('.btn').contains('Back').click()
      cy.get('.btn').contains('Get Quiz').click()
    })

    it('Has the performance records', () => {
      cy.contains('Mike')
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