const { Builder, By, Key, until } = require('selenium-webdriver');
var BasePage = require('C:\Users\Gal\Desktop\Oxs_Testing\AutOxs\selenium\basepage.js')
var webdriver = require('selenium-webdriver')

class HomePage extends BasePage{



    LoginPage(){
        await driver.findElement(By.css('#view > div > div.header.headerImage > span > button.normal')).click();
        await driver.findElement(By.xpath('//*[@id="inputs"]/input[1]')).sendKeys(MyData[1][0]);
        await driver.findElement(By.xpath('//*[@id="inputs"]/input[2]')).sendKeys(MyData[2][0]);
        await driver.findElement(By.xpath('//*[@id="login-win"]/form/center/input')).click();
        await driver.manage().window().maximize();
    }



}


module.exports = new HomePage();