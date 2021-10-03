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
        cy.visit("https://dev.oxs.co.il/");
        cy.document().its('fullscreenEnabled').should('be.true');
        cy.get('.loginButton > p').click();
        cy.get('[type="email"]').type(loginData.userName);
        cy.get('[type="password"]').type(loginData.password);   
        cy.get('#login-submit > input').click();  
    
    });

    it('choosing HISTADRUT 200', () => {
        cy.wait(1000)
        cy.get(':nth-child(1) > .menu-item > .header-text').click();
        cy.get('.specialArrow').click()
        cy.xpath('//*[@id="view"]/div/div[1]/div/div[3]/div/ul/li[1]/input').type('ההסתדרות')  
        cy.contains('ההסתדרות 96').click();
        cy.wait(1000)

    });


    it('add tenants', () => {
        
        cy.get(':nth-child(2) > .toolTips-else > .table-item').click();
         
        cy.get('[data-v-e3d6ffb2=""][data-v-24768a27=""] > #toolBarFilesIcon').click();
        cy.get('.filterList > :nth-child(1) > p').click();
        
        
        cy.get(':nth-child(1) > :nth-child(2) > .formInput').type(loginData.Name);       
        cy.get(':nth-child(3) > :nth-child(2) > .formInput').type(loginData.Phone);
        cy.get(':nth-child(5) > :nth-child(2) > .grid-container > .grid-col-12 > input').type(loginData.Email);
        cy.get('.btnWrapper').click();
        cy.get('.notificationButton').click();
        
    });






});