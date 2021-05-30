// https://docs.cypress.io/api/introduction/api.html

describe('e2e testing', () => {
  it('Visit homepage and find correct header', () => {
    cy.visit('/')
    cy.contains('h1', 'Organise projects. Get more done.')
  })
})
