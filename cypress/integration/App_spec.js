describe('Burrito builder app test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/v1/orders', {
      fixture: 'orders.json'
    })
    cy.visit('http://localhost:3000');
  })


  it('As a user, when I visit the homepage I should see the app name', () => {
    cy.get('header')
      .should('have.length', 1)
      .contains('Burrito Builder')
  });

  it('As a user, when I visit the homepage I should see an order form', () => {
    cy.get('input')
      .should('have.length', 1)
      .get('button')
      .should('have.length', 12)
  });

  it('As a user, when I visit the homepage I should see existing orders', () => {
    cy.get('div[class="order"]')
      .should('have.length', 3)
  });

  it('As a user, I should only see valid orders that contain a name and at least one ingredient', () => {
    cy.get('div[class="order"]')
      .first()
      .get('h3')
      .should('exist')
      .get('ul')
      .should('exist')
  })
})