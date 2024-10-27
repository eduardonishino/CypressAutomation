describe('API - Teste funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.login_api('POST', 'http://localhost:3000/login', 'fulano@qa.com', 'teste')
        cy.retorno('200', 'Login realizado com sucesso')
    });
});

describe('Deve validar senha incorreta', () => {
    it('Deve realizar a senha incorreta', () => {
        cy.login_api_erro('POST', 'http://localhost:3000/login', 'fulano@qa.com', 'invalido')
        cy.retorno('401', 'Email e/ou senha inválidos')

    });
});