/** @format */

// ++++++++++++++++

// const showTag = function () {
//   console.log('showTag -> this', this)
//   console.log('showTag -> this.tag', this.tag)
// }

// const user = {
//   tag: 'Mango',
// };

// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();

// +++++++++++++++++++++

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log("showTag -> this", this)
//       console.log("showTag -> this.tag", this.tag)
//   },
// };

// const invokeAction = function (action) {
//   console.log(action);

//   user.action();
// }

// invokeAction(user.showTag);

// ++++++++++++++++++++
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// }

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter)

// =======btn -> increment, decrement===========

// const counter = {
//   value: 0,
//   increment() {
//     console.log('increment -> this', this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log('decrement -> this', this);
//     this.value -= 1;
//   }
// }

// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector(".js-increment");
// const valueEl = document.querySelector('.js-value');

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

// decrementBtn.addEventListener('click', function () {
//   console.log('Click on decrement');
//   counter.decrement()

//   valueEl.textContent = counter.value;
// })

// incrementBtn.addEventListener("click", function () {
//   console.log("Click on increment");
//   counter.increment()
//   valueEl.textContent = counter.value;
// });

// ======proto============

// const objA = {
//   x: 1,
// }
// console.log(objA)

// const objB = Object.create(objA);
// objB.y = 3;

// console.log(objB)

// const objC = Object.create(objB);
// objC.z = 5;
// console.log(objC)

// ==========constructor ==========

// const Car = function ({ brand, model, price})  {

//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// })

// console.log(myCar);

// const myCar2 = new Car({
//   brand: 'BMW',
//   model: 'x6',
//   price: 50000,
// })

// console.log(myCar2);

// const myCar3 = new Car({
//   brand: "Audi",
//   model: 'A6',
//   price: 30000,
// })
// console.log(myCar3)

// // ===============================
// const User = function ({ email, login, name}) {
//   this.email = email;
//   this.login = login;
//   this.name = name;
// }

// User.prototype.chsngeName = function (newEmail, newLogin, newName) {
//   this.email = newEmail;
//   this.login = newLogin;
//   this.name = newName;
// }

// const myUser = new User({
//   email: '11111111',
//   login: '2222222222',
//   name: 'Dima',
// })

// myUser.chsngeName('111111111119', '2222222222229', 'Dimon')

// console.log(myUser)

// ==============bind =================

// function greet(userName) {
//   return `${userName} wellcome to our "${this.service}"`
// }

// const steam = {
//   service: 'Steam',
// }

// const steamGreet = greet.bind(steam);

// console.log(steamGreet('Dima'));

// const gmail = {
//   service: 'Gmail',
// }

// const gmailGreet = greet.bind(gmail);

// console.log(gmailGreet('Jinjer'))

//++++++++++++++++

// const customer = {
//   firstName: 'Dima',
//   lastName: 'PP',
//   fn1() {
//     return `${this.firstName} ${this.lastName}`
//   },
// };

// function makeCustomers(callback) {
//   console.log(`Wellcome ${callback}`)
// }

// makeCustomers(customer.fn1())

// =============get and set==========
// class User {
//   static Roles = {
//     Admin: "admin",
//     Editor: "editor",
//   };

//   #email;
//   #role;

//   constructor({ role, email }) {
//     this.#role = role;
//     this.#email = email;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User(
//   {
//     email: "mango@gmail.com",
//     role: User.Roles.Admin,
//   });
// console.log(mango);

// const poly = new User(
//   {
//     email: "poly@gmail.com",
//     role: User.Roles.Editor,
//   });
// console.log(poly);


// ++++++++++++++++static method++++++++++++

// class User {
//   static #isTaken = [];

//   static takenIsUse(email) {
//     return User.#isTaken.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#isTaken.push(email);
//   }
// }

// const mango = new User({ email: 'mango@gmail.com' });

// console.log(User.takenIsUse('wddwd'));
// console.log(User.takenIsUse("mango@gmail.com"));



// +++++++++++CHILD CLASS+++++++++++++++

// class User {

//   constructor(email) {
//     this.email = email;
//   }

//   get gmail() {
//     return this.email;
//   }

//   set gmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {

//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts
//   }

//   addPosts(post) {
//     this.posts.push(post)
//   }
// }

// const editor = new ContentEditor({ email:'mango@gmai.com', posts: [] })
// console.log(editor.email)
// console.log(editor.posts)
// editor.addPosts("anyway go fuckyour self");
// console.log(editor)





// =======PLAGIN==========

// const CounterPlugin = f



// ======================== CLASS-GAME==================

// class Hero {
//   constructor({ name = 'hero', xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }


//   gainXp(amount) {
//     console.log(`${this.name} отримує ${amount} досвіду`);
//     this.xp += amount;
//   }
// }

// // 1
// class Warrior extends Hero {
//   constructor({ weapon, ...restProps } = {}) {
//     super(restProps);

//     this.weapon = weapon;
//   }

//   attack() {
//     console.log(`${this.name} атакує використовуючи ${this.weapon}`)
//   }
// }


// const warrior = new Warrior({
//   name: "Furi",
//   xp: 1000,
//   weapon: "Two-hands sword",
// });
// console.log(warrior);
// warrior.attack();
// warrior.gainXp(1000);

// //2
// class Mage extends Hero {
//   constructor({ spells = [], ...restProps } = {}) {
//     super(restProps)

//     this.spells = spells;
//   }

//   cast() {
//   console.log(`${this.name} використовує здібність ${this.spells
//   }`)
// } 
// }

// const mage = new Mage({ name: "Frosten", xp: 1000, spells: ["fireball"] });
// console.log(mage);
// mage.cast();
// mage.gainXp(500);

// // 3
// class Berserk extends Warrior{
//   constructor({ warcry, ...restProps } = {}) {
//     super(restProps)

//     this.warcry = warcry;
//   }

//   babyRage() {
//   console.log(`${this.name} кричить ${this.warcry}`)
// }
// }
// const berserk = new Berserk({
//   name: "Hellboy",
//   xp: 1000,
//   weapon: "axe",
//   warcry: "waaaaaah",
// });
// console.log(berserk)
// berserk.babyRage();
// berserk.attack();
// berserk.gainXp(500);




