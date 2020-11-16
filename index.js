// task-1
// let admin;
// let name;
// name = "Jone";
// admin = name;

// alert(admin);

// task-2
// const leapYear = "высокосный год";
// const notLeapYear = "Невысокосный год";
// const invalidYear = "This year is not exist";
// const inputYear = prompt();
// console.log(inputYear);
// if (inputYear === null) {
//   alert("Отмена пользователем");
// } else {
//   if (inputYear == 0 || isNaN(inputYear)) {
//     alert(invalidYear);
//   } else if (inputYear % 4 === 0 && inputYear != 0) {
//     alert(leapYear);
//   } else {
//     alert(notLeapYear);
//   }
// }
// task-3
// let userInput = prompt("Write the number from 1 to 10!");
// let mashineNumber = Math.floor(Math.random() * (4 - 1) + 1);

// // console.log(mashineNumber);
// if (userInput === null) {
//   alert("canceled by User");
// } else {
//   userInput = +userInput;
//   console.log(userInput);
//   if (isNaN(userInput)) {
//     alert("Write a number");
//   } else if (userInput === mashineNumber) {
//     alert(`Matched : ${userInput} - ${mashineNumber}`);
//   } else if (userInput < 1 || userInput > 10) {
//     alert("You wrote incorrect number. Please write from 1 to 10");
//   } else {
//     console.log("Not matched", userInput, mashineNumber);
//   }
// }

// Module 2
// Task - 1
// Написати ф-ю capitalize яка буде приймати строку і
// буде вертати нову строку де кожне слово буде починатися з великої літери.

// const capitalize = function (string) {
//   console.log(string);
//   const array = string.split(" ");
//   console.log(array);
//   const newArray = [];

//   for (let item of array) {
//     console.log(item);
//     const word = item[0].toUpperCase() + `${item.slice(1)}`;
//     console.log(word);
//     newArray.push(word);
//   }
//   console.log(newArray);
//   return (string = newArray.join(" "));
// };

// console.log(capitalize("the quick brown fox")); // 'The Quick Brown Fox '

// const string = "I love Js!";

// for (let word of string) {
//   if (word === " ") {
//     continue;
//   }
//   console.log(word);
// }
// Task - 2
// Написати ф-ю countVowels яка буде приймати строку і буде вертати
// кількість голосних літер.aeiouAEIOU - рядок з голосними в англ алфавіті
// function countVowels(string) {
//   const vowels = "aeiouAEIOU";
//   let total = 0;
//   for (let item of string.toLowerCase()) {
//     console.log(item);
//     if (vowels.includes(item)) {
//       total += 1;
//     }
//   }
//   console.log(total);
// }

// countVowels("the quick brown fox"); // 5

// Module 3


// == task-1 == //
// Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару) 
// Ця ф - я має повернути ціну замовлення
// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 } 
// const orderA = { apple: 5, cheese: 1, bread: 3}
// const orderB = { orange: 10, pork: 2, bread: 1 }

// const sumOrder = (prices, order)=> {
  
  
//   const nPrices = Object.entries(prices)

//   let sum = 0;

//   for (let nPrice of nPrices) {
//     // const [name, count] = nPrice;

//     const numberOrder = order[nPrice[0]];
//     if (isNaN(Number(numberOrder))) {
//   continue
//     } else {
//       sum += numberOrder * nPrice[1]
//     }
//   }
//   return sum
// }

// console.log(sumOrder(productsPrice, orderB));

// ANOTHER version 

// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 } 
// const orderA = { apple: 5, cheese: 1, bread: 3}
// const orderB = { orange: 10, pork: 2, bread: 1 }

// const sumOrder = (prices, order)=> {
//     const arrayPrices = Object.keys(prices)
//     const arrayOrder = Object.keys(order)
//     console.log(arrayPrices);
//     console.log(arrayOrder);
//     let sum = 0;
//     for (let key of arrayOrder){
//         console.log(key);
//         if (arrayPrices.includes(key)) {
//             sum += prices[key] * order[key]
//             console.log(sum);
//         }
//     }

  
//   return sum
// }

// console.log(sumOrder(productsPrice, orderA));
// console.log(sumOrder(productsPrice, orderB));




// // == task-2 == //
// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. 
// Якщо обєкт пустий то повернути true інакше false

// const checkObject = (object) => Object.keys(object).length === 0 ? true : false;
  

// console.log(checkObject({ price: 25, cal: 100, time: 15 }))

