describe("Navigation", () => {
  it("404 is accessible", () => {
    cy.visit("/doesnt-exist");
  });

  it("Root Page is accessible", () => {
    cy.visit("/");
  });
});
