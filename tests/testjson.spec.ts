import { test, expect } from '@playwright/test';
import jsondata from '../resources/userdetails.json'

test('testjson',(page)=>{
    
    const jsonstr = JSON.stringify(jsondata);
    console.log(jsonstr)
    const dataset = JSON.parse(jsonstr)
    for (const data of dataset) {
        console.log(data.username);
        
    }

})