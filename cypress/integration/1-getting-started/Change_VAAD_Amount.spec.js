const { it } = require('mocha');
require('cypress-xpath')
require('cypress-dark/src/halloween')



describe('adding new building', () =>{
    let loginData
    beforeEach(()=>{
    cy.fixture('testdata.json').then((user) =>{
        loginData=user
    
    
    });
    
    })
    
    it('opening homepage',()=>{    
        cy.visit("https://stg.oxs.co.il/");
        cy.document().its('fullscreenEnabled').should('be.true');
        cy.get('.loginButton > p').click();
        cy.get('[type="email"]').type(loginData.userName);
        cy.get('[type="password"]').type(loginData.password);   
        cy.get('#login-submit > input').click();  
    
    });

it('change VAAD for 1 tenant to 200', () => {
    


});

it('change VAAD for all tenants to 250', () => {
    
});

});