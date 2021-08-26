const assert = require('assert');
const somePage = require("..AutOxs/AutOxs_Functions");
const{Builder, By, Key, util} = require('selenium-webdriver');
let driver =  new Builder().forBrowser('chrome').build();

async function open()  {
  return  somePage.openBrowser();
}

describe('test fo login', () => {


    it('should login', async() => {
        open();

});
        
        
      
           assert.equal(open(),'oxs - תוכנה לניהול ואחזקת מבנים שתגרום לעסק שלך לצמוח');
       });
    it('should go to histadrut 200', () => {





           assert.equal(3 * 3, 9);
       });
  
open();