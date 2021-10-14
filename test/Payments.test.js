const assert= require('assert')
const { traceDeprecation } = require('process');
const{Builder, By, Key, until} = require('selenium-webdriver');
const xlsxFile = require('read-excel-file/node');
const { describe, it } = require("mocha");
var webdriver = require('selenium-webdriver');
xlsxFile('././Data.xlsx').then((MyData) => {
    //console.table(MyData);




    describe('testing all kind of payments including canceling', function(){
            
            let driver;

        
        beforeEach(async function(){
            driver =await new Builder().forBrowser('chrome').build();

            
            
        })
            
        afterEach(async function(){
            await driver.quit();
        });


        it('pay full vaad in cash', async function(){

            await driver.get('https://stg.oxs.co.il/')
            //await driver.get(MyData[3][0]);
            await driver.manage().window().maximize();
            await driver.findElement(By.css('#view > div > header > div.loginButton > p')).click();
            await driver.findElement(By.xpath('//*[@id="login-form"]/form/input[1]')).sendKeys(MyData[1][0]);
            await driver.findElement(By.xpath('//*[@id="login-form"]/form/input[2]')).sendKeys(MyData[2][0]);
            await driver.findElement(By.xpath('//*[@id="login-submit"]/input')).click();
            await driver.sleep(1000);      
            await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[2]/img')),10000).click();
            await driver.findElement(By.id('612b340e3be86169b2342b70')).click();
            



        })


        it('pay partial vaad in cash', async function(){
            
            let ele = await  driver.findElement(By.xpath('//*[@id="paymentTypesRow"]/tbody/tr/td[4]/div'));
            await driver.actions().doubleClick(ele).perform();
            await driver.sleep(4000);
            let cash = await driver.findElement(By.xpath('//*[@id="modalTitle"]/div/h2')).getText();
            console.log(cash);
            assert.equal(cash,'תשלום מזומן')
            await driver.findElement(By.xpath('//*[@id="modalDescription"]/div[10]/button')).click();
            await driver.sleep(4000);
            let Confirm = await driver.findElement(By.xpath('//*[@id="modalDescription"]/div[1]/div[2]/div/div')).getText();
            
                assert.equal('אישור', Confirm)
            
            console.log(Confirm);
            await driver.findElement(By.xpath('//*[@id="modalDescription"]/div[1]/div[2]/div/div')).click(); 


        });


        it('pay the second half of vaad in CC',async function(){
            

        });


        it('pay full vaad in check',async function(){
            
        });


        it('pay full vaad in bank transfer',async function(){
            
        });


        it('pay full vaad in "deferent" payment',async function(){
            
        });


        it('open a new CC direct debit',async function(){
            
        });


        it('open a new bank direct debit',async function(){
            
        });



        it('create a new deal receipt',async function(){
            
        });


        it('canceling payment',async function(){
            
        });


    });
});











function newFunction() {
    return require('selenium-webdriver/testing');
}

