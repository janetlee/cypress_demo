describe('AirBnB Search', () => {
  xit('finds Barcelona Spain in July 2023 only', () => {
    cy.visit('https://www.airbnb.com', {
      headers: {
        "Accept": "application/json, text/plain, */*",
        "User-Agent": 'axios/0.18.0',
      },
      failOnStatusCode: false,
      timeout: 60000
    })

    cy.get('[data-index="0"] > .f1xx50dm')
      .parent().click({ force: true })
    cy.get('[data-testid=structured-search-input-field-query]')
      .should('not.be.visible').invoke('show')
    cy.contains('Anywhere')
      .should('be.visible')
      .click({ force: true })
      .wait(1000)

    cy.get('[data-testid=structured-search-input-field-query]')
      .should('be.visible')
      .click({force: true}).invoke('show')
      .type('Barcelona, Spain{enter}')

    cy.get('[data-testid="header-tab-search-block-tab-STAYS"]', { timeout: 10000 })
      .should('be.exist').invoke('show')
    cy.get('[data-testid="option-0"] > ._1825a1k > ._r1t6ga').as('firstEntry')
      .invoke('show').should('exist')

    cy.get('[id="bigsearch-query-location-listbox"]')
      .should('be.exist')
      .children().children().should('have.length', 5)

    cy.get('[data-testid="option-0"]')
      .children().should('have.length', 2)

    cy.contains('Any week')
      .should('be.visible')
      .click({ force: true })
      .wait(1000)

    cy.get('[data-testid="structured-search-input-field-split-dates-0"] > .c11if3v5 > .p1kudodg')
      .should('be.exist')

    cy.get('.\_qz9x4fc svg').click({ force: true }).wait(500)
    cy.get('.\_qz9x4fc svg').click({ force: true }).wait(500)
    cy.get('.\_qz9x4fc svg').click({ force: true }).wait(500)
    cy.get('.\_qz9x4fc svg').click({ force: true }).wait(500)
    cy.get('.\_qz9x4fc path').click({ force: true }).wait(500)
    cy.get('.\_qz9x4fc path').click({ force: true }).wait(500)
    cy.get('[data-testid="calendar-day-07/02/2023"]').click({ force: true })
    cy.get('[data-testid="calendar-day-07/08/2023"]').click({ force: true })
    cy.get('[data-testid="structured-search-input-search-button"]')
      .click({ force: true })
      .wait(1000)

    cy.get('.f19g2zq0:nth-child(2) > .f1xx50dm').as('destination')
      .should('be.visible')
      .should('have.text', 'Barcelona')
  });


  xit('searches only 2 adults, 2 kids, 1 dog in July 2023', () => {
    cy.visit('https://www.airbnb.com', {
      headers: {
        "Accept": "application/json, text/plain, */*",
        "User-Agent": 'axios/0.18.0',
      },
      failOnStatusCode: false,
      timeout: 60000
    })

    cy.contains('Add guests')
      .should('be.exist').invoke('show')
      .click({ force: true })
    cy.get('[data-index="2"]')
      .should('be.visible')
      .click({ force: true })
      .invoke('show')

     cy.get('[data-testid=structured-search-input-field-query]')
      .should('be.exist')
      .click({force: true}).invoke('show')
      .type('Barcelona, Spain{enter}')   
    cy.get('.db6tyt8:nth-child(1) .\_bi7q1f > .ioa2q3t').should('be.exist').click({ force: true })
    cy.get('.f1rzp9sv').should('be.visible').click({ force: true })
    cy.get('[data-testid="stepper-adults-increase-button"] svg')
      .should('be.visible').click({ force: true })
    cy.get('[data-testid="stepper-adults-value"]')
      .should('have.text', 1)
    cy.get('[data-testid="stepper-adults-increase-button"] svg')
      .should('be.visible').click({ force: true })
    cy.get('[data-testid="stepper-adults-value"]')
      .should('have.text', 2)
    cy.get('[data-testid="stepper-children-increase-button"] svg')
      .should('be.visible').click({ force: true })
    cy.get('[data-testid="stepper-children-value"]')
      .should('have.text', 1)
    cy.get('[data-testid="stepper-pets-increase-button"] > .\_8ovatg')
      .should('be.visible').click({ force: true })
    cy.get('[data-testid="stepper-pets-value"]')
      .should('have.text', 1)
    cy.get('[data-testid="stepper-children-increase-button"] svg')
      .should('be.visible').click({ force: true })
    cy.get('[data-testid="stepper-children-value"]')
      .should('have.text', 2)
   cy.get('[data-testid="structured-search-input-search-button"]')
      .should('be.visible').click({ force: true })
  });

  it('finds Barcelona Spain in July 2023 with 2 adults, 2 children, 1 pet', () => {
    cy.visit('https://www.airbnb.com', {
      headers: {
        "Accept": "application/json, text/plain, */*",
        "User-Agent": 'axios/0.18.0',
      },
      failOnStatusCode: false,
      timeout: 60000
    })

    cy.get('[data-index="0"] > .f1xx50dm')
      .parent().click({ force: true })
    cy.get('[data-testid=structured-search-input-field-query]')
      .should('not.be.visible').invoke('show')
    cy.contains('Anywhere')
      .should('be.visible')
      .click({ force: true })
      .wait(1000)

    cy.get('[data-testid=structured-search-input-field-query]')
      .should('be.visible')
      .click({force: true}).invoke('show')
      .type('Barcelona, Spain{enter}')

    cy.get('[data-testid="header-tab-search-block-tab-STAYS"]', { timeout: 10000 })
      .should('be.exist').invoke('show')
    cy.get('[data-testid="option-0"] > ._1825a1k > ._r1t6ga').as('firstEntry')
      .invoke('show').should('exist')

    cy.get('[id="bigsearch-query-location-listbox"]')
      .should('be.exist')
      .children().children().should('have.length', 5)

    cy.get('[data-testid="option-0"]')
      .children().should('have.length', 2)

    cy.contains('Any week')
      .should('be.visible')
      .click({ force: true })
      .wait(1000)

    cy.get('[data-testid="structured-search-input-field-split-dates-0"] > .c11if3v5 > .p1kudodg')
      .should('be.exist')

    cy.get('.\_qz9x4fc svg').click({ force: true }).wait(500)
    cy.get('.\_qz9x4fc svg').click({ force: true }).wait(500)
    cy.get('.\_qz9x4fc svg').click({ force: true }).wait(500)
    cy.get('.\_qz9x4fc svg').click({ force: true }).wait(500)
    cy.get('.\_qz9x4fc path').click({ force: true }).wait(500)
    cy.get('.\_qz9x4fc path').click({ force: true }).wait(500)
    cy.get('[data-testid="calendar-day-07/02/2023"]').click({ force: true })
    cy.get('[data-testid="calendar-day-07/08/2023"]').click({ force: true })
    // cy.get('.db6tyt8:nth-child(1) .\_bi7q1f > .ioa2q3t')
    cy.get('.p1kudodg')
      .should('be.visible').click({ force: true })
    // cy.get('.f1rzp9sv').should('be.visible').click({ force: true })
    cy.get('[data-testid="stepper-adults-increase-button"] svg')
      .should('be.visible').click({ force: true })
    cy.get('[data-testid="stepper-adults-value"]')
      .should('have.text', 1)
    cy.get('[data-testid="stepper-adults-increase-button"] svg')
      .should('be.visible').click({ force: true })
    cy.get('[data-testid="stepper-adults-value"]')
      .should('have.text', 2)
    cy.get('[data-testid="stepper-children-increase-button"] svg')
      .should('be.visible').click({ force: true })
    cy.get('[data-testid="stepper-children-value"]')
      .should('have.text', 1)
    cy.get('[data-testid="stepper-pets-increase-button"] > .\_8ovatg')
      .should('be.visible').click({ force: true })
    cy.get('[data-testid="stepper-pets-value"]')
      .should('have.text', 1)
    cy.get('[data-testid="stepper-children-increase-button"] svg')
      .should('be.visible').click({ force: true })
    cy.get('[data-testid="stepper-children-value"]')
      .should('have.text', 2)
    cy.get('[data-testid="structured-search-input-search-button"]')
      .click({ force: true })
      .wait(1000)

    cy.get('.f19g2zq0:nth-child(2) > .f1xx50dm').as('destination')
      .should('be.visible')
      .should('have.text', 'Barcelona')
  });
})