//  == task - 3 == //
// Створити обєкт піци з полями і методами

// В обєкті має бути такі поля і методи:

// поле для збереження розміру піци
// поле для збереження списку добавок
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)

// const SIZES = {
//     BIG: { price: 25, cal: 100, time: 15 },
//     SMALL: { price: 15, cal: 50, time: 7 },
//     MEDIUM: { price: 15, cal: 50, time: 7 },
//     EXTRA: { price: 25, cal: 100, time: 20 },
// }
// const STUFFING = {
//     CHEESE: { name: "CHEESE", price: 6.5, cal: 45, time: 2 },
//     BEACON: { name: "BEACON", price: 10, cal: 70, time: 6 },
//     TOMATO: { name: "TOMATO", price: 12.1, cal: 4, time: 5 },
//     CHICKEN: { name: "CHICKEN", price: 9.3, cal: 30, time: 5.1 }
// }
// const SAUCES = {
//         MUSTARD: { name: "MUSTARD", price: 3, cal: 5, time: 1 },
//         KETCHUP: { name: "KETCHUP", price: 4.2, cal: 20, time: 1.5 },
//         BOLOGNESE: { name: "BOLOGNESE", price: 7.5, cal: 50, time: 3 },
//     }
//     // Створити всі методи і перевірити чи вони працюють

// const pizza = {
//     size: [],
//     stuff: [],
//     sauces: [],
//     isValid: false,

//     toShowSize() {
//         console.log(this.size)
//     },
//     toSetSize(value) {
//         if (this.size.includes(value)) return console.log("Такая добавка уже есть")
//         this.size.push(value)
//         console.log(this.size)
//     },
//     setStuff(value) {
//         if (this.stuff.includes(value)) return console.log("Такая добавка уже есть")
//         this.stuff.push(value)
//         console.log(this.stuff)
//     },
//     setSauces(value) {
//         if (this.sauces.includes(value)) return console.log(`Такой ${value.name} уже добавлен`)
//         this.sauces.push(value)
//         console.log(this.sauces)
//     },

//     delStuff(value) {
//         if (!this.stuff.includes(value)) return console.log("Такой добавки нет")
//         for (let i = 0; i < this.stuff.length; i += 1) {
//             if (this.stuff[i] === value) {
//                 this.stuff.splice(i, 1)
//                 return console.log(this.stuff)
//             }
//         }
//     },

//     delSauces(value) {
//         if (!this.sauces.includes(value)) return console.log("Такого соуса нет")
//         for (let i = 0; i < this.sauces.length; i += 1) {
//             if (this.sauces[i] === value) {
//                 this.sauces.splice(i, 1)
//                 return console.log(this.sauces)
//             }
//         }
//     },

//     getCost(num) {
//         let total = 0
//         for (let i = 0; i <= num; i += 1) {
//             if (this.size[i] === undefined || this.stuff[i] === undefined || this.sauces[i] === undefined) continue
//                 // console.log(this.size[i].price)
//                 // console.log(this.stuff[i].price)
//                 // console.log(this.sauces[i].price)
//             total += this.size[i].price + this.stuff[i].price + this.sauces[i].price
//         }
//         return console.log(total)
//     },
//     getCallories(num) {
//         let total = 0
//         for (let i = 0; i <= num; i += 1) {
//             if (this.size[i] === undefined || this.stuff[i] === undefined || this.sauces[i] === undefined) continue
//                 // console.log(this.size[i].price)
//                 // console.log(this.stuff[i].price)
//                 // console.log(this.sauces[i].price)
//             total += this.size[i].cal + this.stuff[i].cal + this.sauces[i].cal
//         }
//         return console.log(total)
//     },

//     toShowOrder() {
//         console.log(this.size, this.stuff, this.sauces)
//     },


//     toGetTotalTime(num) {
//         let total = 0
//         for (let i = 0; i <= num; i += 1) {
//             if (this.size[i] === undefined || this.stuff[i] === undefined || this.sauces[i] === undefined) continue
//                 // console.log(this.size[i].price)
//                 // console.log(this.stuff[i].price)
//                 // console.log(this.sauces[i].price)
//             total += this.size[i].time + this.stuff[i].time + this.sauces[i].time
//         }
//         return console.log(total)
//     },

//     toValidateOrder() {

