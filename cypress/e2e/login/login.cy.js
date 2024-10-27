/// <reference types="cypress"/>

describe('Teste Funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.login('standard_user','secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    it('Deve realizar o usuario Incorreto', () => {
        cy.login('incorreto','secret_sauce')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Deve realizar a senha Incorreto', () => {
        cy.login('standard_user','invalida')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
});