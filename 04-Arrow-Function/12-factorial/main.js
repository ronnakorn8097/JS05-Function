// ให้เขียนฟังก์ชันคำนวณค่า factorial


const factorial = x => 
{
    let sum = 1;
    for(let i =1; i<=x;i++)
    {        
        sum *= i;
    }
    return sum;
};
console.log(factorial(5)); // 120

// i=1 , 1 <= 5 assign 1 ไว้ใน sum
// i=2 , 2 <= 5 assign 2*1 = 2 ไว้ใน sum

