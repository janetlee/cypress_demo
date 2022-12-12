describe('AirBnB Login', () => {
  it('has login by phone number', () => {
    cy.visit('https://www.airbnb.com', {
      headers: {
        "Accept": "application/json, text/plain, */*",
        "User-Agent": 'axios/0.18.0',
      },
      failOnStatusCode: false,
      timeout: 60000
    })
    cy.get('[data-testid="cypress-headernav-profile"]')
      .should('be.visible').click()
    cy.contains('Log in')
      .should('be.visible').click()
    cy.get('[data-testid="login-signup-countrycode"]')
      .should('be.visible')
    cy.get('[data-testid="login-signup-countrycode"]')
      .find(':selected')
      .contains('United States')
    cy.get('[data-testid="login-signup-phonenumber"]')
      .type(Cypress.env('phone'))
    cy.get('[data-testid="signup-login-submit-btn"]')
      .should('be.visible').click()
    cy.contains('Security check')
      .should('be.visible')
  });
})