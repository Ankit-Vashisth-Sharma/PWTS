/*
CSS(Cascading style sheet)

tag with id ==> tag#id  or #id
tag with class ==> tag.class or .class 
tag with any other attribute ==> tag[attribute = value] or [attribute = value] 
tag with class and attribute ==> tag.class[attribut = value] or .class[attribute = value]

page.locator(css/xpath)


*/

import {test,expect, Locator} from "@playwright/test"
import { log } from "node:console";
const now = new Date()
    const timestamp = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;

test ("Verfiy CSS Selectors", async ({page})=>{
   await page.goto("https://demowebshop.tricentis.com/")

    

   // tag #id

//    let searchbar : Locator = page.locator("input#small-searchterms")
//    await searchbar.fill("T-Shirt");
    await expect (page.locator("input#small-searchterms")).toBeVisible();
    // await page.locator("input#small-searchterms").fill("T-Shirt")

    await page.locator("input[name=q]").fill("Shirts");
    await page.screenshot({path: `C:/Users/Testing/Desktop/PWTS/Screenshots/test-${timestamp}.png`, fullPage:true})

    await page.locator("input.search-box-text[value='Search store']").fill("Shoes");
    await page.screenshot({path: `C:/Users/Testing/Desktop/PWTS/Screenshots/test for css-${timestamp}.png`, fullPage:true})

    
})

test ("Verify CSS Simple Web", async ({page})=>{
    await page.goto("https://testpages.eviltester.com/pages/basics/basic-web-page/");

    await expect(page.locator("//h1[normalize-space()='Basic Web Page']")).toContainText("Basic Web Page")
    await page.screenshot({path: `C:/Users/Testing/Desktop/PWTS/Screenshots/test for css web-${timestamp}.png`, fullPage:true})

    const y: string | null = await page.locator("//p[contains(text(),'Very simple web pages have a structure illustrated')]").textContent()
    console.log(y)

    await expect(page.locator("//button[@id='button1']")).toBeVisible()
    await page.locator("//button[@id='button1']").click()
    await page.screenshot({path: `C:/Users/Testing/Desktop/PWTS/Screenshots/test for button-${timestamp}.png`, fullPage:true})

    await expect(page.locator("//p[@class='entry-title']")).toBeVisible()
    await page.locator("//p[@class='entry-title']").click()
    await page.screenshot({path:`C:/Users/Testing/Desktop/PWTS/Screenshots/test for link-${timestamp}.png`, fullPage:false})
    
})  

test("Css locators demoweb ", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    // await page.getByRole('link', { name: 'Books' })
    page.locator('a:has-text("BOOKS")').click()
    await page.screenshot({path:`C:/Users/Testing/Desktop/PWTS/Screenshots/test for click on books-${timestamp}.png`, fullPage:false})

})

