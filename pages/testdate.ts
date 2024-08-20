// var date = new Date();

import moment from "moment";



    
// alert( date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2( date.getDate()) + pad2( date.getHours() ) + pad2( date.getMinutes() ) + pad2( date.getSeconds() ) );

let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

// let fullDate = `${day}.${month}.${year}.`;

console.log(moment().format('DD-MMM-YYYY'));