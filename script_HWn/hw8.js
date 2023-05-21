//1-С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите их в консоль.
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

function sortAscending(a, b) {
    return a.age - b.age;
};
console.log(people.sort(sortAscending));


//3-Напишите программу, которая на протяжении 30 секунд каждые 3 секунды 
// будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».


// let stopInterval = setInterval(() => {
//     let currentDate = new Date();
//     console.log(currentDate);
// }, 1000 * 3);

// setTimeout(() => {
//     clearInterval(stopInterval);
//     console.log('30 секунд прошло');
// }, 1000 * 30);

function getCurrentDate(time, timeStop) {
    let currentDateInterval = setInterval(() => {
        let currentDate = new Date();
        console.log(currentDate);
    }, time);

    let stopInterval = setTimeout(() => {
        clearInterval(currentDateInterval);
        console.log('30 секунд прошло');
    }, timeStop);

}

getCurrentDate(3000, 30000);


// 4-Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
// Допишите функцию delayForSecond
//  так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте setTimeout.

function delayForSecond(callback) {
    setTimeout(() => {
        console.log(callback());
    }, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})


// 5-Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:
// Правильный порядок:
// Прошла одна секунда
// Привет, Глеб!

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
//delayForSecond(sayHi('Глеб'))

delayForSecond(function () {
    sayHi('Глеб')
});


// 2 -Реализуйте функцию filter, которая должна работать аналогично методу массива `filter. 
// За основу возьмите функцию map, которую мы реализовывали на уроке.
// Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова ruleFunction, 
// принимать решение о том, добавлять в результирующий массив очередной элемент или нет.
// Возьмите за основу код ниже. Задание считается выполненным, если два console.log в коде выводят правильное значение:


function isPositive(number) {
    return number > 0;
}
function isMale(word) {
    return word.gender === 'male';
}
function filter(arr, ruleFunction) {
    let arrayNew = arr.filter(el => ruleFunction(el))
    return arrayNew;

}
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]