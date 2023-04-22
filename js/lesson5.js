//====================================================

// Объекты

//Литерал объекта
//Свойства, ключи (имя) и значения
//Как отличить объект от области видимости

//(делаем плейлист музыки: имя, рейтинг, треки, кол - во треков

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["Трек-1", "трек-2", "трек-3"],
//   trackCount: 3,
// };

// console.log(playlist);

//////////////////////////////////////////////////////

// Объекты
//(делаем плейлист музыки: имя, рейтинг, треки, кол - во треков

/// доступ к свойствам

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["Трек-1", "трек-2", "трек-3"],
//   trackCount: 3,
// };

// // console.log(playlist.name);
// // //или еще можно через obj[""]   /////// работает
// // console.log(playlist["name"]);

// const test = "rating";

// console.log(playlist.test); ////не должно работать
// console.log(playlist[test]); ///////  работает

////////////////////////////////////////////////////

// Объекты
// краткая запись свойств

// const name = "maxim";
// const age = 19;

// const test = {
//   name,
//   age,
// };

// console.log(test);

/////////////////////////////////////////////

//////------------------------------------
// Объекты
// вычисляемые свойства
// будем пользоваться в формах

//<input name="color" value= "tomato"></input>;

// const inputName = "color";
// const inputValue = "tomato";

// const colorPickerData = {
//   [inputName]: inputValue,
// };
// console.log(colorPickerData);
////////////////////////////////////////////////

//////------------------------------------
// Объекты
//ссылочный тип {} ===={}

// const a = { a: 1, b: 2 };
// const b = a;

// console.log(a === b);
////////////////////////////////////////////////

//////------------------------------------
// Объекты
//добавить в функцию или в массив объект

// const a = {
//   d: "1",
//   c: "2",
// };
// const b = [1, 2, 3];

// a.hi = "boss";
// b.hi = "boss";
// console.log(a);
// console.log(b);

//
////////////////////////////////////////////////

////=========================================
///
// Методы объекта и this при обращении к свойствам в методах

//http:/fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg

// const playlist = {
//   name: "Мой супер плейлист",

//   rating: 5,

//   tracks: ["Трек-1", "трек-2", "трек-3"],

//   trackCount: 3,

//   changeName(newName) {
//     console.log("this внутри changeName: ", this);

//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
// };

// playlist.changeName("новое имя");
// playlist.addTrack("новый трек");

// console.log(playlist);

/////////////////////////////////////////////////////////////////////////////

/////==========================================================
//Перебор через for...in Object.keys values entries

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

//Возвращения ключей и значений
// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }
// console.log("totalFeedback: ", totalFeedback);

//Возвращения только значений и значений
// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//   totalFeedback += value;
// }
// console.log(totalFeedback);
///////////////////////////////////////////////////////////////////

///==============================================================
/////
// //Работа с коллекцией (массивом объектов)

// const friends = [
//   { name: "Mango", online: false },

//   { name: "Kiwi", online: true },

//   { name: "Poly", online: true },

//   { name: "Ajax", online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//   console.log(friend.online);

//   friend.newprop = 555;
// }
// console.table(friends);

///////////////////////////////////////////////////////////////////////////

//==============================================================
///// задача1
// /найти друга по имени

// const friends = [
//   { name: "Mango", online: false },

//   { name: "Kiwi", online: true },

//   { name: "Poly", online: true },

//   { name: "Ajax", online: false },
// ];

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.name);

//     if (friend.name === name) {
//       return "НАШЛИ!!!";
//     }
//   }
// };

// console.log(findFriendByName(friends, "Poly"));

////////////////////////////////////////////////////////////////////////////

//==============================================================
/////
// /задача2
// Получаем имена всех друзей

// const friends = [
//   { name: "Mango", online: false },

//   { name: "Kiwi", online: true },

//   { name: "Poly", online: true },

//   { name: "Ajax", online: false },
// ];

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);
//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));
/////////////////////////////////////////////////////////

//==============================================================
/////
// /задача3
// Получаем имена только друзей которые онлайн

// const friends = [
//   { name: "Mango", online: true },

//   { name: "Kiwi", online: true },

//   { name: "Poly", online: true },

//   { name: "Ajax", online: false },
// ];

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);

//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }

//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// const getofflineFriends = function (allFriends) {};

/////////////////////////////////////////////////////////////////////
