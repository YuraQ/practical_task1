//task2
alert("Matsiuk");

//task3

// a) оголосіть дві змінні;
let one;
let two;

// b) запишіть у змінні будь-які значення;
one = "1";
two = "2";

//     c) виведіть на екран значення змінних;
document.write(one, two);

//     d) скопіюйте значення однієї змінної в іншу;
one = two;

//     e) виведіть на екран значення змінних.
document.write(one, two);


//task4

//  Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”.
//  Значення кожної властивості повинно відповідати відповідному примітивному типу даних.

let testObject = "text"; //string;
let testObject2 = 42; //number
let testObject3 = true; // boolean
let testObject4; // Undefined
let testObject3 = null; // null


//task5

//Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.


let isAdult = confirm('Ви повнолітні?');
console.log(isAdult);

//task6

// В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
// 	- ваше ім’я
// 	- ваше прізвище
// 	- навчальна група
// 	- ваш рік народження.
// Присвойте змінним відповідні значення. 
// Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
// Визначте тип кожної змінної.
// Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
// Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.

let yourName="Yura"; //string
let surname="Matsiuk"; //string
let group="js"; //string
let year=1992; //number
let maridStatus=true; //boolean

console.log(year, maridStatus, group, yourName, surname);

let letNull = null;
let letUndefined;
console.log(typeof letNull, letUndefined);


//task7

// За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.

let login = prompt('Введіть ваш логін');
let email = prompt('Введіть вашу електронну пошту');
let password = prompt('Введіть пароль');
alert(`Dear ${login}, your email is ${email}, your password is ${password}`);


//task8

// Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.

const second=60;
const hours=60;
const day=24;
let month=30;// let так я місяць може мати іншу кількість днів, відповідно хй можна задати інше значення
let secondsInMonth = second*hours*day*month;

alert(secondsInMonth);


