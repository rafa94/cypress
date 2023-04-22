context("Example API Automation test", () => {
  it("Check value of several property", () => {
    cy.request("GET", "https://api.github.com/repos/metrolab/SingleDateAndTimePicker").then((response) => {
      cy.writeFile('cypress/fixtures/response.json', response.body)
      cy.readFile('cypress/fixtures/response.json').then((response) => {
        expect(response).to.have.property('name')
        expect(response).to.have.property('full_name')
        expect(response).to.have.property('id')
        expect(response).to.have.property('owner')
      })
    })
  })

  it("Check that login value is seatcode", () => {
    cy.request("GET", "https://api.github.com/repos/metrolab/SingleDateAndTimePicker").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.owner.login).to.eq("seatcode")
    })
  })
})