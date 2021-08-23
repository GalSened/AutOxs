
const somePage = require("../GitRepo/js")


async function Sanity(){
await somePage.createBuilding();
await somePage.AddTenats();
await somePage.AddServiceCall();
await somePage.EditApNumber();
await somePage.AddNewExpence();
}
Sanity();