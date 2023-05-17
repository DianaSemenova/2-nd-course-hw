function calcTimeYear(monthNumber) {
    if (!isNaN(monthNumber)) {
        if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
            return 'Зима';
        } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
            return 'Весна';
        } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
            return 'Лето';
        } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
            return 'Осень';
        } else {
            return 'Такого месяца не существует';
        }
    } else {
        return 'Вы ввели не числовое значение';
    }
}

//задание 7.11
// Необходимо перемешать элементы массива и вывести на экран пользователю с использованием alert();
// Спросить у пользователя:
// Чему равнялся первый элемент массива?
// Чему равнялся последний элемент массива?
// Поздравить пользователя, если он угадал оба элемента.
// Если пользователь угадал только одно слово, сообщить: «Вы были близки к победе!»
// Если не угадал ни одного элемента, сообщить, что пользователь ответил неверно.

function memorizeWords() {

    const fruitsArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let fruitsArraySort = fruitsArray.sort(() => Math.random() - 0.5);
    alert(fruitsArraySort);

    let indexWords = fruitsArraySort.length - 1;

    let userAnswerFirstEl = prompt('Чему равнялся первый элемент массива?');
    let userAnswerLastEl = prompt('Чему равнялся последний элемент массива?');

    if (userAnswerFirstEl.toLowerCase() === fruitsArraySort[0].toLowerCase() && 
    userAnswerLastEl.toLowerCase() === fruitsArraySort[indexWords].toLowerCase()) {

        alert('Поздравляем, Вы угадали оба элемента!');

    } else if (userAnswerFirstEl.toLowerCase() === fruitsArraySort[0].toLowerCase() || 
    userAnswerLastEl.toLowerCase() === fruitsArraySort[indexWords].toLowerCase()) {

        alert ('Вы были близки к победе!');

    } else {
        alert ('К сожалению, вы ответили неверно.')
    }

}

