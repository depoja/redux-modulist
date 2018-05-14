describe("App: Creating Todos", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Todos successfully created for each instance", () => {
    cy.get("input").each((el, i) => {
      const todo = `Todo ${i}`;

      cy
        .wrap(el)
        .type(todo)
        .should("have.value", todo) // check if input value is reflected
        .type("{enter}");

      cy.get("ul > *").contains(todo);
    });
  });
});

describe("App: Deleting Todos", () => {
  beforeEach(() => {
    cy.visit("/");
  });
});
