// OXS.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:

const { it } = require('mocha');


// https://on.cypress.io/writing-first-test
require('cypress-xpath')
require('cypress-dark/src/halloween')


beforeEach(() => {
   cy.log('I run before every test in every spec file!!!!!!')
   cy.fixture('DATA.json').as('data')
 })

describe('verify right Page', () =>{      

    
   it('verify oxs page', () => {
      cy.visit('https://dev.oxs.co.il/');
      cy.xpath('//*[@id="view"]/div/header/div[2]/p').should('contain', 'כניסה למערכת');

      
   });
   
   it('logging in', () => {
      cy.document().its('fullscreenEnabled').should('be.true');
      cy.xpath('//*[@id="view"]/div/header/div[2]/p').click();
      cy.xpath('//*[@id="login-form"]/form/input[1]').type('user@test.com');
      cy.xpath('//*[@id="login-form"]/form/input[2]').type('123123');   
      cy.xpath('//*[@id="login-submit"]/input').click();  

      cy.xpath('//*[@id="view"]/div/div[1]/div/div[2]/h2').should('contain','בניינים ונהנים בע"מ');

   });

});



