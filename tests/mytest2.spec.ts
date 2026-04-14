import {test, expect} from '@playwright/test';


test("Verify page Url",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    let url : String = await page.title();

    console.log("Title is: ", url)
    console.log(page.title());
    
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")


})