
cypress.Commands.add ('filMandatoryFieldsAndSubmit', function () {

    cy.get('#firstName').type('Vinicius Henrique')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('teste.erp2023@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('.button').click();
})