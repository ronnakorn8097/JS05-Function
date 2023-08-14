// - ให้สร้างฟังก์ชัน max ซึ่งจะคืนค่าพารามิเตอร์ที่มีค่ามากที่สุด
// - พารามิเตอร์มีได้มากสุด 4 ตัว
// - หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้คืนค่าเป็น NaN
// - เมื่อเรียกใช้งานฟังก์ชันต้องได้ผลลัพธ์ ดังนี้

// max(); // undefined
// max(2); // 2
// max(3, 1); // 3
// max(7, 3, 9, 2); // 9

function findMax (a,b,c,d)
{
    const valueA = a > b && a>b && a>c && a>d;
    const valueB = b > a && b > c && b > d;
    const valueC = c > a && c > b && c > d;
    const valueD = d > a && d > b && d > c;
    
    if(valueA && valueA != null && valueA != "") console.log(a);
    else if(valueB && valueB != null && valueB != "") console.log(b);
    else if(valueC && valueC != null && valueC != "") console.log(c);
    else if(valueD && valueD != null && valueD != "") console.log(d);
    else console.log("Try Again");

       
}
console.log(findMax(2,3,1,2));
