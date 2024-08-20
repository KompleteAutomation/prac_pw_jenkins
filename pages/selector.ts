import { FrameLocator, Locator, Page } from "@playwright/test";

export class Selector {
    readonly page:Page
    readonly frm:FrameLocator
    readonly allitems:Locator
    constructor(page:Page) {
        this.page = page;
        this.frm = this.page.frameLocator("iframe.demo-frame");
        this.allitems = this.frm.locator("ol.ui-selectable>li");
        
    }
    async select_first(){
        await this.allitems.first().waitFor();
        await this.allitems.first().click();
    }
    async select_last(){
        await this.allitems.last().waitFor();
        await this.allitems.last().click();
    }

    async select_all() {
       // await page.waitForTimeout(4000)
        await this.allitems.first().waitFor();
        // await frm.locator("ol.ui-selectable>li").nth(2).click();
        const arrli = await this.allitems.all();
        console.log(arrli.length);
        await this.page.keyboard.down("Control");
        for (let cnt = 0; cnt < arrli.length; cnt++) {
            await arrli[cnt].click();
        }
        await this.page.keyboard.up("Control");
        // await this.page.waitForTimeout(4000)
    }

}