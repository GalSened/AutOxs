
const  assert  = require('assert');
const { traceDeprecation } = require('process');
const{Builder, By, Key, util} = require('selenium-webdriver');
const { threadId } = require('worker_threads');
let driver =  new Builder().forBrowser('chrome').build();
async function openBrowser(){

  
 await  driver.get('http://www.oxs.co.il');
}
//entering to homepage and loging in
 async function login(){
  openBrowser();
 
  await driver.findElement(By.css('#view > div > div.header.headerImage > span > button.normal')).click();
  await driver.findElement(By.xpath('//*[@id="inputs"]/input[1]')).sendKeys('user@test.com');
  await driver.findElement(By.xpath('//*[@id="inputs"]/input[2]')).sendKeys('123123');
  await driver.findElement(By.xpath('//*[@id="login-win"]/form/center/input')).click();
  await driver.manage().window().maximize();
  await driver.sleep(10000);
}

//creating abuilding in company with 5 apartments qqqqqqq

async function createBuilding(){
await  login();
 console.log("WE R IN");
await  driver.sleep(5000);
let CompanyName = await driver.findElement(By.xpath('//*[@id="view"]/div/div[1]/div/div[2]/h2')).getText().then((value)=>{return value});
  console.log(CompanyName);
assert.strictEqual(CompanyName,'בניינים ונהנים בע"מ');

await  driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[1]/div/p')).click();
await  driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[1]/ul/li[3]/p')).click();
await  driver.sleep(5000);
await  driver.findElement(By.xpath('//*[@id="city"]')).sendKeys('חולון');
await  driver.findElement(By.xpath('//*[@id="street"]')).sendKeys('ההסתדרות');
await  driver.findElement(By.xpath('//*[@id="number"]')).sendKeys('6436');
await  driver.findElement(By.xpath('//*[@id="numberAppartments"]')).sendKeys('5');
await  driver.findElement(By.xpath('//*[@id="numberAppartmentsConfirm"]')).sendKeys('5');
await  driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[4]/span/div/form/div[8]/div/button')).click();
await  driver.sleep(2000);
await  driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[5]/span/div[2]/div/form/div/div[2]/center/button')).click();
await  driver.sleep(2000);
await  driver.findElement(By.xpath('//*[@id="amount"]')).sendKeys("150");
await  driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[1]/div/input')).click();
await  driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[1]/div/ul/li[1]')).click();
await  driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[2]/div/input')).click();
await  driver.sleep(2000);
await  driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[2]/div/ul/li[3]')).click();
await  driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[4]/div[2]/center/button')).click();
await  driver.sleep(2000);
await  driver.findElement(By.xpath('//*[@id="done"]/center/input')).click();
console.log('WE HAVE A BUILDING')

}

//createBuilding();



//Edit apartment number from 100 to 200 + assertion + print new number
async function EditApNumber(){
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

let EditAp = await driver.findElement(By.xpath('//*[@id="modalTitle"]/h2')).getText().then((value)=>{return value});
console.log(EditAp);
assert.strictEqual(EditAp,'עריכת דירה - 100');

let ApartmentNumbur = await driver.findElement(By.xpath('//*[@id="modalDescription"]/div[1]/div[2]/input'));
ApartmentNumbur.clear();
ApartmentNumbur.sendKeys('200');
await driver.findElement(By.xpath('//*[@id="modalDescription"]/div[5]/input')).click();
await driver.sleep(4000);
let ApartmentAlert =await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div[2]/span/span')).getText();
console.log(ApartmentAlert);
await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div[2]/div/div')).click();
let NewApNumber = await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[3]/table/tbody/tr[1]/td[1]/span/p')).getText().then((value)=>{return value});
console.log(NewApNumber);
}


//EditApNumber();

//Adding 3 tenants to "histadrut" 200.
async function AddTenats(){
login();
await driver.sleep(10000);
await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[2]/img')).click();
await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]')).click();
await driver.sleep(4000);
//Adding first tenant from "TASHLUMIM" page addind tenant from the 3 dots button
await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div/div[4]/div/div/tbody/tr[1]/td[2]/div')).click();
await driver.sleep(4000);
await driver.findElement(By.id('toolBarFilesIcon')).click();
await driver.findElement(By.xpath('//*[@id="toptoolbar"]/div[3]/div[1]/div/div/div[1]/p')).click();
await driver.sleep(4000);
await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[1]/div[2]/input')).sendKeys('דייר נסיון 1')
await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[3]/div[2]/input')).sendKeys('0524455586')
await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[5]/div[2]/div/div/input')).sendKeys('qa@oxs.co.il')
await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[1]/div[2]/div[2]/footer/center/div[2]/button')).click();
await driver.sleep(4000);
await driver.findElement(By.css('#modalDescription > div > div.body > div > div')).click();
await driver.navigate().back();

//Add another tenant from DAIARIM list
await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[2]/div/p')).click();
await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[2]/ul/li[1]/p')).click();
await driver.sleep(4000);
await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[3]/table/tbody/tr[2]/td[1]/span/p')).click();
await driver.sleep(4000);
await driver.findElement(By.id('toolBarFilesIcon')).click();
await driver.findElement(By.xpath('//*[@id="toptoolbar"]/div[3]/div[1]/div/div/div[1]/p')).click();
await driver.sleep(4000);
await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[1]/div[2]/input')).sendKeys('דייר נסיון 1')
await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[3]/div[2]/input')).sendKeys('0524455586')
await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[5]/div[2]/div/div/input')).sendKeys('qa@oxs.co.il')
await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]/div[1]/div[2]/div[2]/footer/center/div[2]/button')).click();
await driver.sleep(4000);
await driver.findElement(By.css('#modalDescription > div > div.body > div > div')).click();
await driver.navigate().back();
await driver.sleep(4000);
await driver.takeScreenshot().then(
  function(image, err) {
      require('fs').writeFile('Screenshot_2tenants.png', image, 'base64', function(err) {
          console.log(err);
      });
  }
);
}
//AddTenats();    

//login specificly to histadrut 200
async function LoginHistadrut200(){
login(); 
await driver.sleep(10000);
await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[2]/img')).click();
await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]')).click();
await driver.sleep(4000);
};
//LoginHistadrut200()


//Add service call
async function AddServiceCall(){
//remove if testing in suite
LoginHistadrut200();
await driver.sleep(4000);
await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[4]/div/p')).click();
await driver.sleep(4000);
await driver.findElement(By.xpath('//*[@id="toptoolbar"]/div[3]/div[1]/img')).click();//open new service call
await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[3]/div[1]/div/div[2]/div[2]/div/div[2]/textarea')).sendKeys("פיצוץ בצינור");//descriptin
await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[3]/div[2]/div/div[2]/div[1]/div/div[2]/div/img')).click();//how make the call
await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[3]/div[2]/div/div[2]/div[1]/div/div[2]/div/ul/li[1]/span')).click();
await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[4]/input')).click();//add the call
let ServiceCall = await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div[2]/span/span')).getText();
console.log(ServiceCall);
await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div[2]/div/div')).click();

}

AddServiceCall();