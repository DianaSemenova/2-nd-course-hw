//1
let i = 1;
while (i<3) {
    console.log ('Привет!');
    i++;
}       

//2
i = 1;
while (i<6) {
    console.log (i);
    i++;
}       

//3
i = 7;
while (i<23) {
    console.log (i);
    i++;
}  

//4
const obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400
}

for (const fkey in obj) {
    alert (`${fkey} — зарплата ${obj[fkey]} долларов.`);
}

//5
let n=1000;
let num = 0;
for (n, num; n >= 50; num ++){
    n = n/2;
    console.log (n);
}
console.log("Количество итераций = " + num);

//6
for (let dayFriday = 5; dayFriday <= 31; dayFriday += 7) { 
      console.log(`Сегодня пятница, ${dayFriday}-е число. Необходимо подготовить отчет.`);     
  }