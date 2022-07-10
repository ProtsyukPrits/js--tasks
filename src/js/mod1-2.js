/** @format */

// +++++++++++++++++++++

// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// const login = prompt('Login');
// const admin = 'Адмін';
// const adminMe = 'Я Адмін';
// if (login) {

// if (login.toLowerCase === admin.toLowerCase) {
//   const password = prompt('password');

//   if (password.toLowerCase === adminMe.toLowerCase
//   ) {
//     console.log('Привіт')
//   } else {
//     console.log('Невірний пароль')
//   }

// } else {
//   console.log('Я вас не знаю')
// }

// } else {
//   console.log('Відмінено')
// }

// +++++++++++++++++++++

// let arrayOfSheep = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

//    function countSheeps(arrayOfSheeps) {
//      let num = 0;
//      for (let i = 0; i < arrayOfSheeps.lenght; i += 1) {
//        if (arrayOfSheeps[i] == true) {
//          num += 1;
//        }
//      }
//      return num;
//    }

//  ++++++++++++++++++++++++++

// let haystack = [
//   "hay",
//   "junk",
//   "hay",
//   "hay",
//   "moreJunk",
//   "needle",
//   "randomJunk",
// ];

// function findNeedle(haystack) {
//   return (
//     "found the needle at position " + haystack.findIndex((s) => s == "needle")
//   );
// }

// ++++++++++++++++++++

// let str;

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("world")); // dlrow
// console.log(reverseString("word")); // drow

// незрозуміло чому не працює на codewars, liveserver працює.

// +++++++++++++++++++

// паттерн раннє повернення

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");

//   } else if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");

//   } else {
//     console.log("Операція зняття коштів проведена успішно");
//   }
// }

// withdraw(400, 300);

// +++++++++++++++++++++++++++++

// Create a function that takes an integer as an argument and returns
// "Even" for even numbers or "Odd" for odd numbers.

// function evenOrOdd(number) {
//   if (number % 2) {
//     console.log('Odd');
//   } else {
//     console.log('Even')
//   }
// }
// evenOrOdd(34);

// +++++++++++++++++++++++++

// It's pretty straightforward. Your goal is to create a function that removes
// the first and last characters of a string.
// You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

// function removeChar(str) {
//   const d1 = str.slice(1, str.length - 1);
//   console.log(d1);
// }
// removeChar('Please delete first and last element');

// +++++++++++++++++++++++++++

// Sum all the numbers of a given array(cq.list),
//   except the highest and the lowest element(by value, not by index!).

// The highest or lowest element respectively is a single element at each edge,
//   even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value(null, None, Nothing etc. ) is given instead of an array,
//   or the given array is an empty list or a list with only 1 element, return 0.

// const sumNums = (acc, cur) => acc + cur;

// function sumArray(array) {
//   return Array.isArray(array) && array.length > 1
//     ? array.reduce(sumNums, 0) - Math.min(...array) - Math.max(...array)
//     : 0;
// }
// console.log(sumArray([6, 2, 1, 8, 10]));
// console.log(sumArray([1, 1, 11, 2, 3]));

// +++++++++++++++++++
// auto b2(9)
// function getExtremeElements(array) {
//   // Change code below this line

//     const pushElements = [];
//     pushElements.push(array[0]);
//     pushElements.push(array[array.length - 1]);
//   return pushElements
// }
// console.log(getExtremeElements([1,2,3,4,5,6]));

// ++++++++++++++++++++++++++++
// auto b2(10)

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter)

//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// +++++++++++++++++++++++++++
// auto b2(11)

// function calculateEngravingPrice(message, pricePerWord) {

//   const sum = message.split(" ");
//   const totalSum = sum.length * pricePerWord;

//   return totalSum;
//  }

// console.log(calculateEngravingPrice("Web-development is creative work", 40));

// ++++++++++++++++++++
// auto b2(13)
// function slugify(title) {
//   let slugTitle;
//   slugTitle = title.split(" ").join("-").toLowerCase();
//   return slugTitle;

// }
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// ++++++++++++++++++++++++
// auto b2(16)

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line

//   let stringArray = firstArray.concat(secondArray);
//   let indexArray = stringArray.length;
//   // let sliceArray = stringArray.slice(0, maxLength);
//   if (indexArray > maxLength) {
//     console.log(stringArray = stringArray.slice(0, maxLength))
//   }
//   if (firstArray === maxLength) {
//     console.log(firstArray);
//   }
//   if (indexArray === maxLength) {
//     console.log(stringArray);
//   }

//   if (maxLength === 0) {
//     console.log([])
//   }
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);


// +++++++++++++++++++++
// auto b2(21)

// function findLongestWord(str) {
//   return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
// };

// function findLongestWord(string) {

//   const words = string.split(' ')
//   const word1 = words.reduce((a, b) => (b.length > a.length) ? b : a);
//   return word1

// }


//  +++++++++++++++ НАЙБІЛЬШЕ СЛОВО+++++++++++++++++++
// function findLongestWord(string) {
//   const stringSplit = string.split(" ");
//   let longestWord = "";

//   for (const word of stringSplit) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//  console.log(longestWord)
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");




// +++++++++++++++++++
// auto b2(22)
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i)
//   }
//   // Change code above this line
//  console.log(numbers)
// }

// createArrayOfNumbers(29, 34);


// ++++++++++++++++
// auto b2(23)

// function filterArray(numbers, value) {
//   // Change code below this line
//   const array = [];
//   for (let i = 0; numbers.length > i; i += 1) {
//     if (numbers[i] > value) {
//       array.push(numbers[i]);
//     }
//   }
// console.log(array);
//   // Change code above this line
// }
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([1, 2, 3, 4, 5], 5);



// +++++++++++++++++
// auto b2(24)
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   // if () {
//   //   console.log(true)
//   // } else {
//   //   console.log(false)
//   // }
//   console.log(fruits.includes(fruit))
  
//    // Change this line
// }
// checkFruit("plum");
// checkFruit("mandarin");




// +++++++++++++++++++++++
// auto b2(25)
// function getCommonElements(array1, array2) {
 
//   const array = [];
//   const arrayLength = array1.includes(array2);
  
//   for (let i = 0; i < arrayLength; i += 1) {
//     arrayLength = array.push()
//    console.log(arrayLength)
//   }

// console.log(array)


// }

// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([1, 2, 3], [10, 20, 30]);