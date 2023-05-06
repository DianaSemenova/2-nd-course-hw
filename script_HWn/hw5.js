// 1 - Напишите функцию, которая возвращает меньшее из 2 чисел. Например, 
// из двух чисел — 8 и 4 — функция должна вернуть 4. 
// Если передадим 6 и 6, то функция должна вернуть 6.
let minNumber = (a, b) => {
    return ((a < b) ? a : b);
}

console.log(minNumber(5, 6));
console.log(minNumber(6, 6));
console.log(minNumber(10, 8));

// 2 - Напишите функцию, которая принимает число, а возвращает строку 'Число четное', 
// если число четное, 'Число нечетное' — если нечетное.
function calcEvenOddnumber(evenOddnumber) {
    if (evenOddnumber) {
        if (evenOddnumber % 2) {
            return 'Число нечетное';
        } else {
            return 'Число четное';
        }

    } else if (evenOddnumber === 0) {
        return 'Число четное';
    }
    else {
        return evenOddnumber;
    }
}

calcEvenOddnumber(Number(prompt('Пожалуйста, введите любое число')));

//3.1 - Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.

let calcSquareNumber1 = (number) => console.log(number ** 2);

calcSquareNumber1 (Number(prompt('Введите число')));

//3.2 - Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.

let calcSquareNumber2 = (number) => {
    return number ** 2;
 }
 
 calcSquareNumber2 (Number(prompt('Введите число')));

