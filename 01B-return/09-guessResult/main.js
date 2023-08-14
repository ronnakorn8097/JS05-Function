function sayHi(age) {
    if (age < 12) alert("Hi kid");
  }
  console.log(sayHi); 
  //แสดงผล ทั้ง function คิดว่า ที่แสดงเพราะ มันไม่ได้เรียกใช้ function แต่เป็นการแสดงผลของฟังก์ชั่น
  console.log(sayHi(10)); 
  // ** โชว์ alert Hi kid เนื่องจาก ส่ง argument 10 ไป func sayHi 
  //เข้า parameter ชื่อ age จากนั้นนำไป เปรียบเทียบ และแสดงผล