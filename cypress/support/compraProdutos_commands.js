/// <reference types="cypress"/>

Cypress.Commands.add('compraProdutosComSucesso',()=>{
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()

})