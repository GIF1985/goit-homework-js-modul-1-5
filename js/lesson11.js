///=====================Прототип объекта===================
// Прототип объекта
// =https://miro.com/app/board/093_ku@WE@g=/
// - Object.create()
// [[Prototype]] и__proto_____
// - Object.getPrototypeof()
// Собственные свойства и Object.prototype.hasOwn Property()
// Цепочка прототипов

// const objC = {
//   z: 5,
// };
// console.log("objC ", objC);

// const objB = Object.create(objC);
// objB.y = 2;

// console.log("objB", objB);

// // console.log(objB.y);
// // console.log(objB.z);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log("objA", objA);

///======================-============================================
// Алгоритм поиска свойства в цепочке прототипов:
// 1. Поиск начинается в собственных свойствах
// 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
// 3. Поиск прекращается при первом совпадении (есть такое свойство)
// 4. Возвращается значение свойства

// const objA = Object.create({ z: 5 });
// objA.y = 100;

// console.log("objA", objA);
// console.log(objA.x);

///==============================================
// основа ОПП класс, экземпляр, объект, интерфейс

// функции-конструкторы
// Именование
// Оператор new
// - Свойство unction.prototype
// задача

// const Car = function ({ brand, model, price } = {}) {
//   // const { brand, model, price } = config;
//   // 2. ФУНКЦИя вызывается в контексте созданного объекта,
//   //То есть в this записывается ссылка на него
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// Ссылка на объект возвращается в место вызова new Car
// };

// 3. В свойство thts, proto записывается ссылка на объект Car.prototype
//- тоесть Car.prototype ЭТО ПРОТОТИП будущего объекта (экземпляра)

// Car.prototype.sayHi = function () {
//   console.log("Car.prototype.sayHi -> this", this);
//   console.log("Hello :)");
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// console.log(Car.prototype);

// 1. Если функция вызывается через new, создается пустой обьект

// const myCar = new Car({
//   brand: "Audi",
//   model: "Q3",
//   price: 35000,
// });
// console.log(myCar);

// myCar.sayHi();

// const myCar2 = new Car({ brand: "BMW", model: "X6", price: 50000 });
// console.log(myCar2);

// myCar2.sayHi();

// const myCar3 = new Car({ brand: "Audi", model: "A6", price: 65000 });
// console.log(myCar3);

// myCar3.sayHi();

///===========задача 2====
// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// };

// const mango = new User({ email: "mango@mail.com", password: 1111111 });

// mango.changeEmail("my-new-mail@mail.com");
// console.log(mango);
////////////////////////////////////////////////////

//===========================================================================
// Статические свойства
// Кроме публичных и приватных свойств будущего экземпляра, в классе можно объявить его собственные свойства, доступные только классу, но не его экземплярам - статические свойства (static). Они полезны для хранения информации относящейся к самому классу.

// Добавим классу пользователя приватное свойство role - его роль, определяющую набор прав, например администратор, редактор, просто пользователь и т п. Возможные роли пользователей будем хранить как статическое свойство Roles - объект со свойствами.

// Статические свойства объявляются в теле класса. Перед именем свойства добавляется ключевое слово static.

// class User {
//   // Объявление и инициализация статического свойства
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// Статические свойства также могут быть приватные, то есть доступные только внутри класса.
// Для этого имя свойства должно начинаться с символа #, также как приватные свойства.
// Обращение к приватному статическому свойству вне тела класса вызовет ошибку.

// Особенность статических методов в том, что во время их вызова ключевое слово this ссылается на сам класс.
// Это значит что статический метод может получить доступ к статическим свойствам класса,
// но не к свойствам экземпляра.Логично, потому что статические методы вызывает сам класс, а не его экземпляры.

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));
