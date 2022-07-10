/** @format */

// const cards = [45, 34, 56, 75, 98, 102, 32, 1];
// let total = 0;
// for (let i = 0; i < cards.length; i += 1) {
//   total += cards[i];
// }
//   console.log(cards);
// console.log('Total: ', total);

// +++++++++++

// const numbers = [3, 14, 15, 56, 47, 34, 45, 65, 66];

// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i])
//   if (numbers[i] % 2 === 0) {
//     console.log('Парні');

// }
//   total += numbers[i];
// }
// console.log("Total: ", total);

// ++++++++++++

// const logins = ['adasdasdas', 'adddwww', 'parol', 'dwdwwfwf'];
// const loginToFind = 'parol';
// let message = `Користувач ${loginToFind} не знайдено`;

// for (const login of logins) {
//   console.log('Login: ', login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind)

//   if (login === loginToFind) {
//     console.log('Ураа');
//     message = `Користувач ${loginToFind} знайдено`
//     break;
//   }
// }

// тернарник
// const logins = ["avocoder", "wdwdw", "parol", "wdwdwdw"];
// const findLogins = function (allLogins, loginToFind) {

//  return allLogins.includes(loginToFind)
//     ? `Користувач ${loginToFind} знайдено`
//     : `Користувач ${loginToFind} не знайдено`;
// }
// console.log(findLogins(logins, "q"));
// console.log(findLogins(logins, "e"));
// console.log(findLogins(logins, "parol"));
// console.log(findLogins(logins, "b"));

// ++++++++++++++

// const findSmallNumber = function (numbers) {
//   let smallNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallNumber) {
//       smallNumber = number;
//     }
//   }
//   return smallNumber
// }
// console.log(findSmallNumber([2, 4, 6, 87, 90, 1]));
// console.log(findSmallNumber([4, 5, 6, 87, 90, -1]));

// console.log(findSmallNumber([-2, 3, 6, 87, 90, 7]));

// +++++++++

// const changeLeters = function (string) {
//   const letters = string.split("");
//   let invertedString = "";

//   for (const letter of letters) {
//     invertedString +=
//       letter === letter.toLowerCase()
//         ? letter.toUpperCase()
//         : letter.toLowerCase();
//   }

//   return invertedString
// }

// console.log(changeLeters("JavaScript"));
// console.log(changeLeters("Java"));
// console.log(changeLeters("NodeJS"));

// ++++++++++

// const splitWords = function (title) {
//   const slug = title.toLocaleLowerCase().split(" ").join("--");

//   return slug;
// };

// console.log(splitWords("Top 10 benefits of React framework"));
// console.log(splitWords("Top programs for new person of programing"));
// console.log(splitWords("You can change this word"));

// ++++++++

// const array1 = [2, 5, 7, 12];
// const array2 = [5, 7, 8, 10];1
// let total = 0;
// const numbers = array1.concat(array2);

// for (const number of numbers) {
//   total += number;
// }
// console.log(total)

// ++++++++

// const add = function (a, b, c, d, ...args) {

//   console.log(args)
//   let total = 0;

//   for (const arg of args) {
//     total += arg
//   }

//   return total
// };

// console.log(add(1, 2, 3, 4, 5));
// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));

// ++++++++++++++++++++


// const filterNumbers = function (array, ...args) {
//   console.log('array: ', array);
//   console.log('args: ', args);
//   let uniqueElements = [];

//   for (const element of array) {

//     if (args.includes(element)) {
//       uniqueElements.push(element)
      
//     }
//   }

//   console.log('uniqueElements: - ', uniqueElements);
// }

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));


// ++++++++++++++++++++++++++


// function getEvenNumbers(start, end) {
//     let total = [];
  
//     for (let i = start; i <= end; i += 1) {
//        if (i % 2  === 0) {
//          total.push(i);
    
//        } 
//     }
// console.log(total)
 

// }

// getEvenNumbers(3, 11);  
// getEvenNumbers(3, 12);

// +++++++++++++++++

// function includes(array, value) {

//   let total = [];

//   for (const elem of array) {
//     if (value.includes(elem)) {
//       total.push(elem);
//     }
//   }
//   console.log(total);
 
// }

// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");