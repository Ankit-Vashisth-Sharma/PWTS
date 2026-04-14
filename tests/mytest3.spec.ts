import {test,expect} from '@playwright/test';


// test ("title",()=>{
//  //Step-1
//  //Step-2
//  //Step-3
//  //Step-4
//  //Step-5
//  //Step-6
// })

test ("Verify title of the page",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    let title:string = await page.title();
    await expect(page).toHaveTitle("OrangeHRM") // one asserstion best practice in single test
    
    console.log(title)
})

test("Verify title", async function ({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle("OrangeHRM")
})

test("Verify URL", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    let url: string = await page.url();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log(url)
})

test("Verify the URL", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    let check_url : string = await page.url();

    await expect(page).toHaveURL(/oranghrmlive/);
})