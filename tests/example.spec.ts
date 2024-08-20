import { test, expect, Page } from '@playwright/test';
import { Navigation } from '../pages/navigation';
import { Selector } from '../pages/selector';
import {Utils_Support} from '../utils/utils_support'
import { ExeclLib } from '../utils/exceloper';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('TestSelectAll', async ({ page },testInfo) => {
 
  await page.goto('https://jqueryui.com/');
  await page.waitForTimeout(2000);
  const nvg = new Navigation(page);
  const ttl = testInfo.title;
  // console.log("Title is "+testInfo.title);
  const slt = new Selector(page);

  await nvg.navigate_to_selector();
  await slt.select_all()
  const utils = new Utils_Support();
  // await page.screenshot({path:'./evidence/selectall.png', fullPage:true})
     await utils.get_screenshot(page,"TestingSelectFeature1",ttl,true)

  
});

test('TestNewPage', async ({ browser }) => {
  const context = await browser.newContext()
  const page:Page = await context.newPage()
  await page.goto('https://jqueryui.com/');
  await page.waitForTimeout(4000)
  const nvg = new Navigation(page);
  // const slt = new Selector(page);
  
  await nvg.  navigate_to_selector_newpage();
  
  await page.waitForTimeout(4000)


});

test('TestSelectFirst', async ({ page }) => {
  await page.goto('https://jqueryui.com/');
  const nvg = new Navigation(page);
  const slt = new Selector(page);

  await nvg.navigate_to_selector();
  await slt.select_first()


  
});



test('TestSelectLast', async ({ page }) => {
  await page.goto('https://jqueryui.com/');
  const nvg = new Navigation(page);
  const slt = new Selector(page);

  await nvg.navigate_to_selector();
  await slt.select_last()
  await page.waitForTimeout(4000)


  
});


test('TestExcel',async ()=>{
    const lib = new ExeclLib();
    await lib.operationExcel();

})

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
