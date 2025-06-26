const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que eu tenho pedidos cadastrados", () => {
  cy.request({
    method: "POST",
    url: "http://localhost:3000/pedido",
    body: {
      cpf: "12345678900",
      itens: ["item1", "item2"],
      total: 350
    }
  });
});

When("eu consulto todos os pedidos", () => {
  cy.request({
    method: "GET",
    url: "http://localhost:3000/pedidos"
  }).as("resposta");
});

Then("o sistema deve retornar todos os pedidos cadastrados", () => {
  cy.get("@resposta").then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body).to.be.an("array");
    expect(res.body.length).to.be.greaterThan(0);
    res.body.forEach(pedido => {
      expect(pedido).to.have.property("id");
      expect(pedido).to.have.property("cpf");
      expect(pedido).to.have.property("itens");
      expect(pedido).to.have.property("total");
    });
  });
});