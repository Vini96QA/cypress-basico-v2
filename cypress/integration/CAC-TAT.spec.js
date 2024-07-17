/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {

    beforeEach(function () {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function () {

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

    })

    it('preenche os campos obrigatórios e envia o formulário', function () {

        const longText = 'Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste,'
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Vinicius Henrique')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('teste.erp2023@gmail.com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.get('.button').click();

        cy.get('.success').should('be.visible')


    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Vinicius Henrique')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('teste.erp2023@gmail,com')
        cy.get('#open-text-area').type('Olá Mundo')
        cy.get('.button').click();

        cy.get('.error').should('be.visible')

    })
    it('campo telefone continua vazio quando preenchido com valor não numérico', function () {

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Vinicius Henrique')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('teste.erp2023@gmail.com')
        cy.get('#phone')
            .type('teste')
            .should('have.value', '')
        cy.get('#open-text-area').type('Olá Mundo')
        cy.get('.button').click();

        cy.get('.success').should('be.visible')

    })

    it('', function () {

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Vinicius Henrique')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('teste.erp2023@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Olá Mundo')
        cy.get('.button').click();

        cy.get('.error').should('be.visible')
    })

    it('Preenche e limpa os campos nome, sobrenome, email e telefone', function () {

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Vinicius Henrique')
            .should('have.value', 'Vinicius Henrique')
            .clear()
            .should('have.value', '')
        cy.get('#lastName').type('Santos')
            .should('have.value', 'Santos')
            .clear()
            .should('have.value', '')
        cy.get('#email').type('teste.erp2023@gmail.com')
            .should('have.value', 'teste.erp2023@gmail.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone').type('123456')
            .should('have.value', '123456')
            .clear()
            .should('have.value', '')


    })
    it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('.button').click();

        cy.get('.error').should('be.visible')

    })

    it.only('Envia o formulário com sucesso usando um comando customizado', function (){
        cy.filMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')




    })

})
