# Order Processing API Suite

## 📖 Descrição
Order Processing API Suite é um conjunto de ferramentas para testar e validar uma API de processamento de pedidos. Ele inclui:
- Uma API desenvolvida em **Express**.
- Testes automatizados com **Cypress** e **Postman**.
- Integração contínua configurada com **GitHub Actions**.

## 📂 Estrutura do Projeto
A estrutura do projeto está organizada da seguinte forma:

- `api/`
  - `server.js`: Implementação da API de pedidos.
- `cypress/`
  - `e2e/`
    - `features/`: Arquivos de testes em formato Cucumber.
    - `fixtures/`: Dados de teste.
    - `reports/`: Relatórios de testes Cypress.
    - `screenshots/`: Capturas de tela dos testes.
    - `support/`
      - `commands.js`: Comandos personalizados do Cypress.
      - `e2e.js`: Configuração global do Cypress.
  - `cypress.config.js`: Configuração do Cypress.
- `postman/`
  - `Pedidos.postman_collection.json`: Coleção de requisições Postman.
  - `Pedidos.postman_environment.json`: Ambiente Postman.
- `.github/`
  - `workflows/ci.yml`: Configuração de integração contínua.
- `package.json`: Configuração do projeto Node.js.
- `README.md`: Documentação do projeto.

## 🚀 Funcionalidades
### API (Express)
A API oferece as seguintes rotas:
- `POST /pedido`: Cria um novo pedido.
- `GET /pedidos`: Lista todos os pedidos.
- `GET /pedido/:id`: Consulta um pedido por ID.
- `PUT /pedido/:id`: Atualiza um pedido por ID.
- `DELETE /pedido/:id`: Remove um pedido por ID.
- `DELETE /pedidos`: Remove todos os pedidos.

### Testes (Cypress)
Os testes automatizados estão organizados em:
- **Arquivos `.feature`**: Define cenários de teste.
- **Arquivos `.js`**: Implementa os passos dos testes.

### Postman
- **Coleção**: `Pedidos.postman_collection.json` contém requisições para testar a API.
- **Ambiente**: `Pedidos.postman_environment.json` define variáveis de ambiente para os testes.

## 🛠️ Instalação
### Pré-requisitos
Certifique-se de ter instalado:
- **Node.js** (versão 14 ou superior).
- **npm** ou **yarn**.
- **Git**.

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/gsaijo/OrderProcessing_API_Suite.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd OrderProcessing_API_Suite
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## 🧪 Executando os Testes
### Cypress
1. Inicie o servidor da API:
   ```bash
   npm run start:api
   ```
2. Execute os testes do Cypress:
   ```bash
   npx run cy:open
   ```

### Postman
1. Importe a coleção `Pedidos.postman_collection.json` no Postman.
2. Configure o ambiente usando `Pedidos.postman_environment.json`.
3. Execute as requisições para validar a API.

## 📦 Deploy e CI/CD
A integração contínua está configurada com **GitHub Actions**:
- O arquivo `.github/workflows/ci.yml` executa testes automatizados e validações a cada push.

## 👤 Autor
Desenvolvido por [Gustavo Saijo](https://github.com/gsaijo).
