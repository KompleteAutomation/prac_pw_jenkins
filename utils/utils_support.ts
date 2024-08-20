import { Page } from "@playwright/test";

export class Utils_Support{
    
    async get_screenshot(page:Page,name:string,testname:string,fulpage:boolean=false){
        await page.screenshot({path:'./evidence/'+testname+'_'+name+'.png', fullPage:fulpage})
        
    }

}