//==========================================================================

//операция spread (распыления )

// const numbers = [1000, ...[1, 2, 3], 2000, ...[4, 5, 6], 3000, ...[7, 8, 9]];
// console.log(numbers);

////////////////////////////////////////////////////////////////////////////////

//==========================================================================

//задача
// через spread (распыления )
//поиск самой маленькой или большой температуры (чисто)

// const temps = [16, 17, 18, 19, 20, 21, 22, 23, 24];
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

////////////////////////////////////////////////////////////////////////////////

//==========================================================================

//задача
// сшиваем несколько массивов в один через concat( ) и spread

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// // не юзать
// const xx = lastWeekTemps.concat(currentTemps, nextWeekTemps);

// //юзать
// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

////////////////////////////////////////////////////////////////////////////////

///=============================================================================
//Распыление объектов

//Object.prototype.assign() и spread

// const a = { x: 1, y: 2, g: { hello: "world" } };
// const b = { x: 0, z: 3 };

// // старый способ
// //const c = Object.assign({}, a, b);

// // новый стособ
// const c = {
//   ...a,
//   ...b,
// };
///////////////////////////////////////////////////////////////////////////////////

///=============================================================================
// Деструктуризация объекта
//----Значения по умолчанию
//----Имя переменной отличное от имени свойства

// const playlist = {
//   name: "Мой супер плейлист",

//   rating: 5,

//   tracks: ["Трек-1", "трек-2", "трек-3"],

//   trackCount: 3,
// };

// const { rating, tracks, name, trackCount } = playlist;

// console.log(rating);
// console.log(tracks);
// console.log(name);
// console.log(trackCount);
///////////////////////////////////////////////////////////////////////////////////////

///=============================================================================
// Глубокая Деструктуризация объекта
//
// const profile = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);
///////////////////////////////////////////////////////////////////////////////////////////////

///=============================================================================
// Деструктуризация массивов

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// console.log(red, green, blue);
////////////////////////////////////////////////////////////////////////////////////

///=============================================================================
//операция rest (сбор)

// const profile = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...test11 } = profile;

// console.log(name, tag, location);

// console.log(test11);
///////////////////////////////////////////////////////////////////////////////////////

// Паттерн Объект настроек

//деструктуризация параметра-объекта в подписи функции

//rest при деструктуризации в подписи

// const showProfileInfo = function (userProfile) {
//   const { name, tag, location, ...restProps } = userProfile;

//   console.log(name, tag, location);

//   console.log(restProps);
// };

// const profile = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(profile);

//////////////////////////////////////////////////////////////////////////////////////////

// Работем с коллекцией товаров в корзины

// getItems()
// add(product)
// remove(productName)
// clear()
// countTotalPrice()
// increaseQuantity(productName)
// decreaseQuantity(productName)

// name:
// { name: 'a', price: 50 }
// { name: 'b', price: 70 }
// { name: 'c', price: 90 }
// { name: 'd', price: 100}

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     this.items.push(product);
//   },
//   remove(productName) {
//     for (const item of this.items) {
//       console.log(item);
//       if (productName === item.name) {
//         console.log("нашли такой продукт ", productName);
//       }
//     }
//   },
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: "a", price: 50 });
// cart.add({ name: "b", price: 70 });
// cart.add({ name: "c", price: 90 });
// cart.add({ name: "d", price: 100 });

// console.table(cart.getItems());

// cart.remove("c");

////////////////////////////////////////////////////////////

//////////////=================================================================

//Вариант 2

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
//     const newProduct = { ...product, quantity: 1 };
//     this.items.push(newProduct);
//   },

//   remove(productName) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const item = this.items[i];
//       if (item.name === productName) {
//         this.items.splice(i, 1);
//         return;
//       }
//     }
//   },

//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {
//     let total = 0;
//     for (const item of this.items) {
//       total += item.price * item.quantity;
//     }
//     return total;
//   },

//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//         return;
//       }
//     }
//   },

//   decreaseQuantity(productName) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const item = this.items[i];
//       if (item.name === productName) {
//         if (item.quantity > 1) {
//           item.quantity -= 1;
//         } else {
//           this.items.splice(i, 1);
//         }
//         return;
//       }
//     }
//   },
// };

// // Пример использования
// console.log(cart.getItems()); // []

// cart.add({ name: "a", price: 50 });
// cart.add({ name: "b", price: 70 });
// cart.add({ name: "c", price: 90 });
// cart.add({ name: "d", price: 100 });

// console.log(cart.getItems()); // [{ name: 'a', price: 50, quantity: 1 }, { name: 'b', price: 70, quantity: 1 }, { name: 'c', price: 90, quantity: 1 }, { name: 'd', price: 100, quantity: 1 }]

// cart.increaseQuantity("a");
// console.log(cart.getItems()); // [{ name: 'a', price: 50, quantity: 2 }, { name: 'b', price: 70, quantity: 1 }, { name: 'c', price: 90, quantity: 1 }, { name: 'd', price: 100, quantity: 1 }]

// cart.decreaseQuantity("a");
// console.log(cart.getItems()); // [{ name: 'a', price: 50, quantity: 1 }, { name: 'b', price: 70, quantity: 1 }, { name: 'c', price: 90, quantity: 1 }, { name: 'd', price: 100, quantity: 1 }]

// cart.remove("a");
// cart.remove("b");
// console.log(cart.getItems()); // [{ name: 'b', price: 70, quantity: 1 }, { name: 'c', price: 90, quantity: 1 }, { name: 'd', price: 100, quantity: 1 }]

// cart.clear();
// console.log(cart.getItems()); // []

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
