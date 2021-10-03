const { it } = require('mocha');


it('add tenants', () => {
    cy.visit('https://dev.oxs.co.il/main/building/60f9311be4224b598532cd42/apartment/60f9311be4224b598532cd45')    
    cy.get(':nth-child(2) > .toolTips-else > .table-item').click();
     
    cy.get('[data-v-e3d6ffb2=""][data-v-24768a27=""] > #toolBarFilesIcon').click();
    cy.get('.filterList > :nth-child(1) > p').click();
    
    
    cy.get(':nth-child(1) > :nth-child(2) > .formInput').type(loginData.Name);       
    cy.get(':nth-child(3) > :nth-child(2) > .formInput').type(loginData.Phone);
    cy.get(':nth-child(5) > :nth-child(2) > .grid-container > .grid-col-12 > input').type(loginData.Email);
    cy.get('.btnWrapper').click();
    cy.get('.notificationButton').click();
    
});