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

