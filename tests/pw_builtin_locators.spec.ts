/*

Locator --> Identifies the element on the page
DOM --> Document Object Model

1) page.getByRole() to locate by explicit and implicit accessibility attributes.
2) page.getByText() to locate by text content.
3) page.getByLabel() to locate a form control by associated label's text.
4) page.getByPlaceholder() to locate an input by placeholder.
5) page.getByAltText() to locate an element, usually image, by its text alternative.
6) page.getByTitle() to locate an element by its title attribute.
7) page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

import {test,expect,Locator} from "@playwright/test"

test ("Verify Playwright Locators", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const logo : Locator = page.getByAltText("company-branding")
    
    await expect(logo).toBeVisible();
})

test ("Verify PW Locators", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // const text : Locator = page.getByText("Login")
    // const getH : Locator = page.locator("h5",{hasText:"Login"})
    // await expect(getH).toBeVisible();

    const chkTxt : Locator = page.locator("h5");

    await expect(chkTxt).toHaveText("Login");
        await expect(chkTxt).toBeVisible();
    // await expect(page.getByText("Login")).toBeVisible()
})

test("Check Username", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const text: Locator = page.getByText("Username : Admin")

    await expect(text).toBeVisible();
})

test("Check for Password",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const text: Locator = page.getByText("Password : admin123")

    await expect(text).toBeVisible()
})

    test("Check for pswrd",async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        await expect(page.getByText("Password : admin123")).toBeVisible()
    })

test("Check for Login H5",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await expect(page.getByRole('heading',{name: "Login"})).toBeVisible()

    
})
test("Check for Login Btn",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByRole('button',{name: /login/i}).click()
    
})

test("Username Label",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByLabel("Username").fill("Admin");
    await page.getByLabel("Password").fill("admin123");

    await page.getByRole("button",{name:"login"}).click();

})


test("Log In", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // Pre-login validations
  await expect(page).toHaveURL(/auth\/login/);
  await expect(page).toHaveTitle(/OrangeHRM/);
  await expect(page.locator("h5.orangehrm-login-title")).toHaveText("Login");

  await expect(page.getByPlaceholder("Username")).toBeVisible();
  await expect(page.getByPlaceholder("Password")).toBeVisible();
  await expect(page.getByRole("button", { name: "Login" })).toBeVisible();

  // Login
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  // Post-login validations
  await expect(page).toHaveURL(/dashboard/);
  await expect(page).toHaveTitle(/OrangeHRM/);
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});