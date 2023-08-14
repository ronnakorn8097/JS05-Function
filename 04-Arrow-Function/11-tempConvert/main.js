// ให้เขียนฟังก์ชันแปลงอุณหภูมิจาก farenheit เป็น celsius

const convertCelsius = f => 
{
    let c = 0;
    c = (f-32)/1.80
    return c;
};

console.log(convertCelsius(98));



