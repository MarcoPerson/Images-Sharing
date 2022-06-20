import { test, expect } from "@playwright/test";

test.describe("MySharingApp", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.locator('[placeholder="Enter your name"]').click();
    await page.locator('[placeholder="Enter your name"]').fill("Marco");
    await page.locator('button:has-text("Enter")').click();
  });


  test("Test reception des commentaires de Image 0", async ({page}) => {
    await page.route('**/api/commentsGet*', route => route.fulfill({
        status: 200,
        body : '[{"id":0,"imageId":0,"userName":"m","comment":"C\'est Moi Marc et c\'est mon premier test de commentaire","date":"Thu Jun 16 2022 17:11:04 GMT+0200"},{"id":1,"imageId":0,"userName":"m","comment":"C\'est Moi Marc et c\'est mon premier test de commentaire","date":"Thu Jun 16 2022 17:11:32 GMT+0200"},{"id":2,"imageId":0,"userName":"m","comment":"Hahahahahahaha ca marche bien apparemment","date":"Thu Jun 16 2022 17:11:58 GMT+0200"},{"id":3,"imageId":0,"userName":"m","comment":"Hahaha ca marche encore","date":"Thu Jun 16 2022 17:17:26 GMT+0200"},{"id":4,"imageId":0,"userName":"m","comment":"Hahaha ca marche encore","date":"Thu Jun 16 2022 17:21:28 GMT+0200"},{"id":5,"imageId":0,"userName":"m","comment":"Hahaha ca marche encore","date":"Thu Jun 16 2022 17:21:31 GMT+0200"},{"id":6,"imageId":0,"userName":"m","comment":"Hahaha ca marche encore","date":"Thu Jun 16 2022 17:21:32 GMT+0200"},{"id":7,"imageId":1,"userName":"m","comment":"Waoooooooo sugoi, nande koreeeeeeeeeeeeeeeeeeeeeeee","date":"Thu Jun 16 2022 17:25:43 GMT+0200"},{"id":8,"imageId":0,"userName":"m","comment":"Biennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn","date":"Fri Jun 17 2022 09:46:53 GMT+0200"},{"id":9,"imageId":1,"userName":"m","comment":"Nickel Tout marche bien","date":"Fri Jun 17 2022 10:14:57 GMT+0200"},{"id":10,"imageId":1,"userName":"m","comment":"Serieux ???","date":"Fri Jun 17 2022 10:17:29 GMT+0200"},{"id":11,"imageId":6,"userName":"m","comment":"Beautiful SunSet","date":"Fri Jun 17 2022 10:49:55 GMT+0200"},{"id":12,"imageId":7,"userName":"Marco","comment":"Beautiful Landscape :)","date":"Fri Jun 17 2022 11:13:11 GMT+0200"},{"id":13,"imageId":1,"userName":"Marco","comment":"Ouais nickel ca marche","date":"Fri Jun 17 2022 13:25:09 GMT+0200"},{"id":14,"imageId":3,"userName":"Marco","comment":"Waooooooooooooooooooo Beautiful\n","date":"Fri Jun 17 2022 13:25:41 GMT+0200"},{"id":15,"imageId":8,"userName":"Merveilles","comment":"The are the 2021/2022 NBA Champions with the Chef as Finals MVP","date":"Fri Jun 17 2022 16:18:58 GMT+0200"},{"id":16,"imageId":1,"userName":"Marc","comment":"Hahahahha","date":"Fri Jun 17 2022 16:53:04 GMT+0200"}]'
    }))
    await page.locator('.ant-image-img').first().click()
    await expect(page).toHaveTitle(/Image/)
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await expect(page.locator('.ant-list-header')).toHaveText("8 comments")
  });

  test("Test reception des commentaires de Image 2", async ({page}) => {
    await page.route('**/api/commentsGet*', route => route.fulfill({
        status: 200,
        body : '[{"id":0,"imageId":0,"userName":"m","comment":"C\'est Moi Marc et c\'est mon premier test de commentaire","date":"Thu Jun 16 2022 17:11:04 GMT+0200"},{"id":1,"imageId":0,"userName":"m","comment":"C\'est Moi Marc et c\'est mon premier test de commentaire","date":"Thu Jun 16 2022 17:11:32 GMT+0200"},{"id":2,"imageId":0,"userName":"m","comment":"Hahahahahahaha ca marche bien apparemment","date":"Thu Jun 16 2022 17:11:58 GMT+0200"},{"id":3,"imageId":0,"userName":"m","comment":"Hahaha ca marche encore","date":"Thu Jun 16 2022 17:17:26 GMT+0200"},{"id":4,"imageId":0,"userName":"m","comment":"Hahaha ca marche encore","date":"Thu Jun 16 2022 17:21:28 GMT+0200"},{"id":5,"imageId":0,"userName":"m","comment":"Hahaha ca marche encore","date":"Thu Jun 16 2022 17:21:31 GMT+0200"},{"id":6,"imageId":0,"userName":"m","comment":"Hahaha ca marche encore","date":"Thu Jun 16 2022 17:21:32 GMT+0200"},{"id":7,"imageId":1,"userName":"m","comment":"Waoooooooo sugoi, nande koreeeeeeeeeeeeeeeeeeeeeeee","date":"Thu Jun 16 2022 17:25:43 GMT+0200"},{"id":8,"imageId":0,"userName":"m","comment":"Biennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn","date":"Fri Jun 17 2022 09:46:53 GMT+0200"},{"id":9,"imageId":1,"userName":"m","comment":"Nickel Tout marche bien","date":"Fri Jun 17 2022 10:14:57 GMT+0200"},{"id":10,"imageId":1,"userName":"m","comment":"Serieux ???","date":"Fri Jun 17 2022 10:17:29 GMT+0200"},{"id":11,"imageId":6,"userName":"m","comment":"Beautiful SunSet","date":"Fri Jun 17 2022 10:49:55 GMT+0200"},{"id":12,"imageId":7,"userName":"Marco","comment":"Beautiful Landscape :)","date":"Fri Jun 17 2022 11:13:11 GMT+0200"},{"id":13,"imageId":1,"userName":"Marco","comment":"Ouais nickel ca marche","date":"Fri Jun 17 2022 13:25:09 GMT+0200"},{"id":14,"imageId":3,"userName":"Marco","comment":"Waooooooooooooooooooo Beautiful\n","date":"Fri Jun 17 2022 13:25:41 GMT+0200"},{"id":15,"imageId":8,"userName":"Merveilles","comment":"The are the 2021/2022 NBA Champions with the Chef as Finals MVP","date":"Fri Jun 17 2022 16:18:58 GMT+0200"},{"id":16,"imageId":1,"userName":"Marc","comment":"Hahahahha","date":"Fri Jun 17 2022 16:53:04 GMT+0200"}]'
    }))
    await page.locator('.ant-image-img >> nth=2').click()
    await expect(page).toHaveTitle(/Image/)
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await expect(page.locator('.ant-list-header')).toHaveText("5 comments")
  });

});
