export class HomePage{
    
    LoginData (){
    cy.fixture('testdata.json').then((user) =>{
        loginData = user
    })}
    navigate(){
        cy.visit("https://dev.oxs.co.il/")
    }




}