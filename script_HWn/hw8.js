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
