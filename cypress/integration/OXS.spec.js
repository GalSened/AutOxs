// OXS.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:

const { it } = require('mocha');

// https://on.cypress.io/writing-first-test
require('cypress-xpath')
require('cypress-dark/src/halloween')
module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
      if (browser.family === 'chromium' && browser.name !== 'electron') {
        launchOptions.args.push('--start-fullscreen')
  
        return launchOptions
      }
  
      if (browser.name === 'electron') {
        launchOptions.preferences.fullscreen = true
  
        return launchOptions
      }
    })
  }

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



