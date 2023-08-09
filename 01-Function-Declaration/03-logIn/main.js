// - ให้สร้างฟังก์ชัน login ที่มีพารามิเตอร์ 2 ตัว คือ username และ password

// - ถ้า username = “admin” และ password = “P@ssw0rd” แสดงว่า login สำเร็จ แต่ถ้าไม่ใช่แสดงว่าไม่สำเร็จ

// let user = prompt("Enter your username");
// let password = prompt("Enter your password");

// function getCheck()
// {
//     if(user === "admin" && password === "P@ssw0rd")
//     {
//         alert("Login Success");
//     }
//     else alert("Invalid Login")
// }

// getCheck();


function login(username,password)
{
    if(username === "admin" && password === "P@ssw0rd")
        {
            alert("Login Success");
        }
        else alert("Invalid Login")
}

let username = prompt("enter username");
let password = prompt("enter password");

login(username , password);
// login("admin","P@ssw0rd");


