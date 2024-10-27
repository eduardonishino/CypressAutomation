# Projeto Cypress

Este projeto utiliza o Cypress para realizar testes de automação end-to-end (E2E) no fluxo de login e compra de produtos em uma aplicação de e-commerce. O fluxo simula o usuário realizando login e adicionando produtos ao carrinho, validando o comportamento esperado da interface e da API.

Funcionalidades Testadas
Autenticação do Usuário:
Login realizado via API, utilizando um endpoint específico para autenticação. Este método permite que o teste E2E inicie com o usuário autenticado, agilizando o processo e garantindo a confiabilidade do fluxo de autenticação.
Fluxo de Compra E2E:
Simulação da navegação do usuário até a página de produtos.
Seleção de três produtos distintos e adição deles ao carrinho.
Validação de que os itens foram corretamente adicionados e são exibidos no carrinho com os detalhes de preço e quantidade.
Finalização da Compra:
Confirmação do carrinho com os itens selecionados.
Simulação do processo de checkout e conclusão da compra.
Estrutura do Teste E2E com Cypress
O código de teste no Cypress segue uma estrutura modular, garantindo legibilidade e fácil manutenção. Os arquivos principais incluem:

loginApi.cy.js: Script responsável por realizar a autenticação via API. Este arquivo envia uma requisição ao endpoint de login com credenciais de teste e armazena o token de autenticação para as requisições subsequentes.
compraE2E.cy.js: Script que realiza o fluxo de compra E2E, utilizando o token gerado no login. A navegação entre páginas, adição de itens ao carrinho e finalização do pedido são validadas neste arquivo.

Faça o npm install do node_modules



