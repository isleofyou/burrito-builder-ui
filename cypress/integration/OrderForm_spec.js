describe('Burrito builder app test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/v1/orders', {
      fixture: 'orders.json'
    })
    cy.visit('http://localhost:3000');
  })

  it('As a user, I should not be able to submit an order until a name is entered and at least 1 ingredient is chosen', () => {
    cy.get('input')
      .type('david')
      .get('button')
      .first().click()
      .get('button').contains('Submit Order')
      .should('exist')
    })

  it('As a user, I should see order instructions prior to selection', () => {
    cy.get('p')
      .contains('Order: Name and at least 1 ingredient required')
  })

  it('As a user, I should be able to see a new order once it is submitted', () => {
    cy.get('input')
    .type('david')
    .get('button')
    .first().click()
    .get('button').contains('Submit Order').click()
    .get('div[class="order"]')
    .should('have.length', 4)
  })

  it('As a user, I should be able to select multiple ingredients for my order', () => {
    cy.get('input')
    .type('david')
    .get('button')
    .first().click()
    .get('button').contains('steak').click()
    .get('button').contains('lettuce').click()
    .get('button').contains('sour cream').click()
    .get('button').contains('Submit Order').click()
    .get('div[class="order"]')
    .should('have.length', 4)
  })

  it('As a user, I should be able to create multiple orders', () => {
    cy.get('input')
    .type('david')
    .get('button')
    .first().click()
    .get('button').contains('steak').click()
    .get('button').contains('lettuce').click()
    .get('button').contains('sour cream').click()
    .get('button').contains('Submit Order').click()
    .get('input')
    .type('lydia')
    .get('button')
    .first().click()
    .get('button').contains('carnitas').click()
    .get('button').contains('lettuce').click()
    .get('button').contains('pico de gallo').click()
    .get('button').contains('Submit Order').click()
    .get('div[class="order"]')
    .should('have.length', 5)
  })
  
})