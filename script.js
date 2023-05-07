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

