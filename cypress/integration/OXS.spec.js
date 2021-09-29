// OXS.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:

const { it } = require('mocha');


// https://on.cypress.io/writing-first-test
require('cypress-xpath')
require('cypress-dark/src/halloween')

   

   before(() => {
   cy.log('test suite')
 
   })

   describe('verify right Page', () =>{  
      let loginData
      beforeEach(() => {
         cy.fixture('testdata.json').then((user) =>{
            loginData=user
         });
      });
      
      
   
    
      it('verify oxs page', () => {
      cy.visit("https://dev.oxs.co.il/");
      cy.get('.normal').should('contain', 'כניסה למערכת');

      
      });
   
      it('logging in', () => {
         cy.document().its('fullscreenEnabled').should('be.true');
         cy.get('.normal').click();
         cy.get('#inputs > [type="text"]').type(loginData.userName);
         cy.get('[type="password"]').type(loginData.password);   
         cy.get('center > input').click();  

         cy.xpath('//*[@id="view"]/div/div[1]/div/div[2]/h2').should('contain','בניינים ונהנים בע"מ');

         
      });

});