//     },
// }
// console.log(pizza)
// pizza.toSetSize(SIZES.BIG)
// pizza.setStuff(STUFFING.CHEESE)
// pizza.setStuff(STUFFING.BEACON)
// pizza.setStuff(STUFFING.CHEESE)
// pizza.setSauces(SAUCES.KETCHUP)
// pizza.setSauces(SAUCES.MUSTARD)
// pizza.delStuff(STUFFING.CHEESE)
// pizza.delStuff(STUFFING.TOMATO)
// pizza.delSauces(SAUCES.MUSTARD)
// pizza.getCost(4)
// pizza.getCallories(4)
// pizza.toGetTotalTime(4)

// const burger = {
//         size: [],
//         stuff: [],
//         sauces: [],
//         isValid: false,

//     }
//     // pizza.toSetSize.call(burger, SIZES.SMALL)
//     // pizza.setStuff.apply(burger, [STUFFING.BEACON])

// function myFunc(callback) {
//     callback()
// }
// myFunc(pizza.toSetSize.bind(burger, SIZES.EXTRA))

// !!!!!!!!!!!!!!  

// Калькулятор
// const btnPlus = document.getElementById('plus')
// const btnMinus = document.getElementById('minus')
// const btnMult = document.getElementById('mult')
// const btnShare = document.getElementById('share')
// const first = document.getElementById('firstNum')
// const second = document.getElementById('secondNum')
// const result = document.getElementById('result')

// class Calc {
//     constructor(id) {
//         this.id = id;
//     }
//     toGetNumbers(tag1,tag2) {
//         this.firstValue = +prompt('Введите первое число')
//         this.secondValue = +prompt('Введите второе число')
//         tag1.textContent = this.firstValue 
//         tag2.textContent =  this.secondValue

// }
//     toSum(place,tag1,tag2) {
//         this.toGetNumbers(tag1,tag2)
//         return this.firstValue + this.secondValue
//         this.toShowResult(place,total)
//     }
//     toSub(place,tag1,tag2) {
//         this.toGetNumbers(tag1,tag2)
//         return this.firstValue - this.secondValue
//         this.toShowResult(place,total)
//     }
    
//     toMult(place,tag1,tag2) {
//         this.toGetNumbers(tag1,tag2)
//         return this.firstValue * this.secondValue
//         this.toShowResult(place,total)
//     }
//     toShare(place,tag1,tag2) {
//         this.toGetNumbers(tag1,tag2)
//         let total = this.firstValue / this.secondValue
//         this.toShowResult(place,total)
//     }
    
//     toShowResult(place,value) {
//         // alert(`Результат операции: ${value}`)
//         place.textContent = value;
//     }
    
// }

// const myCalc = new Calc(1);
// console.log(myCalc)

// btnPlus.addEventListener('click', () => myСalc.toSum(resul, first, second))
// btnMinus.addEventListener('click', () => myСalc.toSub(resul, first, second))
// btnMult.addEventListener('click', () => myСalc.toMult(resul, first, second))
// btnShare.addEventListener('click', ()=> myСalc.toShare(resul, first, second))

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // == task-2 == //
// Створити класи Library та Book

// 1. Клас Library буде описувати нашу бібліотеку книжок. Всі книжки будуть зберігатися в масиві.
// Також цей клас буде мати такі методи:

// - Метод buy - це метод що приймає аргументом обєкт книги і додає її в бібліотеку якщо її там ще немає. Якщо книга вже є показує повідомлення що книга вже куплена
// - Метод sell - це метод що приймає аргументом назву книги і видаляє її з бібліотеки
// - Метод addToFavourite - це метод що приймає аргументом назву книги і додає обєкт книги в список улюблених
// - Метод removeFromFavourite - це метод що приймає назву книги і видаляє її з списку улюблених
// - Гетер сountFavouriteBooks - це гетер що показує кількість книжок що додані в улюблені
// - Гетер finishedBook - це гетер що містить колекцію всіх прочитаних книжок
// - Метод totalCost - це метод що рахує вартість всіх книжок в бібліотеці

// 2. Клас Book буде описувати окрему книгу. Кожна книга це буде обєкт з такими ключами
// - author
// - title
// - price
// - totalPages
// - currentPage

// Також цей клас буде мати такі методи:

// - Метод read - це метод що приймає кількість сторінок що було прочитано і міняє значення currentPage
// - Гетер bookProgres - гетер що переводить кількість прочитаних сторінок в відсотки
// - Сетер bookProgres - сетер що переводить відсоток прочитаних сторінок в кількість
// Клас Book приймає один аргумент - обєкт з парметрами книги. В середині класу використовувати деструктуризацію обєкта

