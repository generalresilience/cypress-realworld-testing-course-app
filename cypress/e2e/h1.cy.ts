describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get("[data-test=moje-headings]").contains("Testing Next.js")
  })
})