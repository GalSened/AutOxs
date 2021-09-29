const { it } = require('mocha');
require('cypress-xpath')
require('cypress-dark/src/halloween')


beforeEach(() => {
    cy.log('this suit is for creating anew building in existing company');

    cy.visit('https://dev.oxs.co.il/');
    cy.document().its('fullscreenEnabled').should('be.true');
    cy.xpath('//*[@id="view"]/div/header/div[2]/p').click();
    cy.xpath('//*[@id="login-form"]/form/input[1]').type('user@test.com');
    cy.xpath('//*[@id="login-form"]/form/input[2]').type('123123');   
    cy.xpath('//*[@id="login-submit"]/input').click();  
    cy.fixture('DATA.json').as('data')

  });

  describe('adding new building', () =>{
    
    
    it('adding histadrut 200', () => {


    });

});