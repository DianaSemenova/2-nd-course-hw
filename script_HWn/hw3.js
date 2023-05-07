let password = 'symbl';
let result = String(prompt('Введите пароль'));
result === password ? alert('Пароль введен верно') : alert('Пароль введен неправильно');//1

let c = 0;
console.log((c > 0 && c < 10) ? 'Верно' : 'Неверно');
//(c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно');//2
c = 10;
console.log((c > 0 && c < 10) ? 'Верно' : 'Неверно');//2
c = -3;
console.log((c > 0 && c < 10) ? 'Верно' : 'Неверно');//2
c = 2;
console.log((c > 0 && c < 10) ? 'Верно' : 'Неверно');//2

let d = 120;
let e = 45;
console.log((d > 100 || e > 100) ? 'Верно' : 'Неверно');//3

let a = '2';
let b = '3';
alert(Number(a) + Number(b));//4



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
let evenOddnumber = Number(prompt('Пожалуйста, введите любое число'));

if (!isNaN(evenOddnumber)) {
    if (evenOddnumber % 2) {
        alert('Число нечетное');
    } else {
        alert('Число четное');
    }

} else {
    alert('Вы ввели не числовое значение');
}

//Второй вариант
// if (evenOddnumber) {
//     if (evenOddnumber % 2) {
//         alert('Число нечетное');
//     } else {
//         alert('Число четное');
//     }

// } else if (evenOddnumber === 0) {
//     alert('Число четное');
// }
// else {
//     alert(evenOddnumber);
// }


//доп.задание 8
let clienOS = Number(prompt('Введите 0 если у вас IOS, введите 1 если у вас android'));

if (clienOS === 1) {
    confirm("Установите версию приложения для Android по ссылке");
} else {
    confirm("Установите версию приложения для iOS по ссылке");
}

////доп.задание 9

let clientDeviceYear = Number(prompt('Введите год выпуска телефона'));

if (clientDeviceYear) {
    if (clienOS === 0 && clientDeviceYear < 2015) {
        confirm('Установите облегчённую версию приложения для IOS по ссылке');
    }
    if (clienOS === 1 && clientDeviceYear < 2015) {
        confirm('Установите облегчённую версию приложения для Android по ссылке');
    }
    if (clienOS === 0 && clientDeviceYear >= 2015) {
        confirm('Установите версию приложения для IOS по ссылке');
    }
    if (clienOS === 1 && clientDeviceYear >= 2015) {
        confirm('Установите версию приложения для Android по ссылке');
    }
} else {
    alert(clientDeviceYear);
}