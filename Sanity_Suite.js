const { Given, When, Then, After, Before, BeforeStep } = require("@cucumber/cucumber");
const assert = require("assert").strict;
const somePage = require("../GitRepo/js")
const expect = require('chai').expect;

/*async function Sanity(){
await somePage.createBuilding();
await somePage.AddTenats();
await somePage.AddServiceCall();
await somePage.EditApNumber();
await somePage.AddNewExpence();
}
Sanity();*/

BeforeStep
