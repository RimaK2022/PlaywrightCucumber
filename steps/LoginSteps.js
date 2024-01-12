const {When, Then }=require('@cucumber/cucumber');
const {LoginPage}= require('../page/LoginPage');
let Lp=new LoginPage();


When('User is on login page',async()=>{
    await Lp.navigate();
})

When('User enter username',async()=>{
    await Lp.enterUserName();
})


When('User enter Password',async()=>{
    await Lp.enterPassword();
})


When('User clicks on login button',async()=>{
    await Lp.clickLoginBtn();
})

Then('User verifies Title',async()=>{
 await Lp.verifyTitle();    
}
)