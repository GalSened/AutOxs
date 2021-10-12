
const  assert  = require('assert');
const { traceDeprecation } = require('process');
const{Builder, By, Key, until} = require('selenium-webdriver');
const { threadId } = require('worker_threads');
let driver =  new Builder().forBrowser('chrome').build();
const xlsxFile = require('read-excel-file/node');
var webdriver = require('selenium-webdriver');
const mocha = require ("mocha")
var map = webdriver.promise.map;



xlsxFile('./Data.xlsx').then((MyData) => {
    console.table(MyData);




    describe('testing all kind of payments including canceling',() => {


        
        beforeEach( async() => {
            


            await driver.get(MyData[3][0]);
            await driver.findElement(By.css('#view > div > header > div.loginButton > p')).click();
            await driver.findElement(By.xpath('//*[@id="login-form"]/form/input[1]')).sendKeys(MyData[1][0]);
            await driver.findElement(By.xpath('//*[@id="login-form"]/form/input[2]')).sendKeys(MyData[2][0]);
            await driver.findElement(By.xpath('//*[@id="login-submit"]/input')).click();
            await driver.sleep(1000);      
            await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[2]/img')),10000).click();
            await driver.findElement(By.id('612b340e3be86169b2342b70')).click();
        })
            
        afterEach(async () => {
            await driver.quit();
        });


        it('pay full vaad in cash', async () => {


            assert.equal(1,1)

        })


        it('pay partial vaad in cash', async() => {
            


        });


        it('pay the second half of vaad in CC',async () => {
            

        });


        it('pay full vaad in check', async() => {
            
        });


        it('pay full vaad in bank transfer',async () => {
            
        });


        it('pay full vaad in "deferent" payment',async () => {
            
        });


        it('open a new CC direct debit',async () => {
            
        });


        it('open a new bank direct debit',async () => {
            
        });



        it('create a new deal receipt', () => {
            
        });


        it('canceling payment', () => {
            
        });


    });
});











