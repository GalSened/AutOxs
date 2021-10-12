const remote = require("selenium-webdriver/remote");
const  assert  = require('assert');
const { traceDeprecation } = require('process');
const{Builder, By, Key, until} = require('selenium-webdriver');
const { threadId } = require('worker_threads');
let driver =  new Builder().forBrowser('chrome').build();
const xlsxFile = require('read-excel-file/node');
var webdriver = require('selenium-webdriver');
const { type } = require("os");
var map = webdriver.promise.map;




xlsxFile('./Data.xlsx').then((MyData) => {

    console.table(MyData);

    
    
    async function TashlumTenant1(){


        await driver.get(MyData[3][0]);
        await driver.manage().window().maximize();
        await driver.findElement(By.css('#view > div > header > div.loginButton > p')).click();
        await driver.findElement(By.xpath('//*[@id="login-form"]/form/input[1]')).sendKeys(MyData[1][0]);
        await driver.findElement(By.xpath('//*[@id="login-form"]/form/input[2]')).sendKeys(MyData[2][0]);
        await driver.findElement(By.xpath('//*[@id="login-submit"]/input')).click();
        await driver.sleep(1000);      
        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[2]/img')),10000).click();
        await driver.findElement(By.id('612b340e3be86169b2342b70')).click();
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div/div[4]/div/div/tbody/tr[1]/td[2]/div')).click();
        await driver.sleep(3000);
        let e;
        let elems = await driver.findElements(By.className('paymentSign'));

        let res = await driver.findElement(By.id("yearlyPaymentsRow")).isSelected()
        
            
                for (e of elems) {
                await e.getAttribute('textContent');
                }
            
                    if (e.getAttribute('textContent') != 0 && e.getAttribute('type') != 'null')
                    e.click();
            

                    await driver.takeScreenshot().then(
                    function(image, err) {
                        require('fs').writeFile('Screenshot_apartmentPage.png', image, 'base64', function(err) {
                        console.log(err);
                        });
                    });
    
    }

    async function FullVaadCash(){
        await TashlumTenant1();
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
    
    
    }

    async function PartialVaadCash(){
        await TashlumTenant1();
        let ele = await  driver.findElement(By.xpath('//*[@id="paymentTypesRow"]/tbody/tr/td[4]/div'));
        await driver.actions().doubleClick(ele).perform();
        await driver.sleep(3000)
        await driver.findElement(By.xpath('//*[@id="receivedAmount"]/img')).click();
        let amount = await driver.findElement(By.xpath('//*[@id="receivedAmount"]/input'));
        amount.clear();
        await amount.sendKeys(MyData[2][4]);
        await driver.findElement(By.xpath('//*[@id="receivedAmount"]/img')).click();
        await driver.findElement(By.xpath('//*[@id="modalDescription"]/div[10]/button')).click();
        await driver.sleep(4000)
        await driver.findElement(By.xpath('//*[@id="modalDescription"]/div[1]/div[2]/div/div')).click();
        await driver.findElement(By.xpath('//*[@id="lowTable"]/tbody[1]/tr/td[2]/p/span')).click();

        await driver.findElement(By.xpath('//*[@id="612b340e3be86169b2342b70"]/div[4]/div[3]/div[2]/div[2]')).takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile('AfterPartialPay.png', image, 'base64', function(err) {
                console.log(err);
                });
            });




    }

    async function SecondPartialCC(){
        let e;
        let p;
        await driver.get(MyData[3][0]);
        await driver.manage().window().maximize();
        await driver.findElement(By.css('#view > div > header > div.loginButton > p')).click();
        await driver.findElement(By.xpath('//*[@id="login-form"]/form/input[1]')).sendKeys(MyData[1][0]);
        await driver.findElement(By.xpath('//*[@id="login-form"]/form/input[2]')).sendKeys(MyData[2][0]);
        await driver.findElement(By.xpath('//*[@id="login-submit"]/input')).click();
        await driver.sleep(1000);      
        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[2]/img')),10000).click();
        await driver.findElement(By.id('612b340e3be86169b2342b70')).click();
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div/div[4]/div/div/tbody/tr[1]/td[2]/div')).click();
        await driver.sleep(3000);
        

            let partial = await driver.findElements(By.className('paymentSign'));
            for(p of partial)
                await p.getText();
            console.log(p);

            
            if (p.getAttribute('type') == 'null') {
                e.click();
            }
            SecondPartialCC()
    }
    TashlumTenant1();
});