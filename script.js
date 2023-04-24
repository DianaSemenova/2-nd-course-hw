let a = 10;
alert (a);
a = 20;
alert (a);//1

let yearIphone = "Год выпуска первого iPhone = 2007";
alert (yearIphone);//2
let nameJS = "Создатель языка JavaScript = Брендан Эйх";
alert (nameJS);//3

let c = 10;
let b = 2;

alert (c+b);
alert (c-b);
alert (c*b);
alert (c/b);

//alert (`сумма = ${c+b} разность = ${c-b} произведение = ${c*b} частное = ${c/b}`);//4

let result = b**5;
alert (result);//5

a = 9;
result = a % b;
alert (result);//6

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);//7

let age = prompt("Сколько вам лет?");
alert (age); //8

const user = {
    name: 'Диана', 
    age: 25,
    isAdmin: true
};//9

user ['city of residence'] = 'Ижевск'; //9.1

user.age = 26; //9.2

delete user ['city of residence']; //9.3

let info = prompt ("Какую информацию хотите узнать о пользователе?");
alert (user[info]); //9.4

result = prompt ('Как тебя зовут?');
alert (`Привет, ${result}!`); //10




