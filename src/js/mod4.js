/** @format */

// -----------------map-----------------

// const students = [1, 2, -4, 5, 6, -7];

// const scoreStudents = students
//   .map((student) => student)
// console.log(scoreStudents);

// --------------------filter--------------

// const onlinePlayers = players.filter((player) => player.timePlayed > 0);
// console.table(onlinePlayers)

// ------------------find----------------------

// const playerIdToFind = 'player-4';

// const findItems = players.find(({ id }) => id === findItem);
// console.log(findItems)

// const playerNameToFind = 'Chelsy';

// const nameToFind = players.find(({ name }) => name === playerNameToFind);
// console.log(nameToFind)

// --------find_closures----------

// const findPlayersToId = (allPlayers, playersId) => {
//    return allPlayers.find(({ id }) => id === playersId)
// }

// console.log(findPlayersToId(players, 'player-1'));
// console.log(findPlayersToId(players, "player-4"));

//  --------------every  some --------------------

// const isAllOnline = players.every(player => player.online);
// console.log(isAllOnline);

// const isAllOnlineSome = players.some(player => player.online);
// console.log(isAllOnlineSome);

// const hardPlayer = players.some(player => player.timePlayed > 400)
// console.log(hardPlayer)

// ---------------------reduce-------------------
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number);
// console.log(total)

// const salary = {
//   mango: 100,
//   kiwi: 150,
//   ajax: 50,

// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value
//   , 0
// );
// console.log(totalSalary);

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed
//   , 0
// );
// console.log(totalTimePlayed)

// const d1 = players.reduce(
//   (total, { timePlayed, points }) => total + timePlayed + points,
//   0,
// );
// console.log(d1)

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "node.js"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "node.js"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "node.js", "react"] },
// ];

// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);
// console.log(allTags);

// ---statistic------------

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

// краще писати так

// const tagsStats = allTags.reduce((acc, tag) => {
  // if (acc[tag]) {
  //   return {
  //     ...acc,
  //     [tag]: acc.tag + 1,
  //   };
  // }

  // return {
  //   ...acc,
  //   [tag]: 1,
  // };

//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});
// console.log(tagsStats);


// ============== SORT =================
//  

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];



// const byName = [...players].sort((a, b) => {
//   const result = a.name[0] > b.name[0] 
  
//   if (result) {
//     return 1;
//   }

//   if (!result) {
//     return -1
//   }
// });

// console.table(byName);


// +++++++++++++++
//  mod 4 - 43

// const sortByDescendingFriendCount = (users) => {
//   [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ];
  
//   usersFriendsCount = users
//     .sort((a, b) =>b.balance.localeCompare(a.balance))
//     .map(user => user.balance)
//   console.log(usersFriendsCount);
// };  

// console.log(sortByDescendingFriendCount());



// const a = 
//   [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ];

//   const sortByAscendingBalance = users => {
//     return [...users].sort((a, b) => b.friends.length - a.friends.length);
//     }
// console.log(sortByAscendingBalance(a));

