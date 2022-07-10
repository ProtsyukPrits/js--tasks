/** @format */

//
// const myObject = function (message) {
//   console.log(message)
// }

// myObject({ a: 1, b: 2 });

// ++++++++++

// const playList = {
//   name: 'My play list',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
//   changeName(newName) {
//     console.log('this всередині changeName: ', this)

//     this.name = newName;
//   },

//   addTrack(newTrack) {
//     this.tracks.push(newTrack)
//   },

//   addRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount(trackCount) {
//     trackCount = this.tracks.length;
//     return trackCount
//   }
// }

// console.log(playList.getTrackCount());

// playList.changeName('Нове імя');

// playList.addTrack("new track");

// playList.addRating(4);

// console.log(playList);

// +++++++++

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickData = {
//   [inputName]: inputValue,
// }
// console.log(colorPickData);

// +++++++++++++

// const feedback = {
//   good: 5,
//   negative: 10,
//   bad : 5,
// }

// let totalFeedBack = 0

// const values = Object.values(feedback);

// console.log(values)

// for (const value of values) {
// totalFeedBack += value
// }
// console.log('totalFeedBack: ', totalFeedBack)

// ++++++++++++++++

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Apple", online: false },
//   { name: "Lemon", online: true },
// ];

// const findFriendByName = function (allfriend, friendName) {

//   for (const friend of allfriend) {

//     console.log(friend.name)
//     if (friend.name === friendName)
//       return 'Exellent!!'
//   }
//   return 'Error'
// }

// console.log(findFriendByName(friends, "Apple"));
//   console.log("--------------");
// console.log(findFriendByName(friends, "dwdwApe"));

// const getOnlineFriends = function (allfriend, friendName) {
//   const onlineFriend = [];

//   for (const friend of allfriend) {
//     console.log(friend)
//     console.log(friend.online)

//     if (!friend.online) {
//       onlineFriend.push(friend)
//     }
//   }
//   return onlineFriend;
// }

// console.log(getOnlineFriends(friends))

// +++++++++++






// ____CART_______

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
   
//     for (const item of this.items) {

//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }


//     const newProduct = {
//       ...product,
//       quantity: 1,
//     }

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;
//      for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];

//       if (productName === name) {
//         console.log('finded this product: ', productName);
//         console.log(i);
//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;

//      let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },
//   increaseQuantity(productName) { },
//   decreaseQuantity(productName) { 

//   },
// };

// console.log(cart.getItems());

// cart.add({ name: 'mango', price: 50 });
// cart.add({ name: "mango", price: 50 });
// cart.add({ name: "mango", price: 50 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "kiwi", price: 60 });
// cart.add({ name: "orange", price: 120 });
// cart.add({ name: "orange", price: 120 });
// cart.add({ name: "orange", price: 120 });
// cart.add({ name: "orange", price: 120 });


// console.table(cart.getItems());

// console.log("Total: ", cart.countTotalPrice());

// cart.remove('kiwi');
// console.table(cart.getItems());


// cart.clear();
// console.log(cart.getItems());





//  +increaseQuantity(productName) { } 
// -повинно збільшувати quantity на 1,
// додаємо productName якщо є в корзині
// ми зббільшуємо на 1, 
// якщо ні тоді нічого не робимо.

//  +decreaseQuantity(productName) { }
// -шукає властивість в корзині і якщо знаходить тоді зменшує на 1,
// якщо не знаходить тоді нічого


// кнопки +- для к-сті









// ++++++++++++ MOD3.2+++++++++++++

// const playList = {
//   name: 'Evans',
//   ratting: 5,
//   track: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// }
// const { name, ratting, track, trackCount } = playList;

// console.log(playList);

// ++++++++++++

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views, likes },
// } = user;

// console.log(name, tag, followers, views, likes);


// +++++++++++++

// const authors = {
//   kiwi: 4,
//   mango: 5,
//   ajax: 8,
//   lemon: 6,
// }

// const entries = Object.entries(authors);
// console.log(entries);

// for (const [name, ratting] of entries) {
//   // const [name, ratting] = entrie;
//   console.log(name, ratting);
// }

// +++++++++++++++++

// const showProfileInfo = function (userProfile) {

//   const {
//     name,
//     tag,
//     stats: {
//       followers,
//       views,
//       likes,
//     },
//   } = userProfile;
//   console.log(name, tag, followers, views, likes)
// }

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(user);


// ++++++++++++++

// const bookShelf = {
//   books: ['The Last Kingdom'],

//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const indexBook = this.books.indexOf(bookName);
//     this.books.splice(indexBook, 1)
//   }
// };

// console.log(bookShelf.getBooks());

// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks());

// bookShelf.removeBook('The Mist');
// console.log(bookShelf.getBooks())

// +++++++++++++


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 9.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 8.75,
//   },
// ];


// const bookNames = [];

// for (const book of books) {
 

//   console.log(book)
//   console.log(book.title)

//   bookNames.push(book.title);
//   console.log('Book title: ', bookNames)
// };

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating);

// +++++++++++++++
// mod 3 - 12

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;

//     }
//   }

//   // Change code above this line
//   console.log(propCount)
// }
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });


// ++++++++++++++++++++
// mod 3 - 18 

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// getProductPrice("Radar");
// getProductPrice("Grip");

// ++++++++++++++++
// mood 3 =19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
  

// let result = []
//   for (const product of products) {

//     if ('name' === propName) {
//       result.push(product.name)
//     } else if ('price' === propName) {
//       result.push(product.price)
//     } else if ('quantity' === propName) {
//       result.push(product.quantity)
//     }
    
//   }
//  return result
// }

// +++++++++++++++++++++++
// mod 3 - 30

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const total= data;
//   const solution = { category, priority, ...total, completed };
//   console.log(data)
//   console.log(solution)
  
//   // Change code above this line
// }
  

// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });


// +++++++++++++++++++
// mod 3 - 32
// Change code below this line
// function addOverNum(arg1, ...args) {
//   let total = 0;
//   console.log('--', arg1)
//   console.log(args)
//   for (const arg of args) {
    
//     if (arg > arg1) {
//       console.log(total += arg);
//     } 
    
//   }

//   console.log(total)
//   // Change code above this line
// }
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);
// addOverNum(50, 15, 27);

// ++++++++++++++
// mod 3 - 33

// Change code below this line
// function findMatches(arg1, ...args) {
//   console.log(args);
//   console.log(arg1)
//   const matches = []; // Don't change this line
//   for (const arg of args) {
   

//     if (arg1.includes(arg)) {
//      matches.push(arg);
//     }
//   }

//   // Change code above this line
//   console.log(matches);
// }
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);

// ++++++++++++++++++++
// mod 3 - 35 (є проблеми з виведенням!!!!!!!!)
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     console.log(this.books)
//     // Change code above this line
//   },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles");
//  console.log(bookShelf.updateBook());
// // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// +++++++++++++++++
// mod 3 -