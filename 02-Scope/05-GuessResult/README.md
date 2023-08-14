บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * hello every body
}

logMessage(message);
console.log(message); // ** welcome to thailand เพราะ ตัวแปรที่ใช้เป็น global
```




```js
let name = "John";

function sayHi(input) {
  console.log(name); // ***
  name = input;
}

sayHi();
console.log(name); // ****
```