// class Library {
//     constructor() {  
//         this.books = [];
//         this.favourite = [];
//     }
//     toBuy(book) {
//         if (this.books.includes(book)) {
//             alert('This book exsists')
//         }
//         this.books.push(book);
//     }
//     toSell(bookName) {
//         this.books.forEach(({name}, idx) => {
//             if (name === bookName) {
//               this.books.splice(idx,1)
//             }
//         })
//         return this.books
//     }
//     addToFavorit(bookName) {
//         let favoritBook = this.books.find(({ name }) => name === bookName)
//         this.favourite.push(favoritBook)
//         return this.favourite
//     }
//     removeFromFavorite(bookName) {
//         this.favourite.forEach(({ name }, idx) => {
//             if (name === bookName) {
//                 this.favourite.splice(idx, 1)
//             }
//         })
//         return this.favourite
//     }

//     get countFavoriteBooks() {
//         return this.favourite.length
        
//     }

//     get finishedBook() {
        
//     }
//     getTotalCost() {
        
//     }
// }

// const myLibrary = new Library();
// console.log(myLibrary);
// myLibrary.toBuy({ name: 'core JS', year: 2020 });
// myLibrary.toSell('core JS');
// myLibrary.toBuy({ name: 'React JS', year: 2020 });
// myLibrary.toBuy({ name: 'Node JS', year: 2020 });



// myLibrary.addToFavorit('React JS');
// myLibrary.addToFavorit('Node JS');

// myLibrary.removeFromFavorite('Node JS');



// class Book {
//     constructor(book) {
//         this.author = book.author;
//         this.title = book.title;
//         this.price = book.price;
//         this.totalPages = book.totalPages;
//         this._currentPage = book.currentPage;
// }
    
//     readBook(amount) {
//         return this._currentPage = amount
//     }
    
//      get bookProgres() {
//     return this._currentPage * 100/ this.totalPages
//   }

//   set bookProgres(value) {
//     this._currentPage = this.totalPages * value / 100;
//   }

// }


// const book = { author: "Repeta", title: "JS", price: 2000, totalPages: 234, currentPage: 123 };
// const bookItem = new Book(book)



// console.dir(bookItem.redBook(250))
// console.log(bookItem)
// bookItem.bookProgres = 50
// console.log(bookItem.bookProgres)
// console.log(bookItem)




// // == task-1 == //
// Створити простенький калькулятор за допомогою класу.
// Цей клас буде мати такі методи:
// 1. Метод що запитує в користувача 2 числа
// 2. Метод що додає ці числа
// 3. Метод що віднімає ці числа
// 4. Метод що перемножує ці числа
// 5. Метод що ділить ці числа
// 6. Метод що виводить результат арефметичної операції на екран в форматі `Результат операції ${value}`
// цей метод запускаєтьсяв кінці кожного з методів 2-5
// 7. Метод що додає в калькулятор новий функціонал (Приймає аргументом колбек в якому описаний новий метод)
// 8. Передати в метод №7 колбек ф-ю що підносить числа в степінь
// 9. Написати всі методи і перевірити чи вони працюють

// class Calculator {

//     constructor(a, b) {
//         this.a = a
//         this.b = b
// }  

//     addFigures() {
//          const value = this.a + this.b
//         return function result(){
//             console.log(`Результат операції ${value}`)
//         }
//     }
    
//     deductFigures() {
//         const value = this.a - this.b
//         return function result(){
//             console.log(`Результат операції ${value}`)
//         }
//     }
//     multFigures() {
//         const value = this.a * this.b
//         return function result(){
//             console.log(`Результат операції ${value}`)
//         }
        
//      }
//     divideFigures() {
//         const value = this.a / this.b
//         return function result(){
//             console.log(`Результат операції ${value}`)
//         }
//     }

//     elevateFigures() {
//         const value = calculator.a ** calculator.b
//         return value
//     }

//    data(cb) {
//        let result = cb()
//        console.log(result)

// };

// }

// const calculator = new Calculator(6, 2)

// const sum = calculator.addFigures()
// const deduction = calculator.deductFigures()
// const multiply = calculator.multFigures()
// const divide = calculator.divideFigures()
// const callback = calculator.elevateFigures
// const elevate = calculator.data(callback);




// sum()
// deduction()
// multiply()
// divide ()
