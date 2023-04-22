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

///======================
// Алгоритм поиска свойства в цепочке прототипов:
// 1. Поиск начинается в собственных свойствах
// 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
// 3. Поиск прекращается при первом совпадении (есть такое свойство)
// 4. Возвращается значение свойства

// const objA = Object.create({ z: 5 });
// objA.y = 100;

// console.log("objA", objA);
// console.log(objA.x);
