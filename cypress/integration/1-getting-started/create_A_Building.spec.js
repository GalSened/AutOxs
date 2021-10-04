


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




    
    
    it('adding histadrut 200', () => {
        cy.get(':nth-child(1) > .menu-item > .header-text').click();
        cy.get(':nth-child(3) > p').click();
        cy.get('#city').type(loginData.city);
        cy.get(':nth-child(2) > .grid-col-3-center').click();
        cy.get('#street').type(loginData.street);
        cy.get(':nth-child(2) > .grid-col-3-center').click();
        cy.get(':nth-child(4) > .grid-col-5 > #number').type(loginData.streetNumber);
        cy.get('#numberAppartments').type(loginData.NumOfAp);
        cy.get('#numberAppartmentsConfirm').type(loginData.NumOfAp);
        cy.get('.col-sm-offset-4 > .newBuildingWindowButton').click();
        
        cy.get('#amount').type(loginData.VAAD_amount);
        cy.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[1]/div/img').click();
        cy.contains('ינואר').click();
        cy.get('.grid-col-12 > .grid-container > :nth-child(2) > .selectListWrapper > img').click();
        cy.contains('2021').click();
        cy.get(':nth-child(4) > .grid-col-2 > center > .newBuildingWindowButton').click();
        cy.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[4]/div[2]/center/button').click();
        cy.wait(1000);
        cy.xpath('//*[@id="done"]/center/input').click();
        
    });

});