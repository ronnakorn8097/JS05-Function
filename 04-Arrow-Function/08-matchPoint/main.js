// ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน

// TEAM : ท่าเรือใบสีฟ้า (Man city)
// total match : 38 [ignore]
// win : 28 => 28*3 = 84 [significant] 
// Draw : 5 => 5*1 = 5 [significant]
// lose : 5 => 5*0= 0 [ignore]

// total : 89;

// abstraction
//Hiding complixity
// easy interact

// (win,draw) => total

const calMatchPoint = (win,draw) => win * 3 + draw;

console.log(calMatchPoint(28,5));