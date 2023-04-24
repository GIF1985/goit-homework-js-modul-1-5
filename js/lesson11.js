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
