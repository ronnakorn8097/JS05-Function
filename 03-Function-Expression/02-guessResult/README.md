บรรทัด \* และ \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const showModal = alert;
showModal("Execute modal"); // *
// * Execute modal
//alert("Execute modal");
```

```js
const showModal = alert();
showModal("Execute modal"); // ** no show any data
// เป็นการเรียกใช้ function alert แต่ไม่ส่ง ค่าคืนมา ซึ้งเราจะได้ค่า undefined มา 