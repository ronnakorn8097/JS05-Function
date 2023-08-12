// การเขียน function จะมี 2 รูปแบบ หลักๆ
/*
 1. Funtion Declararion / Named Function
 2. Function Expresstion / มักจะถูกเขียนในรูปแบบ anonymous function
*/

/*การใช้งาน function 
1.ประกาศฟังก์ชั่น => กำหนดชื่อ , กำหนด input
2.เรียกใช้งาน
 */

// 1.Define
function sayHi(name,lastname){
    console.log(`hello ${name} ${lastname}`);
}
// call
sayHi("John","Doe"); // เรียกใช้รอบที่ 1
sayHi('pavit','Pimchanagul'); // เรียกใช้รอบที่ 2

// return value ผลลัพธ์ ที่ได้จาก run function จนเสร็จ
// add(5,6) === return value ,fn result
function add(x,y)
{
    // 0 sec
    let result = x + y;
    // 5 sec
    return result;
}
console.log(11===add(5,6)); // done : add(5,6) === result 11

//let r = 5+6;
let r = add(5,6); // เอาผลลัพธ์ของ add มาเก็บไว้ใน r  // สามารถ reuse result ได้
console.log(r);
console.log(r);

console.log(add(5,6)); // one time use => one the fly
console.log(add(5,6)); // one time use


function isEven(n)
{
    // if(n%2==0)
    // {
    //     return true;
    // } 
    // else
    // {
    //     return false;
    // } 

    return n%2 ==0; // เขียนย่อแทน if else
    // 6%2 ===0 (true)
    // 5 % 2 === 0 (false)
}

console.log(isEven(6));
console.log(isEven(5));

// check point 
/**
 Declaretion : ประกาศเป็น
 parameter : รับ input 
 call : รับ function ได้
 return : เข้าใจเรื่อง return // ถ้าไม่มี return มันจะส่งมาเป็น undefiend
 */


 // function expression 
 let a = 5*2+7;
 //variable = expresstion

 // expression คือ สิ่งที่ valuate เป็น single value ได้
 /*
 single value : 7
 combine expression : 7+2
 Function result : add(7,2);
 
 */

 let myFunc = add;
 let z = console.log;
//Fomat : variable = FN (FN Expression)
// FN EXPRESSION : การ assign fn ให้กับ variable(ตัวแปร)

 console.log(myFunc(5,2));
 z('hi'); // z = console.log;

 //Anonymous Function ฟังก์ชั่นที่ไม่มีชื่อ
 
 //Syntax : function expression
 // อธิบาย : กำลัง assign anonymous fn ให้กับตัวแปร sayHello
 const sayHello = function(name) {
    console.log('Hi world '+ name);
 }

 sayHello('Expression');

 // 1.Function add(){}
 // 2A let add = function () {}
 // 2B let add = () => {} // ถ้าไม่เขียน function ต้องมี ลูกศร

// const minus = (a,b) => {
//     return a - b;
// }

// const minus = (a,b) => a - b;
// const minusTwo = a => a - 2;

// // การเรียกใช้ ตัวแปร ที่เก็บ function ต้อง เอา ตัวแปรมาเรียก

// console.log(minus(10,2));
// console.log(minusTwo(3));


//////////////////////////////
////////// สรุป ///////////////
 //  1.function declaration 
 function add(x,y)
 {
    return x + y;
 }

 /// FN Expression
 const minus = function(x,y)
 {
    return x - y;
 }

 // Fn Expression (Arrow)
 const miltiply = (x,y) => x*y;
//  const log = console.log; // => log = fn
 const log = console.log() // => log = undefiend (FN Resiult)

 log(add(5,2)); // undefiend()
 // console.log(multiply(5,2));