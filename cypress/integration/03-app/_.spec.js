describe("App: Rendering", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Two instances are rendered", () => {
    cy.get("header:contains(todos_)").should("have.length", 2);

    cy.server();
    cy.route("GET", "/api/todos", [{ id: 1, name: "Todo One" }]);
  });
});

describe("App: Creating Todo", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Accepts Input", () => {
    cy.get("input").each((el, i) => {
      const value = `Todo ${i}`;
      cy
        .wrap(el)
        .type(value)
        .should("have.value", value);
    });
  });
});
