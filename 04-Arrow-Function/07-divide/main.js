// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าหาร 7 ลงตัวหรือไม่

const divide = x => {
    for(let n =2 ;n<=x;n++)
    {
        if(x%7 == 0)
        {
            return true;
            // console.log(x);
            
            
        }
        return false;
        // console.log(x);
    }   
}


console.log(divide(7));

