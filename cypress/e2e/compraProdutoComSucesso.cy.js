/// <reference types="cypress"/>

describe('Teste E2E -Realizando a compra de produtos com sucesso', () => {
    it('Fluxo da compra de produtos', () => {
        cy.login('standard_user','secret_sauce')

        // Ordenação de produtos de menor para maior valor
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')

        //Validação dos produtos 
        cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should('contain','Sauce Labs Onesie')
        cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should('contain','Sauce Labs Bike Light')
        cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should('contain','Sauce Labs Bolt T-Shirt')

        //Adicionar ao carrinho
        cy.contains('Sauce Labs Onesie').click()
        cy.compraProdutosComSucesso()//Commands

        cy.contains('Sauce Labs Bike Light').click()
        cy.compraProdutosComSucesso()//Commands

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.compraProdutosComSucesso()//Commands

        //Verificar quantidade no carrinho
        cy.get('[data-test="shopping-cart-link"]').should('have.text','3')
        cy.get('[data-test="shopping-cart-link"]').click()

        //Verificar itens no carrinho
        cy.get(':nth-child(3) > .cart_item_label').should('contain','Sauce Labs Onesie')
        cy.get(':nth-child(4) > .cart_item_label').should('contain','Sauce Labs Bike Light')
        cy.get(':nth-child(5) > .cart_item_label').should('contain','Sauce Labs Bolt T-Shirt')

        //Fazer o checkout
        cy.get('[data-test="checkout"]').click()

        //Preencher Informações
        cy.get('[data-test="firstName"]').type('Eduardo')
        cy.get('[data-test="lastName"]').type('Nishino')
        cy.get('[data-test="postalCode"]').type('03657-100')

        //Clicar botão Continue
        cy.get('[data-test="continue"]').click()

        //Verificar valor total da compra
        cy.get('[data-test="total-label"]').should('have.text', 'Total: $36.69')

        //Finalizar a compra
        cy.get('[data-test="finish"]').click()

        //Checar tela de Finalização de compra
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
    })
});