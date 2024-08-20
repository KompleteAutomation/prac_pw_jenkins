import {expect, test} from '@playwright/test'

test.only('TestGetSingleUser',async ({request})=>{
    const resp = await request.get("http://reqres.in/api/users/2")
    
    console.log(resp.status())
    // expect(resp.status()).toEqual(200)
    const jsonresp = JSON.parse(await resp.text())
    console.log(jsonresp.data.first_name);
    

})


test('TestGetListUser',async ({request})=>{
    const resp = await request.get("https://reqres.in/api/users?page=1")
    console.log(resp.status())
    // expect(resp.status()).toEqual(200)
    const jsonresp = JSON.parse(await resp.text())
    console.log(jsonresp.data[2].first_name);

})


test('TestCreateUser',async ({request})=>{
    const name = "Shree"
    const resp = await request.post("https://reqres.in/api/users",{data:{
         "name": name,
         "job": "leader"
    }})
    console.log(resp.status())
    // expect(resp.status()).toEqual(200)
    const jsonresp = JSON.parse(await resp.text())
    console.log(jsonresp.id);
    console.log(jsonresp.name);

})