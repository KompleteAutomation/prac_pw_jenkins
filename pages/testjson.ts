function testarray(){
    const arrname = ["A","B","C"]
    arrname.forEach(elem=>{
        console.log(elem)
    })
    // console.log(arrname.length)
    // for (let cnt = 0; cnt < arrname.length; cnt++) {
    //     const element = arrname[cnt];
    //     console.log(element)
        
    // }

    // for (const element of arrname) {
    //     console.log(element)
    // }

    
}


function testjsonarry(){
    [
        {username: "user1@user.com",password: "password", toremember: true},
        {username: "user2@user.com",password: "password1", toremember: true},
        {username: "user3@user.com",password: "password2", toremember: true}        
    ].forEach(({username,password})=>{

        console.log(username,password);
        // console.log(password);
    })



}
testjsonarry();