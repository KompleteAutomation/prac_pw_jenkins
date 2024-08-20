import { Page } from "@playwright/test";

export class Navigation{
    readonly page:Page;
    constructor(page:Page) {
        this.page = page;
        
    }
    async navigate_to_selector(){
        await this.page.locator("a:has-text('Selectable')").click() 
    }

    async navigate_to_selector_newpage(){
        
        await this.page.keyboard.down("Control");
        await this.page.locator("a:has-text('Selectable')").click() 
        await this.page.keyboard.up("Control")
    }
    async navigate_to_autocomplete(){
        await this.page.locator("a:has-text('Autocomplete')").click() 
    }




}