function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // * ไม่แสดงผล เพราะ ไม่มีการส่ง argument ไปท่ parameter ของ functionx
// console.log(sayHi(10)); // **alert Hi kid มีการส่ง argument ไปที่มี value เท่ากับ 10