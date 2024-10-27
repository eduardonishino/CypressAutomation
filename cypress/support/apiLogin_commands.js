/// <reference types="cypress"/>

Cypress.Commands.add('login_api', (metodo,url,email,password)=> {
    cy.request({
        method: metodo,
        url: url,
        body: {
            "email": email,
            "password": password
        },
        
    }) 
    
})

Cypress.Commands.add('login_api_erro', (metodo,url,email,password)=> {
    cy.request({
        method: metodo,
        url: url,
        body: {
            "email": email,
            "password": password
        },
        failOnStatusCode: false
    }) 
    
})



Cypress.Commands.add('retorno',(status,mensagem)=> {
    ((Response)=>{
        expect(Response.status).to.equal(status)
        expect(Response.body.message).to.equal(mensagem)
    })
})