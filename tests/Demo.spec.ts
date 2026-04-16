import {test, expect} from "@playwright/test"

test("Demo Website", async ({page})=>{
    // await page.goto("file:///C:/Users/Testing/Downloads/ClassDemos/ClassDemos/app.html",);

    await page.goto("http://127.0.0.1:5500/tests/app.html")

    await page.screenshot({path: "C:/Users/Testing/Desktop/PWTS/Screenshots/tests.png", fullPage:true})
    await expect(page.getByTitle("Home Page Link")).toHaveText("Home")

    await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML")

    await expect(page.getByTestId("profile-name")).toHaveText("John Doe")
    await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com")

    await expect(page.getByAltText("logo image")).toBeVisible()
    await expect(page.getByPlaceholder("Enter your full name")).toBeEmpty()
    await expect(page.getByPlaceholder("Enter your full name")).toHaveAttribute("placeholder","Enter your full name");
    // const now = Date.now()
    const now = new Date()
    const timestamp = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;

    await page.screenshot({path: `C:/Users/Testing/Desktop/PWTS/Screenshots/test-${timestamp}.png`, fullPage:true})

    await expect(page.getByLabel("Email Address:")).toBeVisible()

    await expect(page.getByLabel(" Password: ")).toBeVisible()
    await expect(page.getByLabel("Your Age:")).toBeVisible()
    await page.screenshot({path: `C:/Users/Testing/Desktop/PWTS/Screenshots/test-${timestamp}.png`, fullPage:true})

})