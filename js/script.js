// console.log(a);
// var a=10;

// console.log(a);
// let a=10;

//  Type Coercion (Auto-Conversion)

//  "5" + 1 // "51" → number converted to string
// "5" - 1 // 4 → string converted to number
// true + 1 // 2
// null + 1 // 1
// undefined + 1 // NaN

// console.log(undefined + 1);
// console.log(null + 1);

// console.log("55" + 5);//"555"
// console.log("55" - 5);//50

// console.log("314"+4);//"3144"
// console.log("314"-4);//310

// + থাকলে string জড়ানোর কাজ করে।
// -, *, / থাকলে string কে number এ convert করে গাণিতিক কাজ করে।

// console.log(typeof NaN);
// console.log(typeof "abc");
// console.log(parseInt("abc"));
// console.log(parseInt("ABC"));

//Truthy and Falsy Values

// falsy value

// "",false,0,null,undefined,NaN

//truthy value

// "0", "false",[],{},function (){}

// let a =`Expression	Process	Result
// '5' + 1	'5' (string) + '1' (string) → '51'	'51'
// '5' - 1	'5' (number 5) - 1 → 4	4
// '5' * 2	'5' (number 5) * 2 → 10	10
// '5' / 2	'5' (number 5) / 2 → 2.5	2.5
// '5' + true	'5' (string) + 'true' (string) → '5true'	'5true'
// '5' - true	'5' (number 5) - 1 (true → 1) → 4	4
// '5' + null	'5' (string) + 'null' (string) → '5null'	'5null'
// '5' - null	'5' (number 5) - 0 (null → 0) → 5	5`;
// console.log(a);

// console.log(null + 1);//1
// console.log("5" + 3);//"53"
// console.log("5" - 3);//2
// console.log(true + false);//1

// let age=17;

// (age>=18) ? console.log("vote dite parbe") :
//  console.log("vote dite parbe na");

// !!value is a quick trick to convert anything into a boolean

// console.log("10" + 1);//"101"
// console.log("10" - 1);//9
// console.log(true + false);//1
// console.log(!!"Sheryians"); //true

// let arr=[10,20,"Ball"];

// for(let a of arr){
//     console.log(a);

// }

// let user = { name: "Noor", age: 26 };

// for(let u in user){
//     console.log(u,user[u]);

// }

// let noor=function (){
//     console.log("hi Noor!");

// }

// function welcome(a){
//   a();
// }
// welcome(noor);

// (function(){
//     console.log("Today is Wednesday!");

// })()

// First-Class Functions → function কে variable এ রাখা, argument/return হিসেবে ব্যবহার করা যায়।

// Higher-Order Functions (HOF) → যে function অন্য function কে নেয় বা return করে।

// IIFE → function define করার সাথে সাথে সাথে সাথে execute হয়।
// IIFE means Immediate invoked Function Expression

//js reduce 