
const assert = require("assert");
const somePage = require(".AutOxs/AutOxs_Functions")
const expect = require('chai').expect;

async function Sanity(){
await somePage.createBuilding();
await somePage.AddTenats();
await somePage.AddServiceCall();
await somePage.EditApNumber();
await somePage.AddNewExpence();
}
Sanity();
