describe("404: Rendering", () => {
  beforeEach(() => {
    cy.visit("/doesnt-exist");
  });

  it("Error Message is rendered", () => {
    cy.contains("Page not found");
  });
});
