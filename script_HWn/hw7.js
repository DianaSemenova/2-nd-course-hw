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
console.log(getRandomInt(0, 10));

//7-Напишите функцию, которая на вход принимает 2 целых числа, 
//а в качестве результата возвращает случайное целое число в этом диапазоне.
console.log(getRandomInt(20, 100));