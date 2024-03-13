/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it ('Cenário Positivo - Deve fazer login com sucesso', () => {
        cy.get('#username').type('c.usuario@teste.com.br')
        cy.get('#password').type('cteste@1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)'). should('contain' , 'Olá, c.usuario (não é c.usuario? Sair)')
    })

    it('Cenário Negativo - Deve exibir uma mensagem de erro ao inserir usuáio inválido', () => {
        cy.get('#username').type('cusuario@teste.com.br')
        cy.get('#password').type('cteste@1234')
        cy.get('.woocommerce-form > .button').click()      
        //cy.get('.woocommerce-error > li'). should('contain' , 'Endereço de e-mail desconhecido.') 
        cy.get('.woocommerce-error > li'). should('exist') 
    });

    it('Cenário Negativo - Deve exibir uma mensagem de erro ao inserir senha inválido', () => {
        cy.get('#username').type('c.usuario@teste.com.br')
        cy.get('#password').type('tte@1234')
        cy.get('.woocommerce-form > .button').click()      
        cy.get('.woocommerce-error > li'). should('contain' , 'Erro: A senha fornecida para o e-mail c.usuario@teste.com.br está incorreta. Perdeu a senha?')  
    });

})