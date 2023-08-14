console.log('Anonymous');

// Named fn, FN Declaration
// function add() {}


// #2 : Anonymous Function

// (function (message){console.log(message)})
// ('hi');

// IIFE : Intermediate Invoke Function Expression
// ประหยัด cpu
// (function (x,y){
//     console.log(x+y)
// })
// (10,10);
//////////////////////////////////////////////////////
// console.log((function(x,y)
// {
//     return x+y;
// })(10,5))
//////////////////////////////////////////////////////
// let a = (function(x,y)
// {
//     return x + y;
// }
// ) (10,7);
// console.log(a);

//////////////////////////////////////////////////////
// #2B

// let myVar = ((5*2*20)/2) % 7;

// // variable = fn (fn = expression)

// //assign anonymous fn to varia
// const myFunc = function(x,y){
//     return x+ y; 
// };
// console.log(myFunc(5,10));

// // assign named fn to variable
// const a = console.log;
// a('hi');

///// ### ANONYMOUS (Modern : arrow syntax)
// ถ้ามี parameter ตัวเดียว ไม่ต้องใส่วงเล็บ

// let a = function(x) {return x**2;};

// A : shortest 
// ไม่จำเป็นต้องมี return
let a = x => x+2;
let b = (x,y) => x + y; // b เก็บ func ที่รับ x เข้าไปแล้วส่งค่ามาเป็น return

// B:Bracket ต้องมี return
let c = (x,y) => {
    let result = x+y;
    return result;
}



console.log(a(3));
console.log(b(3,5));
console.log(c(5,5));
