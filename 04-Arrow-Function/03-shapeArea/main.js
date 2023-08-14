// บรรทัดที่มี \* , \*\*ให้ผลลัพธ์เป็นอะไร เพราะอะไร

const square = (n) => {
  n ** 2;
};

console.log(square(7)); // * undefiend //function ไม่ควรใส่วงเล็บ 

const calcCircleArea = (r) => Math.PI * r ** 2; // 3.14
console.log(calcCircleArea(3)); // ** 28.26