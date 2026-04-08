import {test, expect} from '@playwright/test';


// test("title",()==>{
//     // steps to write here
//     //step 1
//     //step 2
//     //step 3
// })

// fixture => global variables : page, browser --> page is subset of browser

test("Verify page title",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    let title : String = await page.title();
    console.log("Title is: ", title)
    console.log(page.title());
    
    await expect(page).toHaveTitle("Automation Testing Practice")
    

})