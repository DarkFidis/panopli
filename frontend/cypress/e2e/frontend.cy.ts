// @ts-ignore
describe('Frontend app e2e test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('navbar', () => {
    cy.get('nav ul li').should('have.length', 4)
  })
  it('map section', () => {
    cy.server()
    cy.route({
      method: 'POST',
      response: [
        {"location":{"type":"Point","coordinates":[48.86172,2.342443]},"properties":{"address":{"street":"121 Rue Saint-Honoré","postalCode":"75001","city":"Paris"},"website":"https://www.yamtcha.com/","type":"b","name":"Yam'Tcha","rating":4.6},"type":"Feature"},
        {"location":{"type":"Point","coordinates":[48.86339,2.348279]},"properties":{"address":{"street":"17 Rue du Cygne","postalCode":"75001","city":"Paris"},"website":"http://www.reset.bar/","type":"a","name":"Reset","rating":4.5},"type":"Feature"},
        {"location":{"type":"Point","coordinates":[48.86352,2.352512]},"properties":{"address":{"street":"203 Rue Saint-Martin","postalCode":"75003","city":"Paris"},"website":"www.arhum.fr/","type":"b","name":"A'Rhum","rating":4.8},"type":"Feature"}
      ],
      url: /api\/places/
    }).as('nearRequest')
    cy.get('input[name=maxDistance]').clear().type('1000')
    cy.wait(500).get('#map').click(475, 250)
    cy.get('form button').click()
    cy.wait('@nearRequest')
    cy.get('.leaflet-marker-pane img').should('have.length', 4)
  })
})
