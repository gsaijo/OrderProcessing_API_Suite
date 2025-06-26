Feature: Pedidos

  Scenario: Listar todos pedidos
    Given que eu tenho pedidos cadastrados
    When eu consulto todos os pedidos
    Then o sistema deve retornar todos os pedidos cadastrados