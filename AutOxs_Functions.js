


const axios = require('axios');
const { Builder, By, Key, until } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();




class Main {
  constructor() {
    this.data = require('./data')
  }



  async openBrowser() {
    await driver.get(MyData[3][0]);
  }

  //entering to homepage and logging in
  async login() {

    this.openBrowser();
    await driver.findElement(By.css('#view > div > div.header.headerImage > span > button.normal')).click();
    await driver.findElement(By.xpath('//*[@id="inputs"]/input[1]')).sendKeys(MyData[1][0]);
    await driver.findElement(By.xpath('//*[@id="inputs"]/input[2]')).sendKeys(MyData[2][0]);
    await driver.findElement(By.xpath('//*[@id="login-win"]/form/center/input')).click();
    await driver.manage().window().maximize();
    //await driver.sleep(10000);
  }

  //creating a building in company with 5 apartments qqqqqqq

  async createBuilding() {

    await login();
    console.log("WE R IN");
    await driver.sleep(5000);
    let CompanyName = await driver.findElement(By.xpath('//*[@id="view"]/div/div[1]/div/div[2]/h2')).getText().then((value) => { return value });
    console.log(CompanyName);
    assert.strictEqual(CompanyName, 'בניינים ונהנים בע"מ');
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[1]/div/p')).click();
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[1]/ul/li[3]/p')).click();
    //await driver.sleep(5000);
    await driver.wait(until.elementLocated(By.id('city')).sendKeys(MyData[1][1]));
    await driver.findElement(By.id('street')).sendKeys(MyData[2][1]);
    await driver.findElement(By.xpath('//*[@id="number"]')).sendKeys(MyData[3][1]);
    await driver.findElement(By.xpath('//*[@id="numberAppartments"]')).sendKeys(MyData[4][1]);
    await driver.findElement(By.xpath('//*[@id="numberAppartmentsConfirm"]')).sendKeys(MyData[4][1]);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[4]/span/div/form/div[8]/div/button')).click();
    //await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div[5]/span/div[2]/div/form/div/div[2]/center/button'))).click();
    //await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.xpath('//*[@id="amount"]'))).sendKeys(MyData[5][1]);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[1]/div/input')).click();
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[1]/div/ul/li[1]')).click();
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[2]/div/input')).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[2]/div/ul/li[3]')).click();
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[4]/div[2]/center/button')).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="done"]/center/input')).click();
    console.log('WE HAVE A BUILDING')

  }


  //not ready yet needs more research
  async createBuildingFromEXcel() {

    await login();
    console.log("WE R IN");
    await driver.sleep(5000);
    let CompanyName = await driver.findElement(By.xpath('//*[@id="view"]/div/div[1]/div/div[2]/h2')).getText().then((value) => { return value });
    console.log(CompanyName);
    assert.strictEqual(CompanyName, 'בניינים ונהנים בע"מ');
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[1]/div/p')).click();
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[1]/ul/li[3]/p')).click();
    await driver.sleep(5000);
    await driver.findElement(By.id('city')).sendKeys(MyData[1][1]);
    await driver.findElement(By.id('street')).sendKeys(MyData[2][1]);
    await driver.findElement(By.xpath('//*[@id="number"]')).sendKeys(MyData[3][1]);
    await driver.findElement(By.xpath('//*[@id="numberAppartments"]')).sendKeys(MyData[4][1]);
    await driver.findElement(By.xpath('//*[@id="numberAppartmentsConfirm"]')).sendKeys(MyData[4][1]);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[4]/span/div/form/div[8]/div/button')).click();
    await driver.sleep(2000);
    UploadFile = await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[5]/span/div[2]/div/div/button')).click();
    await driver.sleep(2000);
    await UploadFile.sendKeys('/Users/Gal/Desktop/Oxs_Testing/excel/buildingformat.xlsx')

    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="done"]/center/input')).click();
    console.log('WE HAVE A BUILDING')

  }








  //Edit apartment number from 100 to 200 + assertion + print new number
  async EditApNumber() {

    login();
    await driver.sleep(10000);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[2]/img')).click();
    await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]')).click();
    await driver.sleep(4000);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[2]/div/p')).click();
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[2]/ul/li[1]/p')).click();
    await driver.sleep(4000);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[3]/table/tbody/tr[1]/td[9]/div/div[2]/img')).click();
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[3]/table/tbody/tr[1]/td[9]/div/div[1]/span/span[1]/img')).click();
    let EditAp = await driver.findElement(By.xpath('//*[@id="modalTitle"]/h2')).getText().then((value) => { return value });
    console.log(EditAp);
    assert.strictEqual(EditAp, 'עריכת דירה - 100');
    let ApartmentNumbur = await driver.findElement(By.xpath('//*[@id="modalDescription"]/div[1]/div[2]/input'));
    ApartmentNumbur.clear();
    ApartmentNumbur.sendKeys('200');
    await driver.findElement(By.xpath('//*[@id="modalDescription"]/div[5]/input')).click();
    await driver.sleep(4000);
    let ApartmentAlert = await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div[2]/span/span')).getText();
    console.log(ApartmentAlert);
    await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div[2]/div/div')).click();
    let NewApNumber = await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[3]/table/tbody/tr[1]/td[1]/span/p')).getText().then((value) => { return value });
    console.log(NewApNumber);
  }


  //Adding 5 tenants to "histadrut" 200.
  async AddTenants() {

    await LoginHistadrut200();
    await driver.sleep(7000);
    //Adding first tenant from "TASHLUMIM" page adding tenant from the 3 dots button
    await driver.findElement(By.className('justify-right')).click();
    await driver.sleep(4000);
    await driver.findElement(By.id('toolBarFilesIcon')).click();
    await driver.findElement(By.xpath('//*[@id="toptoolbar"]/div[3]/div[1]/div/div/div[1]/p')).click();
    await driver.sleep(4000);
    await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[1]/div[2]/input')).sendKeys(MyData[1][3])
    await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[3]/div[2]/input')).sendKeys(MyData[2][3])
    await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[5]/div[2]/div/div/input')).sendKeys(MyData[3][3])
    clickBtn = await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[1]/div[2]/div[2]/footer/center/div[2]/button'));
    clickBtn.click();
    await driver.sleep(4000);
    await driver.findElement(By.css('#modalDescription > div > div.body > div > div')).click();
    await driver.navigate().back();
    // go to DAIARIM list
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[2]/div/p')).click();
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[2]/ul/li[1]/p')).click();
    await driver.sleep(4000);

    //Add another 4 tenants from DAIARIM list
    const xpathi = ['//*[@id="view"]/div/div[3]/div/div/div[3]/table/tbody/tr[2]/td[1]/span/p', '//*[@id="view"]/div/div[3]/div/div/div[3]/table/tbody/tr[3]/td[1]/span/p', '//*[@id="view"]/div/div[3]/div/div/div[3]/table/tbody/tr[4]/td[1]/span/p', '//*[@id="view"]/div/div[3]/div/div/div[3]/table/tbody/tr[5]/td[1]/span/p'];
    let f = 4;
    text = '';
    for (let m = 0; m < xpathi.length; m++) {
      let text = '';
      await driver.findElement(By.xpath(text + xpathi[m])).click();
      await driver.sleep(4000);
      await driver.findElement(By.id('toolBarFilesIcon')).click();
      await driver.findElement(By.xpath('//*[@id="toolbar"]/div[3]/div[1]/div/div/div[1]/p')).click();
      await driver.sleep(4000);
      await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[1]/div[2]/input')).sendKeys(MyData[f][3])
      await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[3]/div[2]/input')).sendKeys(MyData[2][3])
      await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[5]/div[2]/div/div/input')).sendKeys(MyData[3][3])
      clkBtn2 = await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[1]/div[2]/div[2]/footer/center/div[2]/button'));
      clkBtn2.click();
      await driver.sleep(4000);
      await driver.findElement(By.css('#modalDescription > div > div.body > div > div')).click();
      await driver.navigate().back();
      await f++;
      await driver.sleep(4000);
    }
    await driver.takeScreenshot().then(
      function (image, err) {
        require('fs').writeFile('Screenshot_2tenants.png', image, 'base64', function (err) {
          console.log(err);
        });
      }
    );
  }



  //login specifically to histadrut 200
  async LoginHistadrut200() {

    login();
    await driver.sleep(10000);
    await driver.findElement(By.className('specialArrow')).click();
    await driver.findElement(By.id('610a6d8bf0691d26a2124ad1')).click();

  }



  //Add service call
  async AddServiceCall() {

    //remove if testing in suite
    await LoginHistadrut200();
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[4]/div/p')).click();
    await driver.sleep(4000);
    await driver.findElement(By.xpath('//*[@id="toptoolbar"]/div[3]/div[1]/img')).click();//open new service call
    await driver.sleep(4000);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[3]/div[1]/div/div[2]/div[2]/div/div[2]/textarea')).sendKeys("פיצוץ בצינור");//descriptin
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[3]/div[2]/div/div[2]/div[1]/div/div[2]/div/img')).click();//how make the call
    await driver.sleep(2500);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[3]/div[2]/div/div[2]/div[1]/div/div[2]/div/ul/li[1]/span')).click();//clicking on manegment company
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[4]/input')).click();//add the call
    await driver.sleep(2500);
    let ServiceCall = await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div[2]/span/span')).getText();
    console.log(ServiceCall);

    assert.strictEqual('קריאת שירות חדשה נפתחה בהצלחה', ServiceCall);
    await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div[2]/div/div')).click();
  }



  async ArrangeBuilding() {

    await LoginHistadrut200();
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[2]/div/p')).click();
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[2]/ul/li[3]/p')).click();
    await driver.sleep(4000);
    await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[3]/div/div[2]')).click();
    await driver.sleep(4000);
    NumOfLevels = await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[4]/div[1]/div[3]/div[2]/input'))
    await NumOfLevels.click();
    await NumOfLevels.clear();
    await NumOfLevels.sendKeys('3');
    await driver.sleep(4000);
    await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[2]/td[3]/p')).click();
    await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[2]/td[3]/span/div[1]/label/div')).click();
    await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[3]/td[3]/p')).click();
    await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[3]/td[3]/span/div[1]/label/div')).click();
    await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[3]/td[3]/p')).click();
    await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[3]/td[3]/span/div[1]/label/div')).click();
    await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[4]/td[3]/p')).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[4]/td[3]/span/div[1]/label/div')).click();
    await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[4]/td[3]/p')).click();
    await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[4]/td[3]/span/div/label/div')).click();
    await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[4]/div[3]/div/div/section/div[3]/div/button')).click();
    await driver.takeScreenshot().then(
      function (image, err) {
        require('fs').writeFile('Screenshot_3Floors.png', image, 'base64', function (err) {
          console.log(err);
        });
      }
    );

  }


  async TashlumTenant1() {
    await LoginHistadrut200();
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div/div[4]/div/div/tbody/tr[1]/td[2]/div')).click();
    await driver.sleep(5000);
    let e;
    let elems = await driver.findElements(By.className('paymentSign'));

    let res = await driver.findElement(By.xpath('//*[@id="yearlyPaymentsRow"]/tbody/tr/td[2]/div/span/img')).isSelected()
    console.log(res);

    for (e of elems) {
      await e.getAttribute('textContent');
    }

    if (e.getAttribute('textContent') != 0 && e.getAttribute('type') != 'null')
      e.click();

  }


  async AddNewExpense() {

    await LoginHistadrut200();
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[8]/div/p')).click();
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[8]/ul/li[1]/p')).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="toptoolbar"]/div[3]/div[1]/img')).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="top"]/div[2]/section[2]/div/div[1]/div[1]/div[2]/input')).sendKeys(200);
    await driver.findElement(By.xpath('//*[@id="top"]/div[2]/section[2]/div/div[1]/div[2]/div[2]/div/input')).click();
    await driver.findElement(By.xpath('//*[@id="top"]/div[2]/section[2]/div/div[1]/div[2]/div[2]/div/ul/li[3]/span')).click();
    await driver.findElement(By.xpath('//*[@id="top"]/div[2]/section[2]/div/div[2]/div[1]/div[2]/div/input')).click();
    await driver.findElement(By.xpath('//*[@id="top"]/div[2]/section[2]/div/div[2]/div[1]/div[2]/div/ul/li[20]/span')).click();
    await driver.findElement(By.xpath('//*[@id="top"]/div[2]/section[2]/div/div[4]/div[2]/textarea')).sendKeys('הוצאה חדשה מאוטומציה');
    await driver.findElement(By.xpath('//*[@id="top"]/div[2]/div[3]/div/input')).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[2]/img')).click();
    // pay the expense
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[4]/div/div[2]/table/tbody[1]/tr/td[9]/p')).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[4]/div/div[2]/div[2]/button')).click();
    await driver.sleep(4000);
    await driver.findElement(By.className('saveBtn')).click();
    await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div[2]/span/span')).getText().console.log();
    await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div[2]/div/div')).click();

  }

}
module.exports = new Main();



