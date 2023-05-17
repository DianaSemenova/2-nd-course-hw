//1-Преобразуйте строку js в верхний регистр JS.
let str = 'js';
console.log(str.toUpperCase());

// 2-Создайте функцию, которая в качестве параметров принимает массив строк и строку. 
// Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, 
// которые начинаются с переданной строки. Регистр символов не должен влиять.
function getStrArray(array, fValue) {
    return array.filter((word) => word.toLowerCase().startsWith(fValue.toLowerCase()));

}
console.log(getStrArray(["Кошка", "Кит", "Комар", "Носорог"], "ко"));
console.log(getStrArray(["яблоко", "груша", "гриб", "огурец"], "гру"));
console.log(getStrArray(["Дом", "Банк", "Больница", "Театр"], "Кино"));

// 3-Округлите число 32.58884:
// До меньшего целого
// До большего целого
// До ближайшего целого
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

// 4-Даны числа 52, 53, 49, 77, 21, 32. 
// Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//5-Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.
function getRandomInt(minValue, maxValue) {

    return Math.round(Math.random() * (maxValue - minValue)) + minValue

}
console.log(getRandomInt(1, 10));

//7-Напишите функцию, которая на вход принимает 2 целых числа, 
//а в качестве результата возвращает случайное целое число в этом диапазоне.
console.log(getRandomInt(20, 100));


//8-Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.
let currentDate = new Date();
console.log(currentDate);

// 9-Создайте переменную currentDate и сохраните в нее текущую дату. 
// Выведите дату, которая наступит через 73 дня после текущей.

currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//10-Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
// Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
// Время: <часы>:<минуты>:<секунды>
// Время, которое будет выведено, также хранится в объекте Date.

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();

let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() +
    " - это " + days[myDate.getDay()] +
    " Врем: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

console.log(fullDate);

// 6-Напишите функцию, которая будет принимать на вход целое число, 
// а возвращать массив случайных целых чисел от 0 до переданного числа. 
// Длина массива должна быть в 2 раза меньше переданного числа.

getRandomArrNumbers(7); // [6, 2, 7] - массив заполнен случайными числами
// от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего
// числа, получаем 3
getRandomArrNumbers(12); // [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
// от 0 до 12, длина массива 12 / 2 = 6

function getRandomArrNumbers(number) {

    const arrayRound = [];

    let lengthNumber = Math.round((number / 2));

    for (let i = 0; i < lengthNumber; i++) {
        arrayRound.push(Math.round(Math.random() * number));
    };
    
    console.log (arrayRound);
}

getRandomArrNumbers(12);
getRandomArrNumbers(20);
getRandomArrNumbers(7);
