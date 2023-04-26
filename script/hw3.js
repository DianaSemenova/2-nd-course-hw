let password = 'symbl';
let result = String(prompt('Введите пароль'));
result === password ? alert('Пароль введен верно') : alert('Пароль введен неправильно');//1

let c = 0;
(c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно');//2
c = 10;
(c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно');//2
c = -3;
(c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно');//2
c = 2;
(c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно');//2

let d = 120;
let e = 45;
(d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');//3

let a = '2';
let b = '3';
alert(+ a + + b);//4



let monthNumber = Number(prompt('Введите номер месяца в году'));

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;

    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;

    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;

    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;

    default:
        console.log('номер месяца больше 13');
        break;
} //5


//доп.задание 7
let EvenOddnumber = Number(prompt('Пожалуйста, введите любое число'));

 if (EvenOddnumber) {
     if ((EvenOddnumber % 2) === 0) {
         alert('Число четное');
     }
     if ((EvenOddnumber % 2) != 0) {
         alert('Число нечетное');
     }
 } else {
     alert(EvenOddnumber);
 }


 //доп.задание 8
// const mediaQuery = window.matchMedia('(min-width: 767px)');

// if (mediaQuery.matches) {
//   alert('Media Query Matched!')
// }

// let clientOS = 0;
// let clientAndroid = 1;

//  if (clientAndroid) {
//      alert("Установите версию приложения для Android по ссылке");
//  } else {
//    alert("Установите версию приложения для iOS по ссылке");
//  }


//  let clientDeviceYear = 2015;

//  if ((clientOS && clientAndroid) || clientDeviceYear



